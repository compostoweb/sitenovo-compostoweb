from fastapi import FastAPI, APIRouter, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import importlib
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import sqlalchemy
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
# loads .env (optional) so CORS_ORIGINS can be configured, but DB vars are not required
load_dotenv(ROOT_DIR / '.env')

# Storage options
STATUS_STORE: list[dict] = []
USE_POSTGRES = False
database = None

# SQLAlchemy metadata and table definition (always declared so Alembic can import it)
metadata = sqlalchemy.MetaData()
status_checks_table = sqlalchemy.Table(
    'status_checks',
    metadata,
    sqlalchemy.Column('id', sqlalchemy.String, primary_key=True),
    sqlalchemy.Column('client_name', sqlalchemy.String),
    # Use a timezone-aware timestamp so Postgres maps it to timestamptz
    sqlalchemy.Column('timestamp', sqlalchemy.DateTime(timezone=True)),
)

# Try to set up Postgres (async) if POSTGRES_URL is present
POSTGRES_URL = os.environ.get('POSTGRES_URL')
if POSTGRES_URL:
    try:
        databases = importlib.import_module('databases')
        sqlalchemy = importlib.import_module('sqlalchemy')

        database = databases.Database(POSTGRES_URL)

        # create table if not exists (sync create via SQLAlchemy engine)
        engine = sqlalchemy.create_engine(POSTGRES_URL.replace('postgresql+asyncpg', 'postgresql'))
        metadata.create_all(engine)

        USE_POSTGRES = True
    except Exception:
        # If not available or connection failed, fallback to in-memory store
        USE_POSTGRES = False

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Import contact router
try:
    from backend.routes.contact import router as contact_router
except ImportError:
    from routes.contact import router as contact_router


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore unexpected fields

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)

    doc = status_obj.model_dump()
    if USE_POSTGRES and database is not None and status_checks_table is not None:
        # When using Postgres (via databases), insert the record
        db_doc = dict(doc)
        # Store native datetime objects when using Postgres (databases+asyncpg supports this)
        query = status_checks_table.insert().values(**db_doc)
        await database.execute(query)
    else:
        # Persist into the in-memory list (simple, non-persistent)
        STATUS_STORE.append(doc)

    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # If using Postgres, fetch from DB and convert timestamps
    if USE_POSTGRES and database is not None and status_checks_table is not None:
        query = status_checks_table.select()
        rows = await database.fetch_all(query)
        # Convert rows to dicts and parse timestamp
        status_checks = [dict(r) for r in rows]
        for check in status_checks:
            # If DB returned a string (older rows) try to parse it; otherwise leave native datetimes
            if isinstance(check.get('timestamp'), str):
                try:
                    check['timestamp'] = datetime.fromisoformat(check['timestamp'])
                except Exception:
                    pass
        return status_checks

    # Fallback: return the in-memory status checks
    return STATUS_STORE

# Include contact router
api_router.include_router(contact_router)

# Include the router in the main app
app.include_router(api_router)

# Serve frontend build when available
static_path = ROOT_DIR / 'static'
if static_path.exists():
    # Mount the frontend build at the app root so paths like /static/js/... map correctly to
    # files produced by Create React App (build/static/js/...). Mounting at '/' and enabling
    # html=True lets StaticFiles serve index.html and all assets as expected in production.
    app.mount('/', StaticFiles(directory=str(static_path), html=True), name='static')

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    # Disconnect Postgres connection if used
    if database is not None:
        await database.disconnect()


@app.on_event("startup")
async def startup_db_client():
    if USE_POSTGRES and database is not None:
        await database.connect()

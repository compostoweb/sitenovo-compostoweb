from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import importlib
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
# loads .env (optional) so CORS_ORIGINS can be configured, but DB vars are not required
load_dotenv(ROOT_DIR / '.env')

# Storage options
STATUS_STORE: list[dict] = []
USE_MONGO = False
client = None
db = None

# Try to set up MongoDB client if environment variable present and module available
if os.environ.get('MONGO_URL'):
    try:
        motor = importlib.import_module('motor.motor_asyncio')
        AsyncIOMotorClient = motor.AsyncIOMotorClient
        mongo_url = os.environ['MONGO_URL']
        client = AsyncIOMotorClient(mongo_url)
        db_name = os.environ.get('DB_NAME', 'test_database')
        db = client[db_name]
        USE_MONGO = True
    except Exception:
        # if motor not installed or connection problem, fallback to in-memory store
        USE_MONGO = False

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


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
    if USE_MONGO and db is not None:
        # When using MongoDB, store a serializable document
        db_doc = dict(doc)
        # Convert datetime to ISO string for Mongo
        if isinstance(db_doc.get('timestamp'), datetime):
            db_doc['timestamp'] = db_doc['timestamp'].isoformat()
        await db.status_checks.insert_one(db_doc)
    else:
        # Persist into the in-memory list (simple, non-persistent)
        STATUS_STORE.append(doc)

    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # If using MongoDB, fetch from DB and convert timestamps
    if USE_MONGO and db is not None:
        status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
        # Convert ISO string timestamps back to datetime objects
        for check in status_checks:
            if isinstance(check.get('timestamp'), str):
                try:
                    check['timestamp'] = datetime.fromisoformat(check['timestamp'])
                except Exception:
                    pass
        return status_checks

    # Fallback: return the in-memory status checks
    return STATUS_STORE

# Include the router in the main app
app.include_router(api_router)

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
    # Close MongoDB client if used
    if client is not None:
        client.close()

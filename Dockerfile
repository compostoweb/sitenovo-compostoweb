## Multi-stage Dockerfile for single-image production deployment
# - Builds frontend with Node and copies build into backend static folder
# - Installs backend dependencies and runs uvicorn

### Stage: frontend build
FROM node:18-alpine AS frontend-build
WORKDIR /app
# copy package files first for caching
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY frontend/ ./
RUN npm run build

### Stage: runtime (Python backend + serve frontend static)
FROM python:3.11-slim
WORKDIR /app

# system deps for some python packages if needed
RUN apt-get update && apt-get install -y --no-install-recommends build-essential gcc git && rm -rf /var/lib/apt/lists/*

# Install Python deps
COPY backend/requirements.txt ./requirements.txt
RUN python -m pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ ./backend/

# Copy frontend build into backend static folder
COPY --from=frontend-build /app/build ./backend/static

EXPOSE 8000
ENV PYTHONUNBUFFERED=1

ENV PORT=8000
CMD ["sh", "-c", "uvicorn backend.server:app --host 0.0.0.0 --port ${PORT:-8000}"]

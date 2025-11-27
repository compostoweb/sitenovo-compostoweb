FROM python:3.11-slim
WORKDIR /app

# system deps
RUN apt-get update && apt-get install -y --no-install-recommends build-essential gcc git && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt ./requirements.txt
RUN python -m pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

COPY backend/ ./backend/

EXPOSE 8000
ENV PYTHONUNBUFFERED=1
CMD ["uvicorn", "backend.server:app", "--host", "0.0.0.0", "--port", "8000"]

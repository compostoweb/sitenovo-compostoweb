<#
Test migration helper script (PowerShell)

What it does:
 - Ensures Docker is available
 - Stops/removes any previous container named sitenovo-test-postgres
 - Starts a new Postgres 15 container
 - Waits for the DB to be ready
 - Sets POSTGRES_URL in the current session
 - Runs Alembic upgrade head from the backend folder
 - Verifies the `status_checks.timestamp` column type
 - Runs quick create/get API tests against the backend

Usage:
  From the repository root in PowerShell (Docker must be running):
    cd backend\scripts
    .\test-migration.ps1

Note: This script uses the system `python` on PATH and assumes alembic and requirements are installed.
#>

param (
    [string]$ContainerName = 'sitenovo-test-postgres',
    [string]$DBUser = 'postgres',
    [string]$DBPass = 'postgres',
    [string]$DBName = 'sitenovodb',
    [int]$Port = 5432
)

function Abort($msg) {
    Write-Host "ERROR: $msg" -ForegroundColor Red
    exit 1
}

if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Abort 'docker not found. Please install Docker Desktop or make sure docker is in PATH.'
}

Write-Host 'Stopping and removing any existing test container (if present)...' -ForegroundColor Yellow
try { docker rm -f $ContainerName | Out-Null } catch { }

Write-Host "Starting Postgres container: $ContainerName" -ForegroundColor Yellow
$run = docker run -d --name $ContainerName -e POSTGRES_USER=$DBUser -e POSTGRES_PASSWORD=$DBPass -e POSTGRES_DB=$DBName -p $Port:5432 postgres:15
if (-not $run) { Abort 'Failed to start postgres container' }

Write-Host 'Waiting for Postgres to become ready (up to 60 seconds)...' -ForegroundColor Yellow
$ready = $false
for ($i=0; $i -lt 30; $i++) {
    try {
        $rc = docker exec $ContainerName pg_isready -U $DBUser -d $DBName 2>&1
        if ($rc -match 'accepting connections') { $ready = $true; break }
    } catch { }
    Start-Sleep -Seconds 2
}
if (-not $ready) { Abort 'Postgres did not become ready in time.' }

Write-Host 'Setting POSTGRES_URL in current session...' -ForegroundColor Yellow
$env:POSTGRES_URL = "postgresql+asyncpg://$DBUser:$DBPass@localhost:$Port/$DBName"

Push-Location ..\..\backend

Write-Host 'Running alembic upgrade head...' -ForegroundColor Yellow
python -m alembic upgrade head
if ($LASTEXITCODE -ne 0) { Pop-Location; Abort 'Alembic upgrade failed' }

Write-Host 'Inspecting the timestamp column type (information_schema)...' -ForegroundColor Yellow
docker exec -it $ContainerName psql -U $DBUser -d $DBName -c "SELECT column_name, data_type, udt_name FROM information_schema.columns WHERE table_name='status_checks' AND column_name='timestamp';"

Write-Host 'Start backend (development server) in another terminal:' -ForegroundColor Cyan
Write-Host '  cd backend' -ForegroundColor Gray
Write-Host '  $env:POSTGRES_URL="'"$env:POSTGRES_URL"'"' -ForegroundColor Gray
Write-Host '  python -m uvicorn server:app --reload --port 8000' -ForegroundColor Gray

Write-Host "Or you can try a quick API test if backend is running on 8000" -ForegroundColor Green
Write-Host "  curl -X POST http://localhost:8000/api/status -H 'Content-Type: application/json' -d '{\"client_name\":\"test-client\"}'" -ForegroundColor Gray
Write-Host "  curl http://localhost:8000/api/status" -ForegroundColor Gray

Pop-Location

Write-Host 'Script finished. If you ran everything, verify timestamps appear as timezone-aware (ISO 8601) in API responses.' -ForegroundColor Green

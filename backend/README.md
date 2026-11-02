# MedSymphony AI — Backend

FastAPI service. Step 2 (foundation): config, logging, DB session, CORS, error handlers, `/api/health`.

## Setup (PowerShell)

    cd backend
    python -m venv .venv
    .venv\Scripts\Activate.ps1
    pip install -r requirements.txt
    copy .env.example .env
    uvicorn app.main:app --reload --port 8000
    pytest -q

Health check: http://localhost:8000/api/health -> {"status":"ok","database":"ok"}

Dev uses SQLite; production uses PostgreSQL via `DATABASE_URL` (`postgresql+psycopg://...`).
Production refuses to start with the default `SECRET_KEY`.

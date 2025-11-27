Deploy e Backup (Resumo)

Este documento reúne instruções práticas de deploy e backup para o projeto Composto Web.

Observação: o backend suporta fallback entre armazenamento em memória e PostgreSQL. Se você optar por usar Postgres em produção, configure backups regulares.

## Backup (Postgres - opcional)

Exemplo de backup (pg_dump):

```bash
pg_dump -h localhost -U postgres -d postgres -F c -b -v -f "/caminho/para/backup/postgres_backup.dump"
tar -czf postgres_backup_$(date +%Y%m%d).tar.gz /caminho/para/backup/postgres_backup.dump
```

Restauração (pg_restore):

```bash
pg_restore -h localhost -U postgres -d postgres -v "/caminho/para/backup/postgres_backup.dump"
```

### Migrações com Alembic

Alembic foi configurado no backend para aplicar migrações de schema.

Exemplo para rodar localmente (no backend venv):

```powershell
cd backend
.\.venv\Scripts\Activate
alembic -c alembic.ini upgrade head
```

## Export / Deploy (passo a passo)

1. Gere build frontend:

```bash
cd frontend
npm run build
```

2. Suba o backend (ex.: container ou serviço no host):

```powershell
cd backend
.venv\Scripts\activate
python -m pip install -r requirements.txt
python -m uvicorn backend.server:app --host 0.0.0.0 --port 8000
```

3. Para production em container — veja a seção específica do Portainer / EasyPanel no README RUNNING.md (arquivo raiz).

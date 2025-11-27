Deploy e Backup (Resumo)

Este documento reúne instruções práticas de deploy e backup para o projeto Composto Web.

Observação: o backend suporta fallback entre armazenamento em memória e MongoDB. Se você optar por usar MongoDB em produção, configure backups regulares.

## Backup (MongoDB - opcional)

Exemplo de export (mongodump):

```bash
mongodump --uri="mongodb://localhost:27017" --db=test_database --out=/caminho/para/backup
tar -czf mongodb_backup_$(date +%Y%m%d).tar.gz /caminho/para/backup
```

Restauração (mongorestore):

```bash
mongorestore --uri="mongodb://localhost:27017" --db=test_database /caminho/para/backup/test_database/
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

# Como rodar e fazer deploy — Composto Web (PT-BR)

Este guia rápido mostra como executar o projeto localmente e as instruções de deploy no Portainer e no EasyPanel.

---

## 1) Visão geral

O repositório contém:
- backend/ — FastAPI (Python)
- frontend/ — React (Create React App + CRACO)

O backend suporta Fallback entre Memória e PostgreSQL:
 - Se existir a variável de ambiente POSTGRES_URL, o backend tentará conectar ao PostgreSQL.
 - Caso contrário, o backend usa um armazenamento em memória (sem persistência entre reinícios).

Você pode optar por usar Postgres em vez de Mongo — veja a seção "Postgres vs Mongo" mais abaixo.

---

## 2) Rodando localmente (desenvolvimento)

Requisitos: Python 3.10+ e Node.js + npm

Backend (Windows / PowerShell):

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
# opcional: configure backend/.env com POSTGRES_URL se quiser testar com Postgres (ex.: postgresql://user:pass@localhost:5432/dbname)
.\.venv\Scripts\python -m uvicorn backend.server:app --reload --host 127.0.0.1 --port 8000
```

### Migrações (Alembic)

Se você estiver usando Postgres, rode as migrações para criar as tabelas:

```powershell
# instale alembic no venv se necessário
.\.venv\Scripts\python -m pip install alembic
# execute as migrações a partir da pasta backend
Set-Location -Path backend
Set-Item -Path Env:POSTGRES_URL -Value "postgresql://postgres:postgres@localhost:5432/postgres"
alembic -c alembic.ini upgrade head
```

Frontend (Windows / PowerShell):

```powershell
cd frontend
npm install --legacy-peer-deps
npm start
# acessa em http://localhost:3000
```

Rodar ambos com um só comando (root):

```powershell
npm run start:all
```

---

## 3) Deploy leve com Portainer (Docker)

Pré-requisitos: Docker e Portainer instalados no host.

Exemplo básico (transformar em imagem Docker):

1) Crie Dockerfile(s) para backend e frontend (se já não existir). Exemplo simples para backend:

Dockerfile (backend):

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ ./
EXPOSE 8000
CMD ["uvicorn", "backend.server:app", "--host", "0.0.0.0", "--port", "8000"]
```

2) Para frontend, gere o build e construa uma imagem (ou sirva com um servidor web):

```bash
cd frontend
npm run build
# use uma imagem nginx para servir os arquivos estáticos ou crie container que sirva os arquivos
```

3) No Portainer:
- Suba as imagens para um registry (ou use build direto no host)
- Crie stacks/services: um serviço para o backend (porta 8000) e outro para o frontend (serving em 80/443)
### 3.a) Usando o docker-compose.production.yml (no host ou no Portainer stack)

1. Na raiz do repositório há um arquivo `docker-compose.production.yml` que cria serviços:
	- db (Postgres)
	- backend (built da pasta backend)
	- frontend (construído a partir do Dockerfile em frontend e servido pelo nginx)

2. Para subir no host (console):

```bash
docker compose -f docker-compose.production.yml up -d --build
```

3. No Portainer: crie uma nova Stack e cole o conteúdo do arquivo `docker-compose.production.yml` ou faça o upload. Ajuste variáveis de ambiente se necessário.

Para subir apenas o backend (ex.: em Portainer/EasyPanel) você pode usar o `docker-compose.backend.yml`:

```bash
docker compose -f docker-compose.backend.yml up -d --build
```

E para subir apenas o frontend estático com nginx, use `docker-compose.frontend.yml`:

```bash
docker compose -f docker-compose.frontend.yml up -d --build
```

 - Configure variáveis de ambiente (POSTGRES_URL, CORS_ORIGINS) no serviço do backend

4) Rede e persistência:
 - Se usar Postgres em container, crie também um serviço/volume para persistência do banco

---

## 4) Deploy via EasyPanel

EasyPanel é uma interface para gerenciar containers — o processo é semelhante a usar Portainer:

- Crie ou envie a imagem Docker do backend e frontend (ou use templates do EasyPanel)
- Configure variáveis de ambiente para o backend (POSTGRES_URL)
- Crie volumes para persistência (por exemplo, dados do Postgres)
- Configure redes ou proxies (se necessário) para expor frontend e backend

---

## 5) Postgres vs Mongo (resposta à sua dúvida)

Sim, é totalmente possível usar PostgreSQL em vez do MongoDB — cada escolha tem tradeoffs:

- MongoDB (NoSQL): ainda é uma opção documental — se quiser usar Mongo, posso re-adaptar o backend para suportar ambos.
- PostgreSQL (SQL): ACID, consultas relacionais, transações e suporte a SQL. Recomendado quando você precisa de integridade relacional e consultas complexas.

Se quiser migrar para Postgres eu recomendo:
1. Adicionar SQLAlchemy/Databases/asyncpg e modelar o schema (ou usar Tortoise ORM/SQLModel/others)
2. Criar migration scripts (Alembic) para evoluir o schema
3. Atualizar o backend para usar a nova camada de acesso a dados e testes

Posso implementar essa migração (ou um fallback que suporte Mongo e Postgres) se quiser — diga qual prefere.

---

## 6) Observações finais

 - O backend atualmente tem fallback automático: se `POSTGRES_URL` não estiver definido, ele usa memória.
- Se desejar persistência simples, eu recomendo migrar para SQLite (fácil de configurar) ou Postgres para produção.
- Posso implementar o suporte a Postgres (ou ambos) e criar scripts de migração caso deseje.

# 🚀 Instalação do Projeto Composto Web

## 📋 Pré-requisitos

- Node.js 18+ e Yarn
- Python 3.9+
- MongoDB 7.0+
- Supervisor (para gerenciar processos)

## 🔧 Passo a Passo

### 1. Instalar MongoDB

**Ubuntu/Debian:**
\`\`\`bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
\`\`\`

### 2. Restaurar Banco de Dados

\`\`\`bash
# Se houver dump
cd mongodb/dump
mongorestore --uri="mongodb://localhost:27017" --db=test_database test_database/

# Verificar
mongosh test_database --eval "db.getCollectionNames()"
\`\`\`

### 3. Configurar Backend

\`\`\`bash
cd /caminho/projeto/backend

# Copiar configuração
cp ../project_export/config/backend.env .env

# Criar ambiente virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Testar
uvicorn server:app --reload
\`\`\`

### 4. Configurar Frontend

\`\`\`bash
cd /caminho/projeto/frontend

# Copiar configuração (se houver)
cp ../project_export/config/frontend.env .env

# Instalar dependências
yarn install

# Testar
yarn start
\`\`\`

### 5. Configurar URLs

**Backend (.env):**
\`\`\`env
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
\`\`\`

**Frontend (.env):**
\`\`\`env
REACT_APP_BACKEND_URL=http://seu-dominio.com
\`\`\`

### 6. Iniciar Serviços

\`\`\`bash
# Backend
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001

# Frontend (outro terminal)
cd frontend
yarn start
\`\`\`

## ✅ Verificação

- Backend: http://localhost:8001/api/
- Frontend: http://localhost:3000

## 🔐 Segurança

Antes de colocar em produção:
1. Altere CORS_ORIGINS para domínios específicos
2. Configure autenticação no MongoDB
3. Use HTTPS
4. Configure firewall
5. Use variáveis de ambiente seguras

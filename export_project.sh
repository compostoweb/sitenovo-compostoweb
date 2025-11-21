#!/bin/bash

# Script de Exportação Completa do Projeto Composto Web
# Inclui: Banco de dados + Configurações + Estrutura

echo "🚀 Exportando projeto Composto Web..."

# Configurações
EXPORT_DIR="/app/project_export"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="test_database"
MONGO_URI="mongodb://localhost:27017"

# Criar diretório de exportação
mkdir -p $EXPORT_DIR

# 1. Exportar estrutura do banco (mesmo se vazio)
echo "📊 Exportando estrutura do MongoDB..."
mkdir -p $EXPORT_DIR/mongodb

# Exportar informações do banco
mongosh $DB_NAME --quiet --eval "
db.getCollectionNames().forEach(function(collection) {
    print('Coleção: ' + collection);
    print('Documentos: ' + db[collection].countDocuments());
    print('---');
});
" > $EXPORT_DIR/mongodb/database_info.txt 2>/dev/null || echo "Banco vazio ou sem coleções" > $EXPORT_DIR/mongodb/database_info.txt

# Fazer dump se houver dados
mongodump --uri="$MONGO_URI" --db=$DB_NAME --out=$EXPORT_DIR/mongodb/dump 2>/dev/null || echo "Sem dados para exportar" > $EXPORT_DIR/mongodb/dump_status.txt

# 2. Copiar arquivos de configuração
echo "⚙️  Copiando configurações..."
mkdir -p $EXPORT_DIR/config

# Backend .env
cp /app/backend/.env $EXPORT_DIR/config/backend.env 2>/dev/null || echo "MONGO_URL=mongodb://localhost:27017\nDB_NAME=test_database\nCORS_ORIGINS=*" > $EXPORT_DIR/config/backend.env

# Frontend .env
cp /app/frontend/.env $EXPORT_DIR/config/frontend.env 2>/dev/null || echo "Arquivo .env frontend não encontrado" > $EXPORT_DIR/config/frontend_env_status.txt

# Requirements
cp /app/backend/requirements.txt $EXPORT_DIR/config/ 2>/dev/null
cp /app/frontend/package.json $EXPORT_DIR/config/ 2>/dev/null

# 3. Criar script de instalação
echo "📝 Criando script de instalação..."
cat > $EXPORT_DIR/INSTALAR.md << 'EOF'
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
EOF

# 4. Criar README do export
cat > $EXPORT_DIR/README.md << EOF
# Exportação do Projeto Composto Web
Data: $DATE

## 📁 Estrutura

\`\`\`
project_export/
├── mongodb/           # Backup do banco de dados
│   ├── dump/         # Dados do MongoDB
│   └── database_info.txt
├── config/           # Arquivos de configuração
│   ├── backend.env
│   ├── frontend.env
│   ├── requirements.txt
│   └── package.json
├── INSTALAR.md      # Instruções de instalação
└── README.md        # Este arquivo
\`\`\`

## 🚀 Como Usar

1. Transfira este diretório para o novo servidor
2. Siga as instruções em INSTALAR.md
3. Configure as URLs e credenciais apropriadas

## 📦 O que está incluído

- ✅ Estrutura do banco de dados MongoDB
- ✅ Configurações do backend (.env)
- ✅ Configurações do frontend (.env)
- ✅ Lista de dependências Python
- ✅ Lista de dependências Node.js
- ✅ Instruções de instalação

## ⚠️ Importante

- Atualize as URLs no arquivo .env do frontend
- Configure autenticação no MongoDB para produção
- Use HTTPS em produção
- Configure backup automático no novo servidor

## 📞 Suporte

Para dúvidas sobre a instalação, consulte:
- /app/INSTRUCOES_BACKUP_MONGODB.md (no servidor original)
- Documentação do MongoDB: https://docs.mongodb.com/
EOF

# 5. Compactar tudo
echo "🗜️  Compactando exportação..."
cd /app
tar -czf project_export_$DATE.tar.gz project_export/

# Calcular tamanho
SIZE=$(du -h project_export_$DATE.tar.gz | cut -f1)

echo ""
echo "✅ Exportação concluída com sucesso!"
echo ""
echo "📦 Arquivo criado:"
echo "   /app/project_export_$DATE.tar.gz ($SIZE)"
echo ""
echo "📁 Conteúdo:"
ls -lh /app/project_export/
echo ""
echo "📤 Para transferir para outro servidor:"
echo "   scp /app/project_export_$DATE.tar.gz usuario@servidor:/caminho/destino/"
echo ""
echo "📥 Para descompactar no novo servidor:"
echo "   tar -xzf project_export_$DATE.tar.gz"
echo "   cd project_export"
echo "   cat INSTALAR.md"
echo ""

# Limpar exportações antigas (manter últimas 5)
echo "🧹 Limpando exportações antigas..."
ls -t /app/project_export_*.tar.gz 2>/dev/null | tail -n +6 | xargs -r rm

echo ""
echo "📋 Exportações disponíveis:"
ls -lht /app/project_export_*.tar.gz 2>/dev/null | head -5

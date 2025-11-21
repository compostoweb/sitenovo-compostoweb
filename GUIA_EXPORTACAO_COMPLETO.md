# 📦 Guia Completo de Exportação - Projeto Composto Web

## ✅ Status Atual

Seu projeto foi exportado e está pronto para ser instalado em outro servidor!

---

## 📁 Arquivos Criados

### 1. **Exportação Completa**
```
/app/project_export_20251121_172441.tar.gz (3.2K)
```
Este arquivo contém TUDO que você precisa:
- ✅ Configurações do MongoDB
- ✅ Arquivos .env (backend e frontend)
- ✅ Lista de dependências (requirements.txt e package.json)
- ✅ Instruções completas de instalação

### 2. **Documentação**
- `/app/INSTRUCOES_BACKUP_MONGODB.md` - Guia completo de backup/restore MongoDB
- `/app/project_export/INSTALAR.md` - Instruções passo a passo de instalação
- `/app/project_export/README.md` - Visão geral da exportação

### 3. **Scripts Úteis**
- `/app/backup_mongodb.sh` - Script de backup automático do MongoDB
- `/app/export_project.sh` - Script de exportação completa do projeto

---

## 🚀 Como Transferir para Outro Servidor

### Opção 1: Via SCP (SSH)

```bash
# Do servidor atual
scp /app/project_export_20251121_172441.tar.gz usuario@servidor-destino:/home/usuario/

# No servidor destino
cd /home/usuario
tar -xzf project_export_20251121_172441.tar.gz
cd project_export
cat INSTALAR.md
```

### Opção 2: Via Download Direto

Se você tem acesso web ao servidor:
```bash
# Mover para diretório público (se houver)
cp /app/project_export_20251121_172441.tar.gz /var/www/html/downloads/

# Depois baixe via navegador:
# http://seu-servidor.com/downloads/project_export_20251121_172441.tar.gz
```

### Opção 3: Via FTP/SFTP

Use um cliente FTP como FileZilla:
1. Conecte ao servidor
2. Baixe: `/app/project_export_20251121_172441.tar.gz`
3. Faça upload no novo servidor

---

## 📊 Banco de Dados MongoDB

### Status Atual
```
Database: test_database
Host: localhost:27017
Status: ✅ Ativo
Coleções: Vazio (estrutura pronta)
```

### Quando Houver Dados

Para fazer backup quando o banco tiver dados:

```bash
# Executar script de backup
/app/backup_mongodb.sh

# Isso criará:
# /app/mongodb_backup/mongodb_backup_YYYYMMDD_HHMMSS.tar.gz
```

### Restaurar no Novo Servidor

```bash
# 1. Descompactar backup
tar -xzf mongodb_backup_YYYYMMDD_HHMMSS.tar.gz

# 2. Restaurar
mongorestore --uri="mongodb://localhost:27017" --db=test_database YYYYMMDD_HHMMSS/test_database/

# 3. Verificar
mongosh test_database --eval "db.getCollectionNames()"
```

---

## ⚙️ Configuração no Novo Servidor

### Passo 1: Instalar Dependências

```bash
# MongoDB
sudo apt update
sudo apt install -y mongodb-org

# Node.js e Yarn
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g yarn

# Python
sudo apt install -y python3 python3-pip python3-venv
```

### Passo 2: Configurar Projeto

```bash
# Backend
cd /caminho/projeto/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Frontend
cd /caminho/projeto/frontend
yarn install
```

### Passo 3: Configurar Variáveis de Ambiente

**Backend (.env):**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=https://seu-dominio.com
```

**Frontend (.env):**
```env
REACT_APP_BACKEND_URL=https://api.seu-dominio.com
```

### Passo 4: Iniciar Serviços

```bash
# Backend
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 &

# Frontend
cd frontend
yarn build
# Servir com nginx ou outro servidor web
```

---

## 🔐 Checklist de Segurança para Produção

Antes de colocar em produção, configure:

- [ ] Autenticação no MongoDB
- [ ] HTTPS/SSL com certificado válido
- [ ] CORS específico (não usar *)
- [ ] Firewall configurado
- [ ] Backup automático configurado
- [ ] Monitoramento de logs
- [ ] Variáveis de ambiente seguras
- [ ] Rate limiting
- [ ] Validação de inputs
- [ ] Política de senhas fortes

---

## 📞 Comandos Úteis

### Verificar Status

```bash
# MongoDB
sudo systemctl status mongod
mongosh --eval "db.version()"

# Backend
curl http://localhost:8001/api/

# Frontend
curl http://localhost:3000
```

### Backup Rápido

```bash
# MongoDB
/app/backup_mongodb.sh

# Projeto completo
/app/export_project.sh
```

### Ver Logs

```bash
# MongoDB
sudo tail -f /var/log/mongodb/mongod.log

# Backend
sudo tail -f /var/log/supervisor/backend.*.log

# Frontend
sudo tail -f /var/log/supervisor/frontend.*.log
```

---

## 🔄 Automação de Backups

### Configurar Backup Automático Diário

```bash
# Editar crontab
crontab -e

# Adicionar linha (backup diário às 2h)
0 2 * * * /app/backup_mongodb.sh >> /var/log/mongodb_backup.log 2>&1

# Backup semanal do projeto completo (domingo às 3h)
0 3 * * 0 /app/export_project.sh >> /var/log/project_export.log 2>&1
```

---

## 📋 Estrutura do Projeto

```
composto-web/
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.js
│   ├── package.json
│   └── .env
└── mongodb/
    └── (dados gerenciados pelo MongoDB)
```

---

## 🆘 Solução de Problemas

### MongoDB não inicia
```bash
sudo systemctl start mongod
sudo journalctl -u mongod -n 50
```

### Backend não conecta ao MongoDB
```bash
# Verificar se MongoDB está rodando
mongosh --eval "db.version()"

# Verificar arquivo .env
cat backend/.env
```

### Frontend não conecta ao Backend
```bash
# Verificar URL no .env
cat frontend/.env

# Verificar CORS no backend
```

---

## 📚 Recursos Adicionais

- [MongoDB Documentation](https://docs.mongodb.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Deployment Guide](https://docs.fastapi.tiangolo.com/deployment/)

---

## ✨ Resumo Executivo

**Você tem:**
1. ✅ Backup completo do projeto exportado
2. ✅ Instruções detalhadas de instalação
3. ✅ Scripts automatizados para backup
4. ✅ Documentação completa

**Próximos passos:**
1. Transferir arquivo .tar.gz para novo servidor
2. Seguir instruções em INSTALAR.md
3. Configurar variáveis de ambiente
4. Testar aplicação
5. Configurar backups automáticos
6. Colocar em produção

---

**Data de Exportação:** 21 de Novembro de 2025
**Versão do Projeto:** Composto Web - Site Completo
**Status:** ✅ Pronto para Deploy

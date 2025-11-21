# 📦 Instruções de Backup e Restore do MongoDB

## 🔄 Exportar Banco de Dados (Servidor Origem)

### Opção 1: Dump do Banco de Dados Completo

```bash
# Criar backup de todo o banco de dados
mongodump --uri="mongodb://localhost:27017" --db=test_database --out=/caminho/para/backup

# Compactar o backup
cd /caminho/para/backup
tar -czf mongodb_backup_$(date +%Y%m%d).tar.gz test_database/
```

### Opção 2: Exportar Coleção Específica

```bash
# Exportar uma coleção específica em JSON
mongoexport --uri="mongodb://localhost:27017" --db=test_database --collection=nome_colecao --out=colecao.json --pretty

# Exportar todas as coleções
for collection in $(mongosh test_database --quiet --eval "db.getCollectionNames().join('\n')"); do
    mongoexport --uri="mongodb://localhost:27017" --db=test_database --collection=$collection --out=${collection}.json --pretty
done
```

### Opção 3: Backup com Credenciais (Se houver autenticação)

```bash
mongodump --uri="mongodb://usuario:senha@localhost:27017" --db=test_database --out=/caminho/backup --authenticationDatabase=admin
```

---

## 📥 Importar Banco de Dados (Servidor Destino)

### Opção 1: Restore Completo

```bash
# Descompactar backup (se compactado)
tar -xzf mongodb_backup_20250121.tar.gz

# Restaurar banco completo
mongorestore --uri="mongodb://localhost:27017" --db=test_database /caminho/para/backup/test_database/

# Ou restaurar com novo nome
mongorestore --uri="mongodb://localhost:27017" --db=novo_nome_banco /caminho/para/backup/test_database/
```

### Opção 2: Importar Coleção Específica

```bash
# Importar arquivo JSON
mongoimport --uri="mongodb://localhost:27017" --db=test_database --collection=nome_colecao --file=colecao.json

# Importar várias coleções
for file in *.json; do
    collection=$(basename "$file" .json)
    mongoimport --uri="mongodb://localhost:27017" --db=test_database --collection=$collection --file=$file
done
```

### Opção 3: Restore com Credenciais

```bash
mongorestore --uri="mongodb://usuario:senha@localhost:27017" --db=test_database /caminho/backup/test_database/ --authenticationDatabase=admin
```

---

## 🔐 Configuração no Novo Servidor

### 1. Instalar MongoDB

**Ubuntu/Debian:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

**Docker:**
```bash
docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongo:7.0
```

### 2. Verificar Instalação

```bash
mongosh --eval "db.version()"
```

### 3. Restaurar Dados

```bash
mongorestore --uri="mongodb://localhost:27017" --db=test_database /caminho/backup/
```

### 4. Verificar Restauração

```bash
mongosh test_database --eval "db.getCollectionNames()"
mongosh test_database --eval "db.stats()"
```

---

## 📋 Configuração do Backend (.env)

Após restaurar o banco, configure o arquivo `.env` do backend:

```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

Para MongoDB com autenticação:
```env
MONGO_URL="mongodb://usuario:senha@localhost:27017"
DB_NAME="test_database"
```

Para MongoDB Atlas (Cloud):
```env
MONGO_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/?retryWrites=true&w=majority"
DB_NAME="test_database"
```

---

## 🚀 Scripts Automatizados

### Script de Backup Automático

Criar arquivo `/app/backup_mongodb.sh`:

```bash
#!/bin/bash

# Configurações
DB_NAME="test_database"
BACKUP_DIR="/app/mongodb_backup"
DATE=$(date +%Y%m%d_%H%M%S)
MONGO_URI="mongodb://localhost:27017"

# Criar diretório
mkdir -p $BACKUP_DIR

# Fazer backup
mongodump --uri="$MONGO_URI" --db=$DB_NAME --out=$BACKUP_DIR/$DATE

# Compactar
cd $BACKUP_DIR
tar -czf mongodb_backup_$DATE.tar.gz $DATE/
rm -rf $DATE

# Manter apenas últimos 7 backups
ls -t mongodb_backup_*.tar.gz | tail -n +8 | xargs -r rm

echo "Backup concluído: mongodb_backup_$DATE.tar.gz"
```

Tornar executável:
```bash
chmod +x /app/backup_mongodb.sh
```

Executar backup:
```bash
/app/backup_mongodb.sh
```

### Agendar Backup Automático (Cron)

```bash
# Editar crontab
crontab -e

# Adicionar linha para backup diário às 2h da manhã
0 2 * * * /app/backup_mongodb.sh >> /var/log/mongodb_backup.log 2>&1
```

---

## 📊 Comandos Úteis

### Verificar Status do MongoDB
```bash
sudo systemctl status mongod
mongosh --eval "db.adminCommand('ping')"
```

### Ver Tamanho do Banco
```bash
mongosh test_database --eval "db.stats(1024*1024)" # Em MB
```

### Listar Todas as Coleções
```bash
mongosh test_database --eval "db.getCollectionNames()"
```

### Ver Documentos de uma Coleção
```bash
mongosh test_database --eval "db.nome_colecao.find().limit(5).pretty()"
```

### Contar Documentos
```bash
mongosh test_database --eval "db.nome_colecao.countDocuments()"
```

---

## ⚠️ Notas Importantes

1. **Versão do MongoDB**: Certifique-se de que o servidor destino tenha versão compatível
2. **Espaço em Disco**: Verifique espaço disponível antes de restaurar
3. **Permissões**: O usuário deve ter permissões de leitura/escrita
4. **Backup Regular**: Configure backups automáticos no novo servidor
5. **Teste**: Sempre teste a restauração em ambiente de desenvolvimento primeiro
6. **Segurança**: Use credenciais fortes e configure firewall apropriadamente

---

## 🔗 Links Úteis

- [MongoDB Documentation](https://docs.mongodb.com/)
- [mongodump Reference](https://docs.mongodb.com/database-tools/mongodump/)
- [mongorestore Reference](https://docs.mongodb.com/database-tools/mongorestore/)
- [MongoDB Atlas (Cloud)](https://www.mongodb.com/cloud/atlas)

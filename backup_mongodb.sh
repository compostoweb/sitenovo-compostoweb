#!/bin/bash

# Script de Backup MongoDB - Composto Web
# Uso: ./backup_mongodb.sh

echo "🚀 Iniciando backup do MongoDB..."

# Configurações
DB_NAME="test_database"
BACKUP_DIR="/app/mongodb_backup"
DATE=$(date +%Y%m%d_%H%M%S)
MONGO_URI="mongodb://localhost:27017"

# Criar diretório de backup
mkdir -p $BACKUP_DIR

# Fazer dump do banco
echo "📦 Criando dump do banco '$DB_NAME'..."
mongodump --uri="$MONGO_URI" --db=$DB_NAME --out=$BACKUP_DIR/$DATE

# Verificar se dump foi criado
if [ -d "$BACKUP_DIR/$DATE/$DB_NAME" ]; then
    echo "✅ Dump criado com sucesso!"
    
    # Compactar backup
    echo "🗜️  Compactando backup..."
    cd $BACKUP_DIR
    tar -czf mongodb_backup_$DATE.tar.gz $DATE/
    
    # Remover pasta descompactada
    rm -rf $DATE
    
    # Calcular tamanho
    SIZE=$(du -h mongodb_backup_$DATE.tar.gz | cut -f1)
    
    echo ""
    echo "✅ Backup concluído com sucesso!"
    echo "📁 Arquivo: $BACKUP_DIR/mongodb_backup_$DATE.tar.gz"
    echo "💾 Tamanho: $SIZE"
    echo ""
    echo "📤 Para transferir para outro servidor:"
    echo "   scp $BACKUP_DIR/mongodb_backup_$DATE.tar.gz usuario@servidor:/caminho/destino/"
    echo ""
    echo "📥 Para restaurar no novo servidor:"
    echo "   tar -xzf mongodb_backup_$DATE.tar.gz"
    echo "   mongorestore --uri='mongodb://localhost:27017' --db=$DB_NAME $DATE/$DB_NAME/"
    
    # Manter apenas últimos 7 backups
    echo "🧹 Limpando backups antigos (mantendo últimos 7)..."
    ls -t $BACKUP_DIR/mongodb_backup_*.tar.gz | tail -n +8 | xargs -r rm
    
    echo ""
    echo "📋 Backups disponíveis:"
    ls -lh $BACKUP_DIR/mongodb_backup_*.tar.gz 2>/dev/null || echo "   Este é o primeiro backup"
    
else
    echo "❌ Erro ao criar dump do banco de dados!"
    exit 1
fi

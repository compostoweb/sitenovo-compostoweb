# Script para configurar o banco de dados MongoDB
# Execute este script após a instalação do MongoDB estar completa

Write-Host "=== Configuração do Banco de Dados ===" -ForegroundColor Green

# Verificar se o MongoDB está instalado
if (-not (Get-Command mongosh -ErrorAction SilentlyContinue)) {
    Write-Host "MongoDB não está instalado ou não está no PATH." -ForegroundColor Red
    Write-Host "Por favor, instale o MongoDB primeiro." -ForegroundColor Yellow
    exit 1
}

# Verificar se o serviço está rodando
Write-Host "`nVerificando serviço MongoDB..." -ForegroundColor Cyan
$service = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue

if ($service) {
    if ($service.Status -ne "Running") {
        Write-Host "Iniciando serviço MongoDB..." -ForegroundColor Yellow
        Start-Service -Name "MongoDB"
        Start-Sleep -Seconds 3
    }
    Write-Host "Serviço MongoDB está rodando!" -ForegroundColor Green
} else {
    Write-Host "Serviço MongoDB não encontrado. Tentando iniciar manualmente..." -ForegroundColor Yellow
    try {
        net start MongoDB
        Start-Sleep -Seconds 3
    } catch {
        Write-Host "Não foi possível iniciar o serviço automaticamente." -ForegroundColor Red
        Write-Host "Execute manualmente: net start MongoDB" -ForegroundColor Yellow
    }
}

# Criar banco de dados e coleção
Write-Host "`nCriando banco de dados 'test_database'..." -ForegroundColor Cyan

$mongoScript = @"
// Conectar ao MongoDB
use test_database

// Criar coleção se não existir
if (db.getCollectionNames().indexOf('status_checks') === -1) {
    db.createCollection('status_checks')
    print('Coleção status_checks criada!')
} else {
    print('Coleção status_checks já existe!')
}

// Verificar coleções
print('Coleções no banco:')
db.getCollectionNames().forEach(function(collection) {
    print('  - ' + collection)
})

// Contar documentos
var count = db.status_checks.countDocuments()
print('Total de documentos em status_checks: ' + count)
"@

try {
    $mongoScript | mongosh --quiet
    Write-Host "`nBanco de dados configurado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "Erro ao configurar banco de dados." -ForegroundColor Red
    Write-Host "Execute manualmente no mongosh:" -ForegroundColor Yellow
    Write-Host "use test_database" -ForegroundColor Cyan
    Write-Host "db.createCollection('status_checks')" -ForegroundColor Cyan
}

Write-Host "`n=== Configuração Concluída ===" -ForegroundColor Green
Write-Host "O banco de dados está pronto para uso!" -ForegroundColor Green


# Configuração do Backend - Email para Formulário de Contato

## Configurações de Email SMTP

O formulário de contato do site envia emails através de um servidor SMTP. Siga os passos abaixo para configurar:

### 1. Criar arquivo `.env`

Copie o arquivo `.env.example` e renomeie para `.env`:

```powershell
Copy-Item .env.example .env
```

### 2. Configurar variáveis de ambiente

Edite o arquivo `.env` com suas credenciais:

```env
# Gmail (recomendado para testes)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=sua-senha-de-app

# Email que receberá os formulários
CONTACT_EMAIL=contato@compostoweb.com
```

### 3. Configurar Gmail (se usar Gmail)

Para usar o Gmail como servidor SMTP:

1. **Ativar verificação em duas etapas**:
   - Acesse: https://myaccount.google.com/security
   - Ative a "Verificação em duas etapas"

2. **Criar senha de app**:
   - Acesse: https://myaccount.google.com/apppasswords
   - Selecione "App: E-mail" e "Dispositivo: Outro"
   - Digite um nome (ex: "Site Composto Web")
   - Copie a senha gerada (16 caracteres)
   - Use esta senha no campo `SMTP_PASSWORD`

### 4. Outras opções de SMTP

#### **SendGrid** (recomendado para produção)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.sua-api-key-aqui
```

#### **Mailgun**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=seu-usuario@dominio
SMTP_PASSWORD=sua-senha-mailgun
```

#### **Outlook/Office365**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=seu-email@outlook.com
SMTP_PASSWORD=sua-senha
```

### 5. Testar configuração

Reinicie o servidor backend após configurar o `.env`:

```powershell
# Parar servidor (Ctrl+C)
# Iniciar novamente
python server.py
```

Acesse o formulário de contato no site e teste o envio.

## Formato do Email Recebido

O email será recebido formatado em HTML com:
- Nome do contato
- Email (clicável)
- Telefone (se fornecido)
- Empresa (se fornecida)
- Mensagem

O campo **Reply-To** será configurado com o email do contato, permitindo responder diretamente.

## Troubleshooting

### Erro: "Configurações de email não definidas"
- Verifique se o arquivo `.env` existe em `backend/.env`
- Confirme que `SMTP_USER` e `SMTP_PASSWORD` estão preenchidos

### Erro: "Authentication failed"
- Para Gmail: use senha de app, não a senha normal da conta
- Verifique se as credenciais estão corretas

### Erro: "Connection timeout"
- Verifique firewall/antivírus bloqueando porta 587
- Teste com outro provedor SMTP

### Emails não chegam
- Verifique pasta de spam
- Confirme que `CONTACT_EMAIL` está correto
- Teste com outro email de destino

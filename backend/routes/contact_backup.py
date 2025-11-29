from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, field_validator
from typing import Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: str
    
    @field_validator('email')
    @classmethod
    def validate_email(cls, v: str) -> str:
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str

@router.post("/contact")
async def send_contact_email(form_data: ContactForm):
    """
    Endpoint para envio de emails de contato
    Configurar as variáveis de ambiente no arquivo .env:
    - SMTP_HOST
    - SMTP_PORT
    - SMTP_USER
    - SMTP_PASSWORD
    - CONTACT_EMAIL (email que receberá os formulários)
    """
    
    try:
        # Configurações SMTP (use variáveis de ambiente)
        smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_user = os.getenv("SMTP_USER")
        smtp_password = os.getenv("SMTP_PASSWORD")
        contact_email = os.getenv("CONTACT_EMAIL", "adriano@compostoweb.com.br")
        
        if not smtp_user or not smtp_password:
            raise HTTPException(
                status_code=500, 
                detail="Configurações de email não definidas no servidor"
            )
        
        # Criar mensagem
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Novo Contato - {form_data.name}"
        msg['From'] = smtp_user
        msg['To'] = contact_email
        msg['Reply-To'] = form_data.email
        
        # Corpo do email em HTML
        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #4A90E2; border-bottom: 2px solid #4A90E2; padding-bottom: 10px;">
                Novo Contato via Site
              </h2>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <p><strong>Nome:</strong> {form_data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:{form_data.email}">{form_data.email}</a></p>
                {f'<p><strong>Telefone:</strong> {form_data.phone}</p>' if form_data.phone else ''}
                {f'<p><strong>Empresa:</strong> {form_data.company}</p>' if form_data.company else ''}
                
                <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #4A90E2;">
                  <strong>Mensagem:</strong>
                  <p style="margin-top: 10px; white-space: pre-wrap;">{form_data.message}</p>
                </div>
              </div>
              
              <p style="margin-top: 20px; font-size: 12px; color: #666;">
                Enviado via formulário de contato do site Composto Web
              </p>
            </div>
          </body>
        </html>
        """
        
        # Anexar corpo HTML
        msg.attach(MIMEText(html_body, 'html'))
        
        # Enviar email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            "success": True,
            "message": "Mensagem enviada com sucesso!"
        }
        
    except smtplib.SMTPException as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao enviar email: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro inesperado: {str(e)}"
        )

        if not re.match(pattern, v):
            raise ValueError('Email inv�lido')
        return v
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str

@router.post("/contact")
async def send_contact_email(form_data: ContactForm):
    """
    Endpoint para envio de emails de contato
    Configurar as variáveis de ambiente no arquivo .env:
    - SMTP_HOST
    - SMTP_PORT
    - SMTP_USER
    - SMTP_PASSWORD
    - CONTACT_EMAIL (email que receberá os formulários)
    """
    
    try:
        # Configurações SMTP (use variáveis de ambiente)
        smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_user = os.getenv("SMTP_USER")
        smtp_password = os.getenv("SMTP_PASSWORD")
        contact_email = os.getenv("CONTACT_EMAIL", "adriano@compostoweb.com.br")
        
        if not smtp_user or not smtp_password:
            raise HTTPException(
                status_code=500, 
                detail="Configurações de email não definidas no servidor"
            )
        
        # Criar mensagem
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Novo Contato - {form_data.name}"
        msg['From'] = smtp_user
        msg['To'] = contact_email
        msg['Reply-To'] = form_data.email
        
        # Corpo do email em HTML
        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #4A90E2; border-bottom: 2px solid #4A90E2; padding-bottom: 10px;">
                Novo Contato via Site
              </h2>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <p><strong>Nome:</strong> {form_data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:{form_data.email}">{form_data.email}</a></p>
                {f'<p><strong>Telefone:</strong> {form_data.phone}</p>' if form_data.phone else ''}
                {f'<p><strong>Empresa:</strong> {form_data.company}</p>' if form_data.company else ''}
                
                <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #4A90E2;">
                  <strong>Mensagem:</strong>
                  <p style="margin-top: 10px; white-space: pre-wrap;">{form_data.message}</p>
                </div>
              </div>
              
              <p style="margin-top: 20px; font-size: 12px; color: #666;">
                Enviado via formulário de contato do site Composto Web
              </p>
            </div>
          </body>
        </html>
        """
        
        # Anexar corpo HTML
        msg.attach(MIMEText(html_body, 'html'))
        
        # Enviar email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            "success": True,
            "message": "Mensagem enviada com sucesso!"
        }
        
    except smtplib.SMTPException as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao enviar email: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro inesperado: {str(e)}"
        )

import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Clock, Users } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      // Opção 1: Envio via API Backend (recomendado para produção)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      // Reset success message após 5 segundos
      setTimeout(() => {
        setFormStatus({ submitting: false, success: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente via email.'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20 overflow-x-hidden">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity .6s ease-out, transform .6s ease-out; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero */}
      <section className="py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[520px] bg-[#4A90E2]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12 md:mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <Sparkles className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Fale Conosco</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight px-2">
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">transformar</span> seu negócio?
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
              Entre em contato e descubra como podemos acelerar sua operação com tecnologia, automação e inteligência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-12 w-full">
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6 fade-in-section w-full">
              <div className="p-4 md:p-8 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 w-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 ">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#4A90E2]/10 rounded-xl flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a href="mailto:contato@compostoweb.com" className="font-semibold hover:text-[#4A90E2] transition-colors">
                        comercial@compostoweb.com.br
                      </a>
                    </div>
                  </div>
                  
                  {/*<div className="flex items-start gap-4">
                    <div className="p-3 bg-[#4A90E2]/10 rounded-xl flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                   <div>
                      <p className="text-sm text-gray-400 mb-1">Telefone</p>
                      <a href="tel:+5511999999999" className="font-semibold hover:text-[#4A90E2] transition-colors">
                        +55 (11) 9999-9999
                      </a>
                    </div>
                  </div>*/}
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#4A90E2]/10 rounded-xl flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Localização</p>
                      <p className="font-semibold">100% Remoto - Todo Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#4A90E2]/10 to-[#F5A623]/10 border border-[#4A90E2]/30">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-[#4A90E2]" />
                  <h3 className="text-lg font-bold">Horário de Atendimento</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Segunda a Sexta: 9h - 18h<br />
                  Sábado e Domingo: Fechado
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#151518] border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-[#F5A623]" />
                  <h3 className="text-lg font-bold">Tempo de Resposta</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Respondemos todas as mensagens em até 24 horas úteis.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-section p-4 md:p-8 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-6 whitespace-nowrap">Envie sua Mensagem</h3>
              
              {/* Success Message */}
              {formStatus.success && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-400">{formStatus.message}</p>
                </div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-400">{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Nome *</label>
                  <Input
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white focus:border-[#4A90E2] transition-colors"
                    required
                    disabled={formStatus.submitting}
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white focus:border-[#4A90E2] transition-colors"
                    required
                    disabled={formStatus.submitting}
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Telefone</label>
                  <Input
                    name="phone"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white focus:border-[#4A90E2] transition-colors"
                    disabled={formStatus.submitting}
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Empresa</label>
                  <Input
                    name="company"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white focus:border-[#4A90E2] transition-colors"
                    disabled={formStatus.submitting}
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Mensagem *</label>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos sobre seu desafio ou projeto..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white min-h-32 focus:border-[#4A90E2] transition-colors resize-none"
                    required
                    disabled={formStatus.submitting}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold py-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#4A90E2]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Enviar Mensagem
                    </span>
                  )}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você concorda com nossa política de privacidade
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
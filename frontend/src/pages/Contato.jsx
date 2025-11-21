import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica de envio
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="text-[#4A90E2]">conversar</span>?
            </h1>
            <p className="text-lg text-gray-300">
              Entre em contato e descubra como podemos transformar sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#4A90E2]/10 rounded-lg">
                      <Mail className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold">contato@compostoweb.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#4A90E2]/10 rounded-lg">
                      <Phone className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Telefone</p>
                      <p className="font-semibold">+55 (11) 9999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#4A90E2]/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Localização</p>
                      <p className="font-semibold">São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">Horário de Atendimento</h3>
                <p className="text-gray-400 text-sm">
                  Segunda a Sexta: 9h - 18h<br />
                  Sábado e Domingo: Fechado
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white"
                  />
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#0a0a0b] border-white/10 text-white min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
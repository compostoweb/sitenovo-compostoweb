import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Handshake, Target, Rocket, Users, Shield, Layers, GitBranch, ChevronRight, CalendarCheck2, FileCheck, BarChart3 } from 'lucide-react';
import { Button } from '../../components/ui/button';

const Parcerias = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Target, title: 'Soluções Complementares', description: 'Amplie seu portfólio com automação, IA e integrações.' },
    { icon: Rocket, title: 'Crescimento Mútuo', description: 'Co-criação de ofertas e atuação conjunta em projetos.' },
    { icon: Users, title: 'Suporte Especializado', description: 'Time técnico e comercial para apoiar seus clientes.' },
    { icon: Shield, title: 'Segurança & Compliance', description: 'Boas práticas, LGPD e padrões enterprise por default.' },
    { icon: Layers, title: 'Arquitetura Modular', description: 'Componentes reutilizáveis e integrações sem atrito.' },
    { icon: GitBranch, title: 'Co-Delivery', description: 'Execução compartilhada com processos e qualidade alinhados.' }
  ];

  const models = [
    {
      title: 'Referral Partner',
      description: 'Indique oportunidades e receba comissão por negócios fechados.',
      bullets: ['Pipeline transparente', 'Contrato de comissão', 'Materiais de venda']
    },
    {
      title: 'Co-Delivery Partner',
      description: 'Entregamos juntos: você lidera o cliente, nós a tecnologia.',
      bullets: ['Squads híbridos', 'Playbooks compartilhados', 'SLA e governança']
    },
    {
      title: 'White-Label Partner',
      description: 'Nossa tecnologia com sua marca para ampliar seu portfólio.',
      bullets: ['Catálogo customizável', 'Treinamento & habilitação', 'Suporte nível 2/3']
    }
  ];

  const steps = [
    { title: 'Diagnóstico', description: 'Alinhamento de proposta de valor e mercados-alvo.' },
    { title: 'Acordo & Modelo', description: 'Definição de modelo (Referral, Co-Delivery, White-Label).' },
    { title: 'Habilitação', description: 'Treinamentos comercial e técnico, materiais e processos.' },
    { title: 'Go-to-Market', description: 'Campanhas, pipeline conjunto e rituais de governança.' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity .6s ease-out, transform .6s ease-out; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[520px] bg-[#4A90E2]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <Handshake className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Programa de Parcerias</span>
            </div>
            <h1 className="text-4xl md:text-6xl md:text-center font-bold mb-6 leading-tight">
              Cresça com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Parcerias Estratégicas</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-1xl mx-auto">
              Co-criamos ofertas, integramos tecnologias e entregamos valor real para clientes —> juntos.
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {benefits.map((b, i) => (
              <Card key={i} className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/40 transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${i * 40}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center">
                      <b.icon className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{b.title}</h3>
                      <p className="text-sm text-gray-400">{b.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modelos de parceria */}
          <div className="mb-20 fade-in-section">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Modelos de Parceria</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {models.map((m, i) => (
                <Card key={i} className="bg-[#151518] border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="h-5 w-5 text-[#F5A623]" />
                      <h3 className="text-lg font-bold text-white">{m.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{m.description}</p>
                    <ul className="space-y-2">
                      {m.bullets.map((it, idx) => (
                        <li key={idx} className="text-sm text-gray-300">• {it}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Passos para se tornar parceiro */}
          <div className="fade-in-section">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Como nos Tornamos Parceiros</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#151518] border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    {[CalendarCheck2, FileCheck, Users, Rocket][i] ? React.createElement([CalendarCheck2, FileCheck, Users, Rocket][i], { className: 'h-5 w-5 text-[#4A90E2]' }) : <CalendarCheck2 className="h-5 w-5 text-[#4A90E2]" />}
                    <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0b] to-[#151518]">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Vamos construir valor juntos?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Envie uma mensagem e agende uma conversa sobre parceria. Em poucos dias, podemos ter um plano conjunto de atuação.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A90E2] text-white font-bold rounded-xl hover:bg-[#3A7BC8] transition-all duration-300 shadow-lg hover:shadow-[#4A90E2]/50">
            Falar sobre Parcerias
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Parcerias;
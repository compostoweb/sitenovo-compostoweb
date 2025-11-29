import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import {
  Building2,
  ShoppingCart,
  Factory,
  Truck,
  Heart,
  GraduationCap,
  Landmark,
  Home,
  Briefcase,
  Banknote,
  Wheat,
  LineChart,
  BadgeCheck,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Setores = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sectors = [
    {
      icon: ShoppingCart,
      name: 'Varejo e E-commerce',
      description: 'Pedidos, estoque, catálogo, preços dinâmicos e integrações marketplace.',
      useCases: ['Integração ERP/Loja', 'RPA de conciliação', 'Atualização de preços', 'Gestão de SKU', 'Recuperação de carrinho'],
      outcomes: ['+18% conversão', '-35% retrabalho', 'SLA atendido']
    },
    {
      icon: Factory,
      name: 'Indústria',
      description: 'Chão de fábrica conectado, apontamentos e qualidade sem papel.',
      useCases: ['Apontamento automático', 'Checklist digital', 'Integração MES/ERP', 'Rastreabilidade', 'OEE em tempo real'],
      outcomes: ['-22% paradas', '+12% produtividade']
    },
    {
      icon: Truck,
      name: 'Logística',
      description: 'Roteirização, tracking e visibilidade fim-a-fim do pedido.',
      useCases: ['Roteirização inteligente', 'Proof of Delivery', 'Rastreamento proativo', 'Auditoria de frete'],
      outcomes: ['-25% custo por entrega', '+30% OTIF']
    },
    {
      icon: Heart,
      name: 'Saúde',
      description: 'Fluxos digitais para atendimento, faturamento e compliance (LGPD).',
      useCases: ['Pré-atendimento digital', 'Integração TISS/TUSS', 'Faturamento RPA', 'Agenda inteligente'],
      outcomes: ['-40% tempo de cadastro', '+NPS']
    },
    {
      icon: GraduationCap,
      name: 'Educação',
      description: 'Gestão acadêmica, EAD, CRM de captação e jornadas do aluno.',
      useCases: ['Matrícula online', 'Boleto e cobrança', 'LMS integrado', 'Retenção via CRM'],
      outcomes: ['+14% captação', '-20% inadimplência']
    },
    {
      icon: Landmark,
      name: 'Serviços Financeiros',
      description: 'Backoffice automatizado, KYC/KYB e conciliações em escala.',
      useCases: ['Onboarding digital', 'Análise de risco', 'Conciliação bancária', 'Relatórios regulatórios'],
      outcomes: ['-60% TMA backoffice', 'Audit ready']
    },
    {
      icon: Home,
      name: 'Imobiliário',
      description: 'CRM imobiliário, funil de locação/venda e contratos digitais.',
      useCases: ['Captura de leads', 'Vistoria digital', 'Assinatura eletrônica', 'Integração portais'],
      outcomes: ['+20% giro de carteira']
    },
    {
      icon: Building2,
      name: 'Serviços B2B',
      description: 'Propostas dinâmicas, CPQ, integrações e operações sem fricção.',
      useCases: ['CPQ e propostas', 'Portal do cliente', 'Integração de sistemas', 'Relatórios executivos'],
      outcomes: ['+25% win rate', '-30% ciclo de vendas']
    },
    {
      icon: Briefcase,
      name: 'RH & Facilities',
      description: 'Onboarding, gestão documental, ponto e facilities automatizados.',
      useCases: ['Onboarding RPA', 'Gestão de ponto', 'Treinamentos', 'Facilities workflows'],
      outcomes: ['-50% tempo de admissão']
    },
    {
      icon: Banknote,
      name: 'Contábil & Fiscal',
      description: 'Robôs para notas, conciliações, obrigações e fechamentos.',
      useCases: ['Leitura de NFe/NFSe', 'Sped e obrigações', 'Conciliação contábil'],
      outcomes: ['-70% tarefas manuais']
    },
    {
      icon: Wheat,
      name: 'Agronegócio',
      description: 'Gestão de safra, insumos, logística e comercialização integrada.',
      useCases: ['Rastreio de insumos', 'Previsão de safra', 'Integração trading'],
      outcomes: ['+acurácia planejamento']
    },
    {
      icon: LineChart,
      name: 'SaaS & Tecnologia',
      description: 'Stacks modernos, billing, suporte e dados em tempo real.',
      useCases: ['Billing e planos', 'Product analytics', 'Suporte com IA'],
      outcomes: ['-churn', '+LTV']
    }
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
              <BadgeCheck className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Soluções por Segmento</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Profundidade em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Múltiplos Setores</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Mapeamos processos, eliminamos gargalos e aplicamos automação inteligente adaptada à realidade de cada mercado.
            </p>
          </div>

          {/* Grid de Setores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <Card
                key={i}
                className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/40 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center">
                      <s.icon className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{s.name}</h3>
                      <p className="text-sm text-gray-400">{s.description}</p>
                    </div>
                    <button
                      type="button"
                      className="ml-auto shrink-0 rounded-lg p-2 hover:bg-white/5 transition-colors"
                      aria-label="Ver detalhes"
                      onClick={() => setActive(active === i ? null : i)}
                    >
                      <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${active === i ? 'rotate-90 text-[#4A90E2]' : ''}`} />
                    </button>
                  </div>

                  {/* detalhes expandíveis */}
                  {active === i && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                      {s.useCases && s.useCases.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Soluções típicas</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {s.useCases.map((u, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-[#4A90E2] mt-0.5" />
                                <span className="text-sm text-gray-300">{u}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {s.outcomes && s.outcomes.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Impacto esperado</p>
                          <div className="flex flex-wrap gap-2">
                            {s.outcomes.map((o, idx) => (
                              <span key={idx} className="px-2.5 py-1 rounded-full text-xs bg-[#4A90E2]/10 text-[#4A90E2] border border-[#4A90E2]/20">{o}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini seção: Casos por área */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto fade-in-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Vendas', items: ['CRM e cadências', 'CPQ e propostas', 'Integração Marketing → Vendas'] },
              { title: 'Operações', items: ['RPA de backoffice', 'Workflows e SLAs', 'Checklist digital'] },
              { title: 'Financeiro', items: ['Conciliação bancária', 'Boletos e cobrança', 'Relatórios e DRE'] },
              { title: 'Backoffice', items: ['Onboarding e contratos', 'Gestão documental', 'Assinatura eletrônica'] }
            ].map((box, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#151518] border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-[#F5A623]" />
                  <h3 className="text-sm font-bold text-white">{box.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {box.items.map((it, i2) => (
                    <li key={i2} className="text-xs text-gray-400">• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0b] to-[#151518]">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quer mapear automações para o seu setor?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-1xl mx-auto">
            Agende um diagnóstico gratuito. Em 60 minutos, identificamos oportunidades de alto impacto.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A90E2] text-white font-bold rounded-xl hover:bg-[#3A7BC8] transition-all duration-300 shadow-lg hover:shadow-[#4A90E2]/50">
            Falar com Especialista
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Setores;
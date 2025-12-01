
import React, { useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { TrendingUp, Users, Award, Star } from 'lucide-react';

// Importar logos locais
import logoDownup from '../assets/img/clientes/downup.png';

// Logos de clientes para carrossel (mix de URLs externas e locais)
const clientLogos = [
  { logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { logo: logoDownup },
  { logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
  { logo: 'https://www.sapo.com.br/wp-content/uploads/2021/06/Logo_Sapo_Horizontal.png' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/adobe-1.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/hp-2.svg' },
  { logo: 'https://cdn.worldvectorlogo.com/logos/vmware-5.svg' },
];

const ClientesCases = () => {
  const cases = [
    // PILAR 3: ENGENHARIA DE SOFTWARE (Foco: Atacado/Distribuição)
    {
      company: 'Distribuidora de Autopeças',
      sector: 'Distribuição & Atacado',
      challenge: 'Vendas dependiam 100% de telefone/email. Catálogo de 50k SKUs impossível de consultar rápido.',
      solution: 'Portal de Compras B2B com regras de preço personalizadas por CNPJ e integração ERP.',
      results: ['65% dos pedidos migraram para o Digital', 'Aumento de 20% no ticket médio (Cross-sell)', 'Vendedores focados em contas estratégicas']
    },

    // PILAR 2: INTELIGÊNCIA COMERCIAL (Foco: Indústria de Máquinas)
    {
      company: 'Indústria de Maquinário Pesado',
      sector: 'Manufatura Industrial',
      challenge: 'Propostas técnicas demoravam 5 dias para serem geradas, esfriando o lead.',
      solution: 'CRM integrado com CPQ (Configurador de Preço) para orçamentos complexos instantâneos.',
      results: ['Tempo de proposta caiu de 5 dias para 2 horas', 'Rastreabilidade total do pipeline', 'Taxa de conversão subiu 28%']
    },

    // PILAR 1: AUTOMAÇÃO RPA (Foco: Serviços Financeiros/Contabilidade)
    {
      company: 'Consultoria Tributária',
      sector: 'Serviços Profissionais',
      challenge: 'Risco de compliance ao validar manualmente 100 mil obrigações acessórias (Sped/Reinf) de clientes.',
      solution: 'Auditor Digital via RPA que cruza XMLs vs. ERP vs. Sefaz antes do envio ao fisco.',
      results: ['Mitigação total de multas por inconsistência', 'Auditabilidade de 100% dos dados', 'Liberação de 15 analistas sêniores']
    },

    // PILAR 4: CLOUD & DEVOPS (Foco: SaaS B2B)
    {
      company: 'Plataforma SaaS - HRTech',
      sector: 'Tecnologia (SaaS)',
      challenge: 'Deadlocks no banco de dados quando 2.000 empresas processavam a folha simultaneamente (dia 05).',
      solution: 'Migração para Banco de Dados Distribuído (Sharding) e cache inteligente com Redis.',
      results: ['Zero downtime no dia de pagamento', 'Processamento de folha 8x mais rápido', 'Suporte a 500k vidas simultâneas']
    },

    // PILAR 5: MARKETING DE PERFORMANCE (Foco: Serviços Corporativos)
    {
      company: 'Gestora de Frotas Corporativas',
      sector: 'Serviços B2B',
      challenge: 'Leads de Google Ads chegavam, mas o time comercial rejeitava 80% por serem "curiosos".',
      solution: 'Qualificação de leads via IA no WhatsApp antes de passar para o humano + Offline Conversion Tracking.',
      results: ['Custo por Lead Qualificado (SQL) caiu 50%', 'Alinhamento total Marketing-Vendas', 'Pipeline previsível']
    },

    // CASE EXTRA (RPA + INTEGRAÇÃO - Foco: Agronegócio)
    {
      company: 'Trading de Commodities Agrícolas',
      sector: 'Agronegócio',
      challenge: 'Risco de compliance na contratação de frete e cadastro de fornecedores (Motoristas/Produtores).',
      solution: 'Automação que consulta antecedentes, ANTT e Serasa automaticamente no onboarding.',
      results: ['Homologação de fornecedor em 5 minutos', 'Segurança jurídica blindada', 'Redução drástica de fraudes']
    }
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20 overflow-x-hidden">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity .6s, transform .6s; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll-left { animation: scroll-left 30s linear infinite; }
        .pause-hover:hover .animate-scroll-left { animation-play-state: paused; }
      `}</style>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[420px] bg-[#4A90E2]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12 md:mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <Users className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Clientes & Cases</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight px-2">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Clientes</span> & Resultados
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2 md:whitespace-normal">
              Parcerias de confiança, inovação e resultados concretos. Veja como grandes empresas aceleraram sua transformação conosco.
            </p>
          </div>

          {/* Carrossel Infinito de Logos - Visual Dark & Uniforme */}
          <div className="mb-16 fade-in-section relative pause-hover">
            
            {/* Fade lateral para suavizar a entrada/saída */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0b] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0b] to-transparent z-20 pointer-events-none" />
            
            <div className="flex overflow-hidden">
              <div className="flex gap-6 md:gap-8 animate-scroll-left min-w-full">
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 flex items-center justify-center px-6 py-4 bg-[#151518]/60 backdrop-blur-md border border-white/5 rounded-xl hover:border-[#4A90E2]/30 hover:bg-[#151518] transition-all duration-300 group cursor-default min-w-[140px] h-[80px]"
                  >
                    {/* Filtro Grayscale e Invert para logos ficarem brancas/claras */}
                    <img 
                      src={logo.logo} 
                      alt="Cliente" 
                      className="h-8 w-auto max-w-[100px] object-contain 
                        grayscale invert opacity-60
                        hover:opacity-100 transition-opacity duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards de Cases - Badge no Topo */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            {cases.map((caseItem, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  
                  {/* 1. BADGE (Em uma div separada no topo) */}
                  <div className="mb-4">
                    <span className="inline-block text-[10px] tracking-wider uppercase px-2 py-1 rounded-md bg-[#4A90E2]/10 text-[#4A90E2] font-bold">
                      {caseItem.sector}
                    </span>
                  </div>

                  {/* 2. CABEÇALHO (Ícone + Título da Empresa) */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-2 bg-[#F5A623]/10 rounded-lg shrink-0">
                       <Award className="h-6 w-6 text-[#F5A623]" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight mt-1">
                      {caseItem.company}
                    </h3>
                  </div>

                  {/* 3. CONTEÚDO (Desafio, Solução, Resultados) */}
                  <div className="space-y-5 flex-grow">
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">Desafio</h4>
                      <p className="text-sm text-gray-300 leading-relaxed border-l-2 border-white/10 pl-3">
                        {caseItem.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">Solução</h4>
                      <p className="text-sm text-gray-300 leading-relaxed border-l-2 border-[#4A90E2]/30 pl-3">
                        {caseItem.solution}
                      </p>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-[10px] font-bold text-[#F5A623] mb-3 uppercase tracking-widest flex items-center gap-2">
                        <TrendingUp className="h-3 w-3" /> Resultados
                      </h4>
                      <ul className="space-y-2">
                        {caseItem.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-white font-medium flex items-start gap-2.5">
                            <Star className="h-4 w-4 text-[#F5A623] fill-[#F5A623]/20 shrink-0 mt-0.5" />
                            <span className="leading-tight">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientesCases;
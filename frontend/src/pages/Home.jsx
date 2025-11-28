import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Zap, 
  TrendingUp, 
  Cloud, 
  Target,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Rocket,
  Shield,
  BarChart3,
  Clock,
  DollarSign
} from 'lucide-react';


const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1743385779347-1549dabf1320?w=600&q=80',
      title: 'Automação RPA e Eficiência Operacional',
      subtitle: 'Reduzimos o peso operacional automatizando tudo que atrasa seu time.',
      description: 'Robôs, fluxos inteligentes e integrações profundas entre sistemas.',
      /*details: 'Eliminamos tarefas repetitivas, reduzimos erros operacionais e criamos processos que funcionam 24 horas.',*/
      features: [
        'Robôs que executam tarefas repetitivas com precisão',
        'Integrações profundas entre sistemas e plataformas',
        'Automatização de processos administrativos e operacionais',
        'Fluxos inteligentes funcionando 24 horas por dia',
        'Redução de erros humanos e retrabalhos',
        'Monitoramento automático de etapas críticas',
        'Padronização de processos e ganho de velocidade',
        'Automação de relatórios, registros e atualizações de dados'
      ]
    },
    {
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&q=80',
      title: 'Inteligência Comercial e Automação de Vendas',
      subtitle: 'Aqui nasce o coração do ecossistema.',
      description: 'Vendas deixam de ser reativas e passam a ser previsíveis.',
      features: [
        'Cadências inteligentes',
        'Prospecção estruturada via WhatsApp, E-mail e LinkedIn',
        'IA comercial para triagem e priorização',
        'CRM organizado e eficiente',
        'Follow up automático',
        'Playbooks e scripts avançados',
        'Treinamentos comerciais contínuos',
        'Indicadores para tomada de decisão'
      ],
      result: 'O resultado é um time comercial mais forte, mais rápido e mais consistente.'
    },
    {
      icon: Cloud,
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80',
      title: 'Software e Cloud Computing para Empresas',
      description: 'Aplicações internas, integrações via API, cloud moderna, microsserviços e arquitetura escalável.',
      subtitle: 'Criamos a base tecnológica que sustenta seu crescimento.',
      features: [
        'Desenvolvimento sob medida',
        'Plataformas internas',
        'Microsserviços',
        'Cloud computing',
        'DevOps',
        'Integração entre sistemas'
      ]
    },
    {
      icon: Target,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=600&q=80',
      title: 'Marketing de Performance Integrado à Automação',
      subtitle: 'Não vendemos tráfego.',
      description: 'Criamos sistemas completos de geração de demanda conectados ao processo de vendas.',
      features: [
        'Google, Meta e LinkedIn Ads',
        'Landing pages inteligentes',
        'Fluxos automatizados de qualificação',
        'IA no WhatsApp triando oportunidades',
        'Integração automática com CRM',
        'Notificações inteligentes',
        'Dashboards completos'
      ]
    }
  ];

  const differentials = [
    { icon: Cpu, text: 'Inteligência aplicada ao negócio' },
    { icon: Target, text: 'Prospecção estruturada e escalável' },
    { icon: TrendingUp, text: 'Vendas mais organizadas e eficientes' },
    { icon: Zap, text: 'Operações mais rápidas e leves' },
    { icon: Rocket, text: 'Automação de ponta a ponta' },
    { icon: BarChart3, text: 'Crescimento previsível' },
    { icon: Shield, text: 'Times focados no que importa' },
    { icon: CheckCircle2, text: 'Integração real entre áreas e sistemas' },
    { icon: Cloud, text: 'Infraestrutura tecnológica robusta' } // Nova opção adicionada com ícone diferente
  ];

  //const steps = [
    //{ number: '01', title: 'Diagnóstico completo da operação e do comercial' },
    //{ number: '02', title: 'Identificação de gargalos e oportunidades' },
    //{ number: '03', title: 'Construção da solução inteligente' },
    //{ number: '04', title: 'Integração total entre sistemas' },
    //{ number: '05', title: 'Acompanhamento e melhoria contínua' }
  //];

  // Substitua a const steps antiga por esta:
  const steps = [
    { 
      number: '01', 
      title: 'Diagnóstico',
      fullTitle: 'Diagnóstico da operação',
      description: 'Entendemos profundamente seus processos, identificando pontos de melhoria e oportunidades.',
      icon: CheckCircle2 
    },
    { 
      number: '02', 
      title: 'Mapeamento',
      fullTitle: 'Identificação de gargalos',
      description: 'Mapeamos gargalos operacionais e encontramos onde a automação gera mais impacto.',
      icon: Target 
    },
    { 
      number: '03', 
      title: 'Construção',
      fullTitle: 'Construção da solução',
      description: 'Desenvolvemos robôs e sistemas inteligentes personalizados para sua operação.',
      icon: Cpu 
    },
    { 
      number: '04', 
      title: 'Integração',
      fullTitle: 'Integração total',
      description: 'Conectamos todos os sistemas e ferramentas em um ecossistema unificado.',
      icon: Zap 
    },
    { 
      number: '05', 
      title: 'Evolução',
      fullTitle: 'Melhoria contínua',
      description: 'Monitoramos performance e otimizamos continuamente para máxima eficiência.',
      icon: TrendingUp 
    }
  ];

  const results = [
    { icon: TrendingUp, title: 'Mais produtividade' },
    { icon: CheckCircle2, title: 'Menos erros' },
    { icon: Clock, title: 'Operações 24 horas' },
    { icon: BarChart3, title: 'Vendas mais previsíveis' },
    { icon: DollarSign, title: 'Redução de retrabalhos' },
    { icon: Rocket, title: 'Processos escaláveis' },
    { icon: Target, title: 'Crescimento sustentável' },
    { icon: Cpu, title: 'Tomada de decisão baseada em dados' },
    { icon: Shield, title: 'Mais segurança e confiabilidade' } // Nova opção com ícone diferente
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">

      {/* Hero Section - Enhanced Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Enhanced Grid Background Pattern */}
        <div className="absolute inset-0 bg-[#0a0a0b]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(74, 144, 226, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 144, 226, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(74, 144, 226, 0.1) 25%, rgba(74, 144, 226, 0.1) 26%, transparent 27%, transparent 74%, rgba(74, 144, 226, 0.1) 75%, rgba(74, 144, 226, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(74, 144, 226, 0.1) 25%, rgba(74, 144, 226, 0.1) 26%, transparent 27%, transparent 74%, rgba(74, 144, 226, 0.1) 75%, rgba(74, 144, 226, 0.1) 76%, transparent 77%, transparent)',
            backgroundSize: '100px 100px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Enhanced Gradient Overlays with Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#4A90E2]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F5A623]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        {/* Particle effect overlay */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#4A90E2] rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#4A90E2]/10 border border-[#4A90E2]/20 rounded-full">
              <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#4A90E2]">Automação Inteligente</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in-section animate-in" style={{ animationDelay: '0.2s' }}>
              Automação e
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#4A90E2] to-[#F5A623] animate-gradient bg-[length:200%_auto]">
                Inteligência
              </span>
              <br />
              para Empresas
            </h1>
            
            <p className="text-xl text-gray-300 mb-4 leading-relaxed fade-in-section animate-in" style={{ animationDelay: '0.4s' }}>
              Tecnologia que potencializa equipes, transforma processos e gera crescimento previsível.
            </p>
            
            <p className="text-lg text-gray-400 mb-4 leading-relaxed fade-in-section animate-in" style={{ animationDelay: '0.5s' }}>
              Criamos um ecossistema inteligente que integra automação, IA, software, prospecção, vendas e marketing.
            </p><br/> 
            
            {/*<p className="text-base text-gray-400 mb-8 leading-relaxed fade-in-section animate-in" style={{ animationDelay: '0.6s' }}>
              É tecnologia aplicada ao dia a dia, deixando sua operação mais leve, seu time mais produtivo e seu crescimento mais sustentável.
            </p>*/}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-[#F5A623] hover:bg-[#E09515] text-white text-base px-8 py-6 font-semibold transition-all duration-300 hover:scale-105"
              >
                Quero transformar minha empresa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#4A90E2] text-white hover:bg-[#4A90E2]/10 text-base px-8 py-6 font-semibold transition-all duration-300"
              >
                Ver soluções
              </Button>
            </div>

            {/* Enhanced Stats with animations */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 fade-in-section animate-in" style={{ animationDelay: '0.6s' }}>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-[#4A90E2] mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F5A623]">
                  80%
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Redução de tempo</div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#4A90E2] to-[#F5A623] group-hover:w-full transition-all duration-300 mt-1" />
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-[#4A90E2] mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F5A623]">
                  24/7
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Operação contínua</div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#4A90E2] to-[#F5A623] group-hover:w-full transition-all duration-300 mt-1" />
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-[#4A90E2] mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F5A623]">
                  99%
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Precisão</div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#4A90E2] to-[#F5A623] group-hover:w-full transition-all duration-300 mt-1" />
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:border-[#4A90E2]/50 hover:shadow-[#4A90E2]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/10 to-[#F5A623]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="Dashboard de Automação"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
            </div>
            
            {/* Enhanced Floating Cards with glow effect */}
            <div className="absolute -top-4 -left-4 bg-[#151518] border border-white/10 rounded-xl p-4 backdrop-blur-xl shadow-xl animate-float hover:shadow-[#4A90E2]/30 hover:border-[#4A90E2]/50 transition-all duration-300 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4A90E2]/20 rounded-lg flex items-center justify-center group-hover:bg-[#4A90E2]/30 transition-colors">
                  <Zap className="h-6 w-6 text-[#4A90E2] animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-semibold">RPA Ativo</div>
                  <div className="text-xs text-gray-400">5.2k processos/dia</div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-[#4A90E2]/10 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#151518] border border-white/10 rounded-xl p-4 backdrop-blur-xl shadow-xl animate-float hover:shadow-[#F5A623]/30 hover:border-[#F5A623]/50 transition-all duration-300 z-20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F5A623]/20 rounded-lg flex items-center justify-center group-hover:bg-[#F5A623]/30 transition-colors">
                  <TrendingUp className="h-6 w-6 text-[#F5A623] animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Eficiência</div>
                  <div className="text-xs text-gray-400">+150% crescimento</div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-[#F5A623]/10 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - ZigZag Layout */}
      <section className="py-24 px-6 bg-[#0f0f11] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-24 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que <span className="text-[#4A90E2]">fazemos</span>
            </h2>
            <p className="text-xl text-white font-medium mb-3">
              Um ecossistema completo que conecta tecnologia, processos e pessoas
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A Composto Web não entrega apenas partes soltas. Entregamos a máquina inteira funcionando.
            </p>
          </div>

          {/* Pillars Container */}
          <div className="space-y-24">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 items-center fade-in-section ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[#4A90E2]/20 hover:border-[#4A90E2]/30">
                    {/* Background decoration */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#4A90E2]/20' : 'from-[#F5A623]/20'} to-transparent opacity-60 mix-blend-overlay z-10`} />
                    
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent opacity-90" />

                    {/* Floating Icon Badge */}
                    <div className="absolute top-6 left-6 p-4 bg-[#151518]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className={`h-8 w-8 ${index % 2 === 0 ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Decorative Number behind */}
                  <div className="absolute -top-10 -right-10 text-[120px] font-bold text-white/[0.03] select-none pointer-events-none z-0">
                    0{index + 1}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-[2px] w-12 ${index % 2 === 0 ? 'bg-[#4A90E2]' : 'bg-[#F5A623]'}`}></div>
                    <span className={`text-sm font-bold uppercase tracking-wider ${index % 2 === 0 ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`}>
                      Pilar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  
                  {pillar.subtitle && (
                    <p className={`text-lg font-medium mb-4 ${index % 2 === 0 ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`}>
                      {pillar.subtitle}
                    </p>
                  )}

                  <p className="text-gray-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                    {pillar.description}
                  </p>

                  {/* Feature Grid */}
                  {pillar.features && pillar.features.length > 0 && (
                    <div className="bg-[#151518] rounded-2xl p-6 border border-white/5">
                      <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                        Principais Entregas:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                        {pillar.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 group/item">
                            <div className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${index % 2 === 0 ? 'bg-[#4A90E2]' : 'bg-[#F5A623]'} group-hover/item:scale-150 transition-transform`} />
                            <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors leading-snug">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Result Quote */}
                  {pillar.result && (
                    <div className="mt-6 flex items-center gap-3 text-sm text-gray-400 italic opacity-80">
                       <TrendingUp className="h-4 w-4" />
                       {pillar.result}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Showcase Section */}
      <section className="py-24 px-6 bg-[#0f0f11] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnologia que <span className="text-[#4A90E2]">transforma</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Utilizamos as tecnologias mais modernas e robustas do mercado para criar soluções que realmente funcionam.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Technologies Grid */}
            <div className="fade-in-section">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
                ].map((tech, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-4 bg-[#151518] border border-white/10 rounded-xl hover:border-[#4A90E2]/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#4A90E2]/30 group relative overflow-hidden" style={{ animationDelay: `${i * 50}ms` }}>
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/0 to-[#4A90E2]/0 group-hover:from-[#4A90E2]/10 group-hover:to-transparent transition-all duration-300 rounded-xl" />
                    <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10" />
                    <span className="text-xs font-medium text-gray-400 group-hover:text-[#4A90E2] transition-colors relative z-10">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#151518] border border-white/10 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#4A90E2]/20 rounded-lg flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-[#4A90E2]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Stack Tecnológico Moderno</h3>
                    <p className="text-sm text-gray-400">Sempre atualizado</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Cada linha de código pensada para gerar resultados. Nossa stack é escolhida estrategicamente para garantir performance, escalabilidade e manutenibilidade.
                </p>
              </div>
            </div>

            {/* Right - Code Image */}
            <div className="fade-in-section relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=800&q=80" 
                  alt="Código de programação"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#F5A623] rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                  <div>
                    <div className="text-sm font-bold text-white">Código Limpo</div>
                    <div className="text-xs text-white/80">Best Practices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Differential Section - Tech Ecosystem Grid */}
      <section className="py-24 px-6 bg-[#0a0a0b] relative overflow-hidden">
        
        {/* Background Elements (Decorative) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F5A623]/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nosso <span className="text-[#F5A623]">diferencial</span>
            </h2>
            <p className="text-xl text-gray-300 font-medium mb-3 max-w-2xl mx-auto">
              Um ecossistema que integra tecnologia, vendas e operações
            </p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed opacity-80">
              A Composto Web conecta os pontos vitais da sua empresa em um único sistema inteligente, eliminando silos e maximizando a performance.
            </p>
            
            {/* Philosophy Tags */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-4 py-2 rounded-full border border-[#F5A623]/20 bg-[#F5A623]/5 text-[#F5A623] text-sm font-medium">
                Não vendemos tarefas, vendemos eficiência.
              </div>
              <div className="px-4 py-2 rounded-full border border-[#4A90E2]/20 bg-[#4A90E2]/5 text-[#4A90E2] text-sm font-medium">
                Não vendemos ferramentas, vendemos sistemas.
              </div>
            </div>
          </div>

          {/* Grid Moderno */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="group fade-in-section relative p-6 bg-[#151518] rounded-2xl border border-white/5 hover:border-[#F5A623]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(245,166,35,0.1)]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/0 via-transparent to-transparent group-hover:from-[#F5A623]/5 transition-opacity duration-500 rounded-2xl" />

                <div className="flex items-start gap-5 relative z-10">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#1c1c21] border border-white/10 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:border-[#F5A623] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(245,166,35,0.4)]">
                      <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 mb-1">
                      {item.text}
                    </h3>
                    {/* Linha decorativa animada */}
                    <div className="h-[2px] w-0 bg-[#F5A623] group-hover:w-12 transition-all duration-500 ease-out opacity-80" />
                  </div>
                </div>

                {/* Decorative Corner Icon (Optional subtle watermark) */}
                <item.icon className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.02] -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Timeline Linear */}
      <section className="py-24 px-6 bg-[#0f0f11] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Como <span className="text-[#4A90E2]">funciona</span>
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              Mapeamos, projetamos, automatizamos e escalamos
            </p>
            <p className="text-base text-gray-400 italic">
              Processos mais rápidos, leves e escaláveis.
            </p>
          </div>

          <div className="relative">
            {/* Linha Conectora (Desktop: Horizontal / Mobile: Vertical) */}
            {/* Desktop Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-[#4A90E2]/10 via-[#4A90E2]/50 to-[#4A90E2]/10 z-0"></div>
            
            {/* Grid dos Passos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="group relative flex flex-col items-center text-center fade-in-section"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Container do Ícone */}
                  <div className="relative mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Glow de fundo */}
                    <div className="absolute inset-0 bg-[#4A90E2] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
                    
                    {/* Círculo Principal */}
                    <div className="w-24 h-24 bg-[#151518] border-2 border-[#4A90E2]/30 group-hover:border-[#4A90E2] rounded-full flex items-center justify-center relative z-10 shadow-xl transition-colors duration-300">
                      <div className="bg-[#4A90E2]/10 p-3 rounded-full group-hover:bg-[#4A90E2]/20 transition-colors">
                         <step.icon className="h-8 w-8 text-[#4A90E2]" />
                      </div>
                    </div>

                    {/* Badge do Número */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-[#0f0f11] z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Conteúdo de Texto */}
                  <div className="px-2">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#4A90E2] transition-colors duration-300">
                      {step.fullTitle}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Linha Conectora Mobile (Aparece apenas se não for desktop e não for o último item) */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute bottom-[-48px] left-1/2 w-[2px] h-12 bg-[#4A90E2]/20 -translate-x-1/2"></div>
                  )}
                  
                  {/* Seta Indicativa Desktop (Entre os itens) */}
                  {index !== steps.length - 1 && (
                     <div className="hidden lg:block absolute top-10 -right-[50%] transform translate-x-1/2 z-0 opacity-30">
                        <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></div>
                     </div>
                  )}
                </div>
              ))}
            </div>
          </div>
            
          <div className="text-center mt-20 fade-in-section">
            <p className="text-base text-gray-400 mb-8">
              Tudo desenhado para gerar impacto real no dia a dia da empresa.
            </p>
            <Button className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold px-8 py-6 rounded-full shadow-[0_0_20px_rgba(74,144,226,0.2)] hover:shadow-[0_0_30px_rgba(74,144,226,0.4)] transition-all duration-300">
              Ver Processo Completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section - Modern Bento Grid */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#0a0a0b]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A90E2]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Resultados que <span className="text-[#F5A623]">entregamos</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transformamos complexidade em eficiência. Veja o impacto real de uma operação automatizada.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            
            {/* Card 1 - Grande Destaque (Produtividade) */}
            <div className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-8 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/0 via-transparent to-transparent group-hover:from-[#F5A623]/10 transition-all duration-500" />
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">Mais Produtividade</h3>
                  <p className="text-gray-400 leading-relaxed">Elimine tarefas manuais e permita que seu time produza mais em menos tempo.</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Vertical (24 Horas) */}
            <div className="col-span-1 md:col-span-1 row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-8 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5A623]/5 group-hover:to-[#F5A623]/10 transition-all duration-500" />
              <div className="h-full flex flex-col items-center justify-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-[#F5A623]/20 flex items-center justify-center mb-6 group-hover:border-[#F5A623] transition-colors duration-500 shadow-[0_0_30px_rgba(245,166,35,0.1)]">
                  <Clock className="h-8 w-8 text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Operação 24/7</h3>
                <p className="text-sm text-gray-400">Seu negócio rodando enquanto você dorme, sem interrupções.</p>
              </div>
            </div>

            {/* Card 3 - Simples (Menos Erros) */}
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="flex items-center gap-4 h-full">
                <div className="p-3 rounded-xl bg-[#F5A623]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#F5A623]" />
                </div>
                <span className="font-bold text-lg text-white group-hover:text-[#F5A623] transition-colors">Zero Erros Humanos</span>
              </div>
            </div>

            {/* Card 4 - Simples (Retrabalhos) */}
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="flex items-center gap-4 h-full">
                <div className="p-3 rounded-xl bg-[#F5A623]/10">
                  <DollarSign className="h-6 w-6 text-[#F5A623]" />
                </div>
                <span className="font-bold text-lg text-white group-hover:text-[#F5A623] transition-colors">Redução de Custos</span>
              </div>
            </div>

            {/* Card 5 - Horizontal Largo (Vendas Previsíveis) */}
            <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-8 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 -translate-y-4">
                <BarChart3 className="h-32 w-32 text-[#F5A623]" />
              </div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="flex items-center gap-4 mb-3">
                   <BarChart3 className="h-8 w-8 text-[#F5A623]" />
                   <h3 className="text-2xl font-bold text-white">Vendas Previsíveis</h3>
                </div>
                <p className="text-gray-400 max-w-sm">Pipeline de vendas automatizado e dados claros para bater metas todo mês.</p>
              </div>
            </div>

            {/* Card 6 - Quadrado (Escalável) */}
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 flex flex-col justify-center hover:border-[#F5A623]/50 transition-all duration-500">
               <Rocket className="h-8 w-8 text-[#F5A623] mb-4" />
               <h3 className="font-bold text-lg text-white">Escalabilidade</h3>
               <p className="text-xs text-gray-400 mt-2">Cresça sem inchar o time.</p>
            </div>

            {/* Card 7 - Quadrado (Dados) */}
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 flex flex-col justify-center hover:border-[#F5A623]/50 transition-all duration-500">
               <Cpu className="h-8 w-8 text-[#F5A623] mb-4" />
               <h3 className="font-bold text-lg text-white">Data Driven</h3>
               <p className="text-xs text-gray-400 mt-2">Decisões baseadas em fatos.</p>
            </div>

             {/* Card 8 - Destaque Final (Segurança) */}
             <div className="col-span-1 md:col-span-2 lg:col-span-4 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#151518] to-[#0f0f11] p-6 hover:border-[#F5A623]/50 transition-all duration-500 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#F5A623]/20 rounded-full">
                     <Shield className="h-6 w-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Segurança e Confiabilidade Enterprise</h3>
                    <p className="text-sm text-gray-400">Seus dados protegidos e processos rodando com estabilidade garantida.</p>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <ArrowRight className="h-6 w-6 text-gray-500 group-hover:text-[#F5A623] group-hover:translate-x-2 transition-all" />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section - Mobile Fixed */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-[#0f0f11] relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #4A90E2 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A90E2]/10 via-[#151518] to-[#F5A623]/10 border border-white/10 rounded-3xl p-8 md:p-16 fade-in-section relative overflow-hidden group hover:border-[#4A90E2]/30 transition-all duration-500">
            
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 via-transparent to-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              
              {/* Left Content (Text) */}
              <div className="order-1">
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full hover:bg-[#F5A623]/20 hover:border-[#F5A623]/40 transition-all duration-300 group/badge">
                  <Rocket className="h-4 w-4 text-[#F5A623] group-hover/badge:animate-bounce" />
                  <span className="text-sm font-medium text-[#F5A623]">Transformação Digital</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Pronto para
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#4A90E2] to-[#F5A623] animate-gradient bg-[length:200%_auto]">
                    transformar
                  </span>
                  <br />
                  seu negócio?
                </h2>
                
                <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                  Junte-se às empresas que já automatizam processos, aumentam eficiência e crescem de forma previsível.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Consultoria gratuita com especialistas',
                    'Diagnóstico completo de automação',
                    'ROI calculado e transparente'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#4A90E2]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#4A90E2]" />
                      </div>
                      <span className="text-sm md:text-base text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#E09515] text-white text-base md:text-lg px-10 py-7 font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#F5A623]/50 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Agendar Conversa Gratuita
                    <ArrowRight className="ml-2 h-6 w-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </Button>
              </div>

              {/* Right Visual (Image) */}
              <div className="relative order-2 mt-4 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                    alt="Analytics Dashboard"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Stats Cards - Mobile Fix: Positioned INSIDE (bottom-4) vs OUTSIDE (-bottom-6) on Desktop */}
                
                {/* Card 1: Produtividade */}
                <div className="absolute bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-[#151518] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-xl hover:border-[#4A90E2]/50 hover:shadow-[#4A90E2]/30 transition-all duration-300 hover:scale-110 z-20 group/stat max-w-[140px] md:max-w-none">
                  <div className="text-2xl md:text-3xl font-bold text-[#4A90E2] mb-1 group-hover/stat:scale-110 transition-transform duration-300">+150%</div>
                  <div className="text-[10px] md:text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors">Produtividade Média</div>
                  <div className="absolute inset-0 rounded-xl bg-[#4A90E2]/10 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </div>

                {/* Card 2: ROI (Hidden on very small screens or re-positioned) */}
                <div className="absolute top-4 right-4 lg:-top-6 lg:-right-6 bg-[#151518] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-xl hover:border-[#F5A623]/50 hover:shadow-[#F5A623]/30 transition-all duration-300 hover:scale-110 z-20 group/stat">
                  <div className="text-2xl md:text-3xl font-bold text-[#F5A623] mb-1 group-hover/stat:scale-110 transition-transform duration-300">6 meses</div>
                  <div className="text-[10px] md:text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors">ROI Médio</div>
                  <div className="absolute inset-0 rounded-xl bg-[#F5A623]/10 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;





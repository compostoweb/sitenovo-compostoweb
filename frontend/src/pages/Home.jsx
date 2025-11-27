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

  const steps = [
    { number: '01', title: 'Diagnóstico completo da operação e do comercial' },
    { number: '02', title: 'Identificação de gargalos e oportunidades' },
    { number: '03', title: 'Construção da solução inteligente' },
    { number: '04', title: 'Integração total entre sistemas' },
    { number: '05', title: 'Acompanhamento e melhoria contínua' }
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

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-[#0f0f11] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que fazemos
            </h2>
            <p className="text-lg md:text-xl text-[#4A90E2] font-semibold mb-3">
              Um ecossistema completo que conecta tecnologia, processos e pessoas
            </p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
              A Composto Web integra automação RPA, IA, software, cloud e inteligência comercial para criar operações eficientes, times mais produtivos e resultados previsíveis.
            </p>
           {/* <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Construímos sistemas completos que funcionam juntos.
              <br />
              <span className="text-[#F5A623]">Nada é isolado. Tudo é integrado.</span>
            </p> */}
          </div>

          {/*<div className="text-center mb-12 fade-in-section">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nossos <span className="text-[#4A90E2]">4 pilares</span>
            </h3>
          </div>*/}

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-[#4A90E2]/20 group overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/0 to-[#F5A623]/0 group-hover:from-[#4A90E2]/5 group-hover:to-[#F5A623]/5 transition-all duration-500 rounded-lg z-0" />
                
                <div className="relative h-56 overflow-hidden z-10">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-[#151518]/80 to-transparent" />
                  
                  {/* Enhanced icon with glow */}
                  <div className="absolute bottom-4 left-4 p-3 bg-[#4A90E2]/20 backdrop-blur-sm rounded-xl group-hover:bg-[#4A90E2]/40 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[#4A90E2]/50">
                    <pillar.icon className="h-8 w-8 text-[#4A90E2] group-hover:animate-pulse" strokeWidth={1.5} />
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <CardContent className="p-6 pb-8 relative z-10">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#4A90E2]/20 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#4A90E2]">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-[#4A90E2] transition-colors duration-300 leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  {pillar.subtitle && (
                    <p className="text-sm font-semibold text-[#F5A623] mb-2">{pillar.subtitle}</p>
                  )}
                  <p className="text-gray-300 leading-relaxed text-sm mb-3 group-hover:text-white transition-colors duration-300 font-medium">
                    {pillar.description}
                  </p>
                  {pillar.details && (
                    <p className="text-gray-400 leading-relaxed text-sm mb-3">{pillar.details}</p>
                  )}
                  {pillar.features && pillar.features.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-xs font-semibold text-[#4A90E2] mb-3 uppercase tracking-wide">
                        {index === 3 ? 'Implementamos:' : 'O que entregamos:'}
                      </p>
                      <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-2">
                        {pillar.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-400 group/item">
                            <CheckCircle2 className="h-3 w-3 text-[#4A90E2] mt-0.5 flex-shrink-0 group-hover/item:text-[#F5A623] transition-colors" />
                            <span className="group-hover/item:text-gray-300 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {pillar.result && (
                    <p className="mt-4 text-sm text-gray-300 italic border-l-2 border-[#F5A623]/50 pl-3">{pillar.result}</p>
                  )}
                  
                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-[#4A90E2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
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

      {/* Our Differential Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Nosso diferencial
            </h2>
            <p className="text-lg text-[#F5A623] font-semibold mb-3 max-w-3xl mx-auto">
              Um ecossistema que integra tecnologia, vendas e operações
            </p>
            <p className="text-base text-gray-300 mb-4 max-w-3xl mx-auto">
              A Composto Web conecta operações, vendas, tecnologia e marketing em um único sistema inteligente.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="text-sm text-gray-400 italic">Não vendemos tarefas. Vendemos eficiência.</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400 italic">Não vendemos ferramentas. Vendemos sistemas inteligentes.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="fade-in-section flex items-center gap-3 p-5 bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 rounded-xl hover:border-[#F5A623]/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#F5A623]/20 group relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5A623]/0 to-[#F5A623]/0 group-hover:from-[#F5A623]/5 group-hover:to-transparent transition-all duration-300 rounded-xl" />
                
                <div className="p-2.5 bg-[#F5A623]/10 rounded-lg group-hover:bg-[#F5A623]/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0 relative z-10">
                  <item.icon className="h-5 w-5 text-[#F5A623] group-hover:animate-pulse" strokeWidth={2} />
                </div>
                <p className="text-sm font-semibold group-hover:text-[#F5A623] transition-colors duration-300 relative z-10">{item.text}</p>
                
                {/* Arrow indicator */}
                <ArrowRight className="h-4 w-4 text-[#F5A623] opacity-0 group-hover:opacity-100 ml-auto transition-all duration-300 group-hover:translate-x-1 relative z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - New Design */}
      <section className="py-24 px-6 bg-[#0f0f11] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="fade-in-section relative bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 rounded-2xl p-8 hover:border-[#4A90E2]/50 transition-all duration-500 hover:translate-y-[-4px] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#4A90E2] rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex p-4 bg-[#4A90E2]/10 rounded-xl group-hover:bg-[#4A90E2]/20 transition-colors duration-300">
                  {index === 0 && <CheckCircle2 className="h-8 w-8 text-[#4A90E2]" />}
                  {index === 1 && <Target className="h-8 w-8 text-[#4A90E2]" />}
                  {index === 2 && <Cpu className="h-8 w-8 text-[#4A90E2]" />}
                  {index === 3 && <Zap className="h-8 w-8 text-[#4A90E2]" />}
                  {index === 4 && <TrendingUp className="h-8 w-8 text-[#4A90E2]" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {index === 0 && 'Entendemos profundamente seus processos, identificando pontos de melhoria e oportunidades.'}
                  {index === 1 && 'Mapeamos gargalos operacionais e encontramos onde a automação gera mais impacto.'}
                  {index === 2 && 'Desenvolvemos robôs e sistemas inteligentes personalizados para sua operação.'}
                  {index === 3 && 'Conectamos todos os sistemas e ferramentas em um ecossistema unificado.'}
                  {index === 4 && 'Monitoramos performance e otimizamos continuamente para máxima eficiência.'}
                </p>

                {/* Arrow indicator for desktop */}
                {index < 4 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-[#4A90E2]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
            
          <div className="text-center mt-12 fade-in-section">
            <p className="text-base text-gray-400 mb-6">
              Tudo desenhado para gerar impacto real no dia a dia da empresa.
            </p>
            <Button className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold px-8">
              Ver Processo Completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Resultados que <span className="text-[#F5A623]">entregamos</span>
            </h2>
          </div>
          
          <div className="text-center mb-12 fade-in-section">
            <p className="text-base text-gray-400 max-w-3xl mx-auto">
              Processos mais rápidos, leves e escaláveis que geram resultados mensuráveis para sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card 
                key={index}
                className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#F5A623]/50 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-[#F5A623]/30 group text-center relative overflow-hidden"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/0 to-[#F5A623]/0 group-hover:from-[#F5A623]/10 group-hover:to-transparent transition-all duration-500 rounded-lg" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-5 inline-flex p-4 bg-[#F5A623]/10 rounded-xl group-hover:bg-[#F5A623]/30 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[#F5A623]/50">
                    <result.icon className="h-8 w-8 text-[#F5A623] group-hover:animate-pulse" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold group-hover:text-[#F5A623] transition-colors duration-300 leading-snug">
                    {result.title}
                  </h3>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - New Design */}
      <section className="py-24 px-6 bg-[#0f0f11] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #4A90E2 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A90E2]/10 via-[#151518] to-[#F5A623]/10 border border-white/10 rounded-3xl p-12 md:p-16 fade-in-section relative overflow-hidden group hover:border-[#4A90E2]/30 transition-all duration-500">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 via-transparent to-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full hover:bg-[#F5A623]/20 hover:border-[#F5A623]/40 transition-all duration-300 group/badge">
                  <Rocket className="h-4 w-4 text-[#F5A623] group-hover/badge:animate-bounce" />
                  <span className="text-sm font-medium text-[#F5A623]">Transformação Digital</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Pronto para
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#4A90E2] to-[#F5A623] animate-gradient bg-[length:200%_auto]">
                    transformar
                  </span>
                  <br />
                  seu negócio?
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Junte-se às empresas que já automatizam processos, aumentam eficiência e crescem de forma previsível com nossa tecnologia.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Consultoria gratuita com especialistas',
                    'Diagnóstico completo de automação',
                    'ROI calculado e transparente'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#4A90E2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-[#4A90E2]" />
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-[#F5A623] hover:bg-[#E09515] text-white text-lg px-10 py-7 font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#F5A623]/50 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center">
                    Agendar Conversa Gratuita
                    <ArrowRight className="ml-2 h-6 w-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </Button>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                    alt="Analytics Dashboard"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
                </div>

                {/* Enhanced Floating stats with animations */}
                <div className="absolute -bottom-6 -left-6 bg-[#151518] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-xl hover:border-[#4A90E2]/50 hover:shadow-[#4A90E2]/30 transition-all duration-300 hover:scale-110 z-20 group/stat">
                  <div className="text-3xl font-bold text-[#4A90E2] mb-1 group-hover/stat:scale-110 transition-transform duration-300">+150%</div>
                  <div className="text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors">Produtividade Média</div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-[#4A90E2]/10 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </div>

                <div className="absolute -top-6 -right-6 bg-[#151518] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-xl hover:border-[#F5A623]/50 hover:shadow-[#F5A623]/30 transition-all duration-300 hover:scale-110 z-20 group/stat" style={{ animationDelay: '0.5s' }}>
                  <div className="text-3xl font-bold text-[#F5A623] mb-1 group-hover/stat:scale-110 transition-transform duration-300">6 meses</div>
                  <div className="text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors">ROI Médio</div>
                  {/* Glow effect */}
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
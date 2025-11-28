import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
// import { Card, CardContent } from '../components/ui/card'; // Opcional
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
  DollarSign, 
  Layers, 
  Lock, 
  Globe, 
  Terminal, 
  Code2, 
  Server, 
  Database, 
  Bot, 
  PlayCircle 
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

  // --- DADOS DAS SEÇÕES ---

  const pillars = [
    {
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1743385779347-1549dabf1320?w=600&q=80',
      title: 'Automação RPA e Eficiência Operacional',
      subtitle: 'Reduzimos o peso operacional automatizando tudo que atrasa seu time.',
      description: 'Eliminamos tarefas manuais repetitivas através de robôs e scripts que funcionam 24/7 com precisão absoluta.',
      features: [
        'Robôs para tarefas repetitivas (RPA)',
        'Integrações via API entre sistemas',
        'Processamento automático de documentos',
        'Fluxos de trabalho inteligentes',
        'Redução drástica de erros humanos',
        'Dashboards de controle em tempo real'
      ],
      result: 'Sua equipe para de digitar dados e começa a analisar resultados.'
    },
    {
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&q=80',
      title: 'Inteligência Comercial e CRM',
      subtitle: 'Transformamos seu processo de vendas em uma ciência exata.',
      description: 'Implementamos processos de vendas previsíveis, com CRM estruturado e automação de prospecção.',
      features: [
        'Setup e estruturação de CRM',
        'Cadências de e-mail e WhatsApp',
        'Playbooks de vendas personalizados',
        'Integração Marketing-Vendas (Smarketing)',
        'IA para qualificação de leads',
        'Analytics comercial avançado'
      ],
      result: 'Vendas deixam de ser sorte e viram um processo replicável.'
    },
    {
      // PILAR 3: SOFTWARE
      icon: Code2, 
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=80', 
      title: 'Engenharia de Software Sob Medida',
      subtitle: 'Soluções digitais que se adaptam à sua regra de negócio, não o contrário.',
      description: 'Desenvolvemos plataformas exclusivas, portais internos e aplicativos que resolvem dores específicas da sua operação.',
      features: [
        'Desenvolvimento de Sistemas Web e Mobile',
        'Modernização de Sistemas Legados',
        'Criação de APIs e Microsserviços',
        'Painéis Administrativos Personalizados',
        'Integração de Banco de Dados Complexos',
        'Arquitetura de Software Escalável'
      ],
      result: 'Tecnologia proprietária que vira ativo da empresa.'
    },
    {
      // PILAR 4: CLOUD & INFRA
      icon: Server, 
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', 
      title: 'Cloud Computing e DevOps',
      subtitle: 'A infraestrutura invisível que garante segurança e velocidade.',
      description: 'Preparamos sua empresa para escalar com arquitetura em nuvem moderna, segura e de alta disponibilidade.',
      features: [
        'Arquitetura e Migração para Nuvem (AWS/Azure)',
        'DevOps e Pipelines CI/CD',
        'Gerenciamento de Servidores',
        'Monitoramento de Performance (APM)',
        'Segurança da Informação e Backup',
        'Redução de Custos de Infraestrutura'
      ],
      result: 'Seu sistema sempre online, rápido e seguro.'
    },
    {
      // PILAR 5: MARKETING
      icon: Target,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=600&q=80',
      title: 'Marketing de Performance Integrado',
      subtitle: 'Geração de demanda conectada diretamente ao comercial.',
      description: 'Não fazemos apenas anúncios. Criamos funis de aquisição que entregam oportunidades reais no CRM.',
      features: [
        'Gestão de Tráfego Pago (Google/Meta)',
        'Landing Pages de Alta Conversão',
        'Automação de Marketing e Nutrição',
        'Rastreamento Avançado de Dados',
        'Integração nativa com Vendas',
        'Relatórios de ROI em tempo real'
      ],
      result: 'Marketing que fala a língua de vendas e gera receita.'
    }
  ];

  // Dados para o Carrossel Infinito
  const techStack1 = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' }
  ];

  const techStack2 = [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' }
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
    { icon: Cloud, text: 'Infraestrutura tecnológica robusta' } 
  ];

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

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">

      {/* ---------------------------------------------------------------------------
          1. HERO SECTION - CORRIGIDO PARA NÃO ESTOURAR LATERAL
         --------------------------------------------------------------------------- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0b] pt-20">
        
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4A90E2]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }} />
        </div>

        {/* CONTAINER PRINCIPAL: px-6 (24px) é ideal para mobile. w-full garante que respeite a largura da tela */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16 relative z-10 mb-12">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN: TEXT & CTA */}
            <div className="text-left fade-in-section">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#4A90E2]/30 mb-6 shadow-[0_0_15px_rgba(74,144,226,0.1)] hover:shadow-[0_0_25px_rgba(74,144,226,0.2)] transition-all cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A90E2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A90E2]"></span>
                </span>
                <span className="text-xs font-semibold text-[#4A90E2] tracking-wide uppercase">Nova Era da Automação</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
                Automação e <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">
                  Inteligência
                </span> <br />
                para Empresas
              </h1>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                Deixe os robôs trabalharem. Criamos ecossistemas inteligentes que integram <span className="text-white font-medium">IA, automação e vendas</span> para escalar sua operação sem aumentar custos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#E09515] text-white text-base px-8 h-14 font-bold shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:shadow-[0_0_30px_rgba(245,166,35,0.5)] hover:-translate-y-1 transition-all duration-300 rounded-xl"
                >
                  Começar Transformação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
               {/*} <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white/10 text-white text-base px-8 h-14 backdrop-blur-sm rounded-xl hover:border-[#4A90E2]/50 transition-all"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Ver Demo em Vídeo
                </Button>*/}
              </div>

              {/* CORREÇÃO AQUI: flex-wrap permite que os itens quebrem linha se não couberem, evitando estouro lateral */}
             {/* STATS ROW - OTIMIZADO PARA MOBILE (SINGLE LINE) */}
              <div className="flex items-start justify-between sm:justify-start sm:gap-x-8 border-t border-white/10 pt-6 sm:pt-8 mt-8 w-full">
                
                {/* Item 1 */}
                <div className="flex flex-col">
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">80%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider leading-tight">
                    Redução de <br className="block sm:hidden" /> Tempo
                  </p>
                </div>
                
                {/* Separador (Escondido no mobile) */}
                <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
                
                {/* Item 2 */}
                <div className="flex flex-col">
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider leading-tight">
                    Operação <br className="block sm:hidden" /> Contínua
                  </p>
                </div>
                
                {/* Separador (Escondido no mobile) */}
                <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
                
                {/* Item 3 */}
                <div className="flex flex-col">
                   <p className="text-2xl sm:text-3xl font-bold text-white mb-1">Até 99%</p>
                   <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider leading-tight">
                     De <br className="block sm:hidden" /> Precisão
                   </p>
                </div>
              </div>  
            </div>

            {/* RIGHT COLUMN: VISUAL COMPOSITION */}
            <div className="relative mt-10 lg:mt-0 perspective-1000 group">
              
              {/* Main Dashboard Image */}
              <div className="relative z-10 bg-[#151518] rounded-2xl border border-white/10 p-2 shadow-2xl transform transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4A90E2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="Dashboard de Automação"
                  className="w-full rounded-xl shadow-inner opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-50 rounded-xl" />
              </div>

              {/* Floating Element 1 */}
              <div className="absolute -top-6 -left-5 z-20 animate-float" style={{ animationDuration: '5s' }}>
                <div className="bg-[#151518]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:border-[#4A90E2]/50 transition-colors">
                  <div className="p-2 bg-[#4A90E2]/20 rounded-lg">
                    <Bot className="h-6 w-6 text-[#4A90E2]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Status do Robô</p>
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Processando
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute -bottom-8 -right-4 z-20 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                <div className="bg-[#151518]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:border-[#F5A623]/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#F5A623]/20 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Eficiência</p>
                      <p className="text-sm font-bold text-white">+150%</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-8 w-32">
                     {[40, 60, 45, 70, 90, 100].map((h, i) => (
                       <div key={i} className="flex-1 bg-[#F5A623] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#F5A623] blur-[100px] opacity-20 -z-10 transform scale-75 group-hover:scale-90 transition-transform duration-700" />
            </div>

          </div>
          
          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent"></div>
          </div>

        </div>

      </section>

      {/* ---------------------------------------------------------------------------
          2. O QUE FAZEMOS - ZIGZAG LAYOUT
         --------------------------------------------------------------------------- */}
      <section className="py-24 px-6 bg-[#0f0f11] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
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

          <div className="space-y-24">
            {pillars.map((pillar, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center fade-in-section ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[#4A90E2]/20 hover:border-[#4A90E2]/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#4A90E2]/20' : 'from-[#F5A623]/20'} to-transparent opacity-60 mix-blend-overlay z-10`} />
                    <img src={pillar.image} alt={pillar.title} className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-6 left-6 p-4 bg-[#151518]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className={`h-8 w-8 ${index % 2 === 0 ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 text-[120px] font-bold text-white/[0.03] select-none pointer-events-none z-0">0{index + 1}</div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-[2px] w-12 ${index % 2 === 0 ? 'bg-[#4A90E2]' : 'bg-[#F5A623]'}`}></div>
                    <span className={`text-sm font-bold uppercase tracking-wider ${index % 2 === 0 ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`}>Pilar 0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{pillar.title}</h3>
                  {pillar.subtitle && <p className={`text-lg font-medium mb-4 ${index % 2 === 0 ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`}>{pillar.subtitle}</p>}
                  <p className="text-gray-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">{pillar.description}</p>
                  {pillar.features && pillar.features.length > 0 && (
                    <div className="bg-[#151518] rounded-2xl p-6 border border-white/5">
                      <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">Principais Entregas:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                        {pillar.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 group/item">
                            <div className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${index % 2 === 0 ? 'bg-[#4A90E2]' : 'bg-[#F5A623]'} group-hover/item:scale-150 transition-transform`} />
                            <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {pillar.result && (<div className="mt-6 flex items-center gap-3 text-sm text-gray-400 italic opacity-80"><TrendingUp className="h-4 w-4" />{pillar.result}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          3. TECH SHOWCASE
         --------------------------------------------------------------------------- */}
      <section className="py-24 px-6 bg-[#0a0a0b] relative overflow-hidden">
        <style>{`
          @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .animate-scroll-left { animation: scroll-left 40s linear infinite; }
          .animate-scroll-right { animation: scroll-right 40s linear infinite; }
          .pause-hover:hover .animate-scroll-left, .pause-hover:hover .animate-scroll-right { animation-play-state: paused; }
        `}</style>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#4A90E2]/5 rounded-[100%] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#F5A623]/10">
              <Zap className="h-4 w-4 text-[#F5A623]" fill="currentColor" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">Arquitetura de Alta Performance</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tecnologia de <span className="text-[#4A90E2]">Ponta a Ponta</span></h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">Não somos presos a uma única ferramenta. Escolhemos a arquitetura ideal para escalar sua operação com segurança e velocidade.</p>
          </div>

          <div className="relative mb-24 pause-hover">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0b] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0b] to-transparent z-20 pointer-events-none" />

            <div className="flex overflow-hidden mb-8">
              <div className="flex gap-6 animate-scroll-left min-w-full">
                {[...techStack1, ...techStack1].map((tech, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-[#151518]/80 backdrop-blur-sm border border-white/5 rounded-xl hover:border-[#4A90E2]/50 hover:bg-[#151518] transition-all duration-300 group cursor-default">
                    <img src={tech.logo} alt={tech.name} className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex overflow-hidden">
              <div className="flex gap-6 animate-scroll-right min-w-full">
                {[...techStack2, ...techStack2].map((tech, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-[#151518]/80 backdrop-blur-sm border border-white/5 rounded-xl hover:border-[#F5A623]/50 hover:bg-[#151518] transition-all duration-300 group cursor-default">
                    <img src={tech.logo} alt={tech.name} className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 fade-in-section">
            <div className="p-8 bg-gradient-to-b from-[#151518] to-[#0f0f11] rounded-2xl border border-white/10 hover:border-[#4A90E2]/30 transition-all duration-500 group">
              <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Zap className="h-6 w-6 text-[#4A90E2]" /></div>
              <h3 className="text-xl font-bold mb-3 text-white">Performance Extrema</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Utilizamos arquitetura assíncrona e bancos de dados em memória (Redis) para garantir respostas em milissegundos.</p>
              <div className="h-1 w-full bg-[#1c1c21] rounded-full overflow-hidden"><div className="h-full bg-[#4A90E2] w-[90%] rounded-full animate-pulse" /></div>
            </div>
            <div className="p-8 bg-gradient-to-b from-[#151518] to-[#0f0f11] rounded-2xl border border-white/10 hover:border-[#F5A623]/30 transition-all duration-500 group">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Lock className="h-6 w-6 text-[#F5A623]" /></div>
              <h3 className="text-xl font-bold mb-3 text-white">Segurança Enterprise</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Criptografia de ponta a ponta, backups automáticos e conformidade com LGPD em todas as camadas da aplicação.</p>
              <div className="flex items-center gap-2 text-xs text-[#F5A623]"><Shield className="h-3 w-3" /><span>SSL/TLS Encrypted</span></div>
            </div>
            <div className="p-8 bg-gradient-to-b from-[#151518] to-[#0f0f11] rounded-2xl border border-white/10 hover:border-[#4A90E2]/30 transition-all duration-500 group">
              <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Globe className="h-6 w-6 text-[#4A90E2]" /></div>
              <h3 className="text-xl font-bold mb-3 text-white">Escalabilidade Global</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Infraestrutura em nuvem (Cloud Native) pronta para crescer de 10 para 10 milhões de requisições sem cair.</p>
              <div className="grid grid-cols-4 gap-1">{[1,2,3,4].map(i => <div key={i} className="h-1 bg-[#4A90E2]/40 rounded-full" style={{ opacity: i * 0.25 + 0.2 }} />)}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ---------------------------------------------------------------------------
          4. DIFERENCIAIS
         --------------------------------------------------------------------------- */}
      <section className="py-24 px-6 bg-[#0a0a0b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F5A623]/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nosso <span className="text-[#F5A623]">diferencial</span></h2>
            <p className="text-xl text-gray-300 font-medium mb-3 max-w-2xl mx-auto">Um ecossistema que integra tecnologia, vendas e operações</p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed opacity-80">A Composto Web conecta os pontos vitais da sua empresa em um único sistema inteligente, eliminando silos e maximizando a performance.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-4 py-2 rounded-full border border-[#F5A623]/20 bg-[#F5A623]/5 text-[#F5A623] text-sm font-medium">Não vendemos tarefas, vendemos eficiência.</div>
              <div className="px-4 py-2 rounded-full border border-[#4A90E2]/20 bg-[#4A90E2]/5 text-[#4A90E2] text-sm font-medium">Não vendemos ferramentas, vendemos sistemas.</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <div key={index} className="group fade-in-section relative p-6 bg-[#151518] rounded-2xl border border-white/5 hover:border-[#F5A623]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(245,166,35,0.1)]" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/0 via-transparent to-transparent group-hover:from-[#F5A623]/5 transition-opacity duration-500 rounded-2xl" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#1c1c21] border border-white/10 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:border-[#F5A623] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(245,166,35,0.4)]">
                      <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 mb-1">{item.text}</h3>
                    <div className="h-[2px] w-0 bg-[#F5A623] group-hover:w-12 transition-all duration-500 ease-out opacity-80" />
                  </div>
                </div>
                <item.icon className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.02] -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          5. COMO FUNCIONA
         --------------------------------------------------------------------------- */}
      <section className="py-24 px-6 bg-[#0f0f11] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Como <span className="text-[#4A90E2]">funciona</span></h2>
            <p className="text-lg text-gray-300 mb-2">Mapeamos, projetamos, automatizamos e escalamos</p>
            <p className="text-base text-gray-400 italic">Processos mais rápidos, leves e escaláveis.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-[#4A90E2]/10 via-[#4A90E2]/50 to-[#4A90E2]/10 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="group relative flex flex-col items-center text-center fade-in-section" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[#4A90E2] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
                    <div className="w-24 h-24 bg-[#151518] border-2 border-[#4A90E2]/30 group-hover:border-[#4A90E2] rounded-full flex items-center justify-center relative z-10 shadow-xl transition-colors duration-300">
                      <div className="bg-[#4A90E2]/10 p-3 rounded-full group-hover:bg-[#4A90E2]/20 transition-colors"><step.icon className="h-8 w-8 text-[#4A90E2]" /></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-[#0f0f11] z-20">{step.number}</div>
                  </div>
                  <div className="px-2">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#4A90E2] transition-colors duration-300">{step.fullTitle}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                  {index !== steps.length - 1 && <div className="lg:hidden absolute bottom-[-48px] left-1/2 w-[2px] h-12 bg-[#4A90E2]/20 -translate-x-1/2"></div>}
                  {index !== steps.length - 1 && <div className="hidden lg:block absolute top-10 -right-[50%] transform translate-x-1/2 z-0 opacity-30"><div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></div></div>}
                </div>
              ))}
            </div>
          </div>
            
          <div className="text-center mt-20 fade-in-section">
            <p className="text-base text-gray-400 mb-8">Tudo desenhado para gerar impacto real no dia a dia da empresa.</p>
            <Button className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold px-8 py-6 rounded-full shadow-[0_0_20px_rgba(74,144,226,0.2)] hover:shadow-[0_0_30px_rgba(74,144,226,0.4)] transition-all duration-300">
              Ver Processo Completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          6. RESULTADOS
         --------------------------------------------------------------------------- */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#0a0a0b]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4A90E2]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Resultados que <span className="text-[#F5A623]">entregamos</span></h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Transformamos complexidade em eficiência. Veja o impacto real de uma operação automatizada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            <div className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-8 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/0 via-transparent to-transparent group-hover:from-[#F5A623]/10 transition-all duration-500" />
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"><TrendingUp className="h-8 w-8 text-[#F5A623]" /></div>
                <div><h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">Mais Produtividade</h3><p className="text-gray-400 leading-relaxed">Elimine tarefas manuais e permita que seu time produza mais em menos tempo.</p></div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-8 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5A623]/5 group-hover:to-[#F5A623]/10 transition-all duration-500" />
              <div className="h-full flex flex-col items-center justify-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-[#F5A623]/20 flex items-center justify-center mb-6 group-hover:border-[#F5A623] transition-colors duration-500 shadow-[0_0_30px_rgba(245,166,35,0.1)]"><Clock className="h-8 w-8 text-[#F5A623]" /></div>
                <h3 className="text-xl font-bold text-white mb-2">Operação 24/7</h3>
                <p className="text-sm text-gray-400">Seu negócio rodando enquanto você dorme, sem interrupções.</p>
              </div>
            </div>
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 hover:border-[#F5A623]/50 transition-all duration-500"><div className="flex items-center gap-4 h-full"><div className="p-3 rounded-xl bg-[#F5A623]/10"><CheckCircle2 className="h-6 w-6 text-[#F5A623]" /></div><span className="font-bold text-lg text-white group-hover:text-[#F5A623] transition-colors">Zero Erros Humanos</span></div></div>
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 hover:border-[#F5A623]/50 transition-all duration-500"><div className="flex items-center gap-4 h-full"><div className="p-3 rounded-xl bg-[#F5A623]/10"><DollarSign className="h-6 w-6 text-[#F5A623]" /></div><span className="font-bold text-lg text-white group-hover:text-[#F5A623] transition-colors">Redução de Custos</span></div></div>
            <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-8 hover:border-[#F5A623]/50 transition-all duration-500">
              <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 -translate-y-4"><BarChart3 className="h-32 w-32 text-[#F5A623]" /></div>
              <div className="relative z-10 flex flex-col justify-center h-full"><div className="flex items-center gap-4 mb-3"><BarChart3 className="h-8 w-8 text-[#F5A623]" /><h3 className="text-2xl font-bold text-white">Vendas Previsíveis</h3></div><p className="text-gray-400 max-w-sm">Pipeline de vendas automatizado e dados claros para bater metas todo mês.</p></div>
            </div>
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 flex flex-col justify-center hover:border-[#F5A623]/50 transition-all duration-500"><Rocket className="h-8 w-8 text-[#F5A623] mb-4" /><h3 className="font-bold text-lg text-white">Escalabilidade</h3><p className="text-xs text-gray-400 mt-2">Cresça sem inchar o time.</p></div>
            <div className="col-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151518]/50 p-6 flex flex-col justify-center hover:border-[#F5A623]/50 transition-all duration-500"><Cpu className="h-8 w-8 text-[#F5A623] mb-4" /><h3 className="font-bold text-lg text-white">Data Driven</h3><p className="text-xs text-gray-400 mt-2">Decisões baseadas em fatos.</p></div>
            <div className="col-span-1 md:col-span-2 lg:col-span-4 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#151518] to-[#0f0f11] p-6 hover:border-[#F5A623]/50 transition-all duration-500 flex items-center justify-between">
                <div className="flex items-center gap-4"><div className="p-3 bg-[#F5A623]/20 rounded-full"><Shield className="h-6 w-6 text-[#F5A623]" /></div><div><h3 className="font-bold text-lg text-white">Segurança e Confiabilidade Enterprise</h3><p className="text-sm text-gray-400">Seus dados protegidos e processos rodando com estabilidade garantida.</p></div></div>
                <div className="hidden sm:block"><ArrowRight className="h-6 w-6 text-gray-500 group-hover:text-[#F5A623] group-hover:translate-x-2 transition-all" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          7. FINAL CTA
         --------------------------------------------------------------------------- */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-[#0f0f11] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #4A90E2 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A90E2]/10 via-[#151518] to-[#F5A623]/10 border border-white/10 rounded-3xl p-8 md:p-16 fade-in-section relative overflow-hidden group hover:border-[#4A90E2]/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 via-transparent to-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="order-1">
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-full hover:bg-[#F5A623]/20 hover:border-[#F5A623]/40 transition-all duration-300 group/badge">
                  <Rocket className="h-4 w-4 text-[#F5A623] group-hover/badge:animate-bounce" />
                  <span className="text-sm font-medium text-[#F5A623]">Transformação Digital</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Pronto para<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#4A90E2] to-[#F5A623] animate-gradient bg-[length:200%_auto]">transformar</span><br />seu negócio?</h2>
                <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">Junte-se às empresas que já automatizam processos, aumentam eficiência e crescem de forma previsível.</p>
                <div className="space-y-4 mb-8">
                  {['Consultoria gratuita com especialistas', 'Diagnóstico completo de automação', 'ROI calculado e transparente'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><div className="w-6 h-6 bg-[#4A90E2]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#4A90E2]" /></div><span className="text-sm md:text-base text-gray-300">{item}</span></div>
                  ))}
                </div>
                <Button size="lg" className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#E09515] text-white text-base md:text-lg px-10 py-7 font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#F5A623]/50 relative overflow-hidden group/btn">
                  <span className="relative z-10 flex items-center justify-center">Agendar Conversa Gratuita<ArrowRight className="ml-2 h-6 w-6 group-hover/btn:translate-x-1 transition-transform duration-300" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </Button>
              </div>

              <div className="relative order-2 mt-4 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Analytics Dashboard" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-[#151518] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-xl hover:border-[#4A90E2]/50 hover:shadow-[#4A90E2]/30 transition-all duration-300 hover:scale-110 z-20 group/stat max-w-[140px] md:max-w-none">
                  <div className="text-2xl md:text-3xl font-bold text-[#4A90E2] mb-1 group-hover/stat:scale-110 transition-transform duration-300">+150%</div>
                  <div className="text-[10px] md:text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors">Produtividade Média</div>
                  <div className="absolute inset-0 rounded-xl bg-[#4A90E2]/10 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </div>
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
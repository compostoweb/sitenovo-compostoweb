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
      description: 'Robôs e fluxos inteligentes que eliminam tarefas repetitivas e aceleram processos internos. Sua operação funciona com mais precisão, menos falhas e muito mais velocidade.'
    },
    {
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&q=80',
      title: 'Inteligência Comercial e Automação de Vendas',
      description: 'Organização comercial, IA para priorização de leads, cadências automáticas e CRM eficiente. Seu time vende mais com menos esforço.'
    },
    {
      icon: Cloud,
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80',
      title: 'Software e Cloud Computing para Empresas',
      description: 'Sistemas internos, integrações via API, cloud moderna, microsserviços e infraestrutura escalável. A tecnologia deixa de ser um problema e vira alavanca de crescimento.'
    },
    {
      icon: Target,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=600&q=80',
      title: 'Marketing de Performance Integrado à Automação',
      description: 'Não entregamos leads crus. Entregamos MQL ou agendamento pronto com triagem inteligente e automação de ponta a ponta.'
    }
  ];

  const differentials = [
    { icon: Cpu, text: 'Inteligência aplicada ao negócio' },
    { icon: Zap, text: 'Processos que funcionam sozinhos' },
    { icon: Rocket, text: 'Vendas mais rápidas e organizadas' },
    { icon: Shield, text: 'Operações mais leves e produtivas' },
    { icon: TrendingUp, text: 'Crescimento previsível' },
    { icon: CheckCircle2, text: 'Integração completa entre áreas e sistemas' }
  ];

  const steps = [
    { number: '01', title: 'Análise completa dos processos' },
    { number: '02', title: 'Identificação de gargalos e oportunidades' },
    { number: '03', title: 'Construção da solução inteligente' },
    { number: '04', title: 'Integração total entre sistemas' },
    { number: '05', title: 'Acompanhamento e otimização contínua' }
  ];

  const results = [
    { icon: TrendingUp, title: 'Aumento significativo da produtividade' },
    { icon: CheckCircle2, title: 'Redução de erros operacionais' },
    { icon: Clock, title: 'Processos funcionando 24 horas' },
    { icon: BarChart3, title: 'Vendas mais previsíveis e eficientes' },
    { icon: DollarSign, title: 'Redução de custos e retrabalhos' },
    { icon: Rocket, title: 'Escalabilidade real com tecnologia bem aplicada' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">

      {/* Hero Section - New Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 bg-[#0a0a0b]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(74, 144, 226, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 144, 226, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#4A90E2]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F5A623]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#4A90E2]/10 border border-[#4A90E2]/20 rounded-full">
              <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#4A90E2]">Automação Inteligente</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Automação e
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#F5A623]">
                Inteligência
              </span>
              <br />
              para Empresas
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tecnologia que potencializa equipes, transforma processos e gera crescimento previsível.
            </p>

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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#4A90E2] mb-1">80%</div>
                <div className="text-sm text-gray-400">Redução de tempo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4A90E2] mb-1">24/7</div>
                <div className="text-sm text-gray-400">Operação contínua</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4A90E2] mb-1">100%</div>
                <div className="text-sm text-gray-400">Precisão</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="Dashboard de Automação"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-[#151518] border border-white/10 rounded-xl p-4 backdrop-blur-xl shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4A90E2]/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">RPA Ativo</div>
                  <div className="text-xs text-gray-400">5.2k processos/dia</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#151518] border border-white/10 rounded-xl p-4 backdrop-blur-xl shadow-xl" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F5A623]/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#F5A623]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Eficiência</div>
                  <div className="text-xs text-gray-400">+150% crescimento</div>
                </div>
              </div>
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
              Conectamos tecnologia, processos e pessoas em um único ecossistema inteligente
            </p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A Composto Web integra automação RPA, IA, software, cloud e performance comercial para criar operações eficientes, times mais produtivos e resultados previsíveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#4A90E2]/10 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151518] to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-[#4A90E2]/20 backdrop-blur-sm rounded-xl group-hover:bg-[#4A90E2]/30 transition-colors duration-300">
                    <pillar.icon className="h-8 w-8 text-[#4A90E2]" strokeWidth={1.5} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-16">
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
              <div key={i} className="fade-in-section flex flex-col items-center gap-3 p-4 bg-[#151518] border border-white/10 rounded-xl hover:border-[#4A90E2]/50 transition-all duration-300 hover:scale-110 group" style={{ animationDelay: `${i * 50}ms` }}>
                <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl fade-in-section">
            <img 
              src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=1200&q=80" 
              alt="Código de programação"
              className="w-full h-auto opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent flex items-center justify-center">
              <div className="text-center px-6">
                <Cpu className="h-16 w-16 text-[#4A90E2] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Stack Tecnológico Moderno</h3>
                <p className="text-gray-300">Cada linha de código pensada para gerar resultados</p>
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
              Somos mais do que prestadores de serviço
            </h2>
            <p className="text-lg text-[#F5A623] font-semibold mb-8 max-w-3xl mx-auto">
              Somos parceiros estratégicos que constroem sistemas inteligentes para transformar sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="fade-in-section flex items-center gap-3 p-5 bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 rounded-xl hover:border-[#F5A623]/50 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#F5A623]/10 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-2.5 bg-[#F5A623]/10 rounded-lg group-hover:bg-[#F5A623]/20 transition-colors duration-300 flex-shrink-0">
                  <item.icon className="h-5 w-5 text-[#F5A623]" strokeWidth={2} />
                </div>
                <p className="text-sm font-semibold">{item.text}</p>
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
            <p className="text-lg text-gray-300">
              Mapeamos, automatizamos, integramos e escalamos
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card 
                key={index}
                className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#F5A623]/50 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#F5A623]/10 group text-center"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-5 inline-flex p-4 bg-[#F5A623]/10 rounded-xl group-hover:bg-[#F5A623]/20 transition-colors duration-300">
                    <result.icon className="h-8 w-8 text-[#F5A623]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold group-hover:text-[#F5A623] transition-colors duration-300 leading-snug">
                    {result.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-[#0f0f11] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#4A90E2]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#F5A623]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Está pronto para elevar sua empresa
            <br />
            <span className="text-[#4A90E2]">a outro nível?</span>
          </h2>
          
          <div className="mb-10 space-y-2">
            <p className="text-lg text-gray-300">
              A automação certa transforma operações.
            </p>
            <p className="text-lg text-gray-300">
              A inteligência certa transforma resultados.
            </p>
            <p className="text-lg text-gray-300">
              A tecnologia certa transforma negócios.
            </p>
          </div>
          
          <Button 
            size="lg"
            className="bg-[#F5A623] hover:bg-[#E09515] text-white text-base px-10 py-6 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#F5A623]/20"
          >
            Quero falar com um especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;
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
      title: 'Automação RPA e Eficiência Operacional',
      description: 'Robôs e fluxos inteligentes que eliminam tarefas repetitivas e aceleram processos internos. Sua operação funciona com mais precisão, menos falhas e muito mais velocidade.'
    },
    {
      icon: TrendingUp,
      title: 'Inteligência Comercial e Automação de Vendas',
      description: 'Organização comercial, IA para priorização de leads, cadências automáticas e CRM eficiente. Seu time vende mais com menos esforço.'
    },
    {
      icon: Cloud,
      title: 'Software e Cloud Computing para Empresas',
      description: 'Sistemas internos, integrações via API, cloud moderna, microsserviços e infraestrutura escalável. A tecnologia deixa de ser um problema e vira alavanca de crescimento.'
    },
    {
      icon: Target,
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
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_8d9190b7-1684-4b12-b017-ddf1e511962c/artifacts/cka8rhn4_Logo%20nova%20-%20Composto%20Web%20%28500%20x%20100%20px%29.png" 
              alt="Composto Web" 
              className="h-8"
            />
          </div>
          <Button 
            className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8 transition-all duration-300 hover:scale-105"
          >
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background with noise texture */}
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="absolute inset-0 noise-texture" />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A90E2]/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 inline-block">
            <img 
              src="https://customer-assets.emergentagent.com/job_8d9190b7-1684-4b12-b017-ddf1e511962c/artifacts/meum1uho_Favicon%20Composto%20Web%20-%20Nov25.png" 
              alt="Composto Web Symbol" 
              className="h-24 w-24 mx-auto animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Automação e Inteligência
            <br />
            <span className="text-[#4A90E2]">para Empresas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-snug font-medium">
            Tecnologia que potencializa equipes, transforma processos e gera crescimento previsível.
          </p>

          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Soluções inteligentes que reduzem tarefas, aumentam eficiência e integram sua operação de ponta a ponta.
            Automação, IA, software e performance comercial trabalhando juntos para criar empresas mais rápidas, mais produtivas e mais escaláveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#F5A623] hover:bg-[#E09515] text-white text-lg px-10 py-6 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#F5A623]/20"
            >
              Quero transformar minha empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#4A90E2] text-white hover:bg-[#4A90E2]/10 text-lg px-10 py-6 font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver soluções
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
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
                className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-[#4A90E2]/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-5 inline-flex p-3 bg-[#4A90E2]/10 rounded-xl group-hover:bg-[#4A90E2]/20 transition-colors duration-300">
                    <pillar.icon className="h-8 w-8 text-[#4A90E2]" strokeWidth={1.5} />
                  </div>
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

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-[#0f0f11] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Como funciona
            </h2>
            <p className="text-lg text-[#4A90E2] font-semibold">
              Mapeamos, automatizamos, integramos e escalamos
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4A90E2]/20 via-[#F5A623]/40 to-[#4A90E2]/20" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="fade-in-section relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center group">
                    <div className="mb-6 mx-auto w-20 h-20 bg-[#151518] border-2 border-[#4A90E2] rounded-full flex items-center justify-center font-bold text-2xl text-[#4A90E2] group-hover:bg-[#4A90E2] group-hover:text-white transition-all duration-300 relative z-10">
                      {step.number}
                    </div>
                    <p className="text-lg font-semibold leading-tight">
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xl text-gray-400 mt-12 fade-in-section">
              Tudo desenhado para gerar impacto real no dia a dia da empresa.
            </p>
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
      <section className="py-32 px-6 bg-[#0f0f11] relative overflow-hidden">
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
            className="bg-[#F5A623] hover:bg-[#E09515] text-white text-xl px-12 py-8 font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#F5A623]/30"
          >
            Quero falar com um especialista
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0b] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_8d9190b7-1684-4b12-b017-ddf1e511962c/artifacts/meum1uho_Favicon%20Composto%20Web%20-%20Nov25.png" 
                alt="Composto Web" 
                className="h-10 w-10"
              />
              <img 
                src="https://customer-assets.emergentagent.com/job_8d9190b7-1684-4b12-b017-ddf1e511962c/artifacts/cka8rhn4_Logo%20nova%20-%20Composto%20Web%20%28500%20x%20100%20px%29.png" 
                alt="Composto Web" 
                className="h-7"
              />
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Composto Web. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
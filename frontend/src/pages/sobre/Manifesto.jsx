import React, { useEffect } from 'react';
import { CheckCircle2, Quote, Sparkles, Layers, Rocket, Brain, HeartHandshake } from 'lucide-react';

const Manifesto = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const blocks = [
    {
      title: 'O Futuro é das Organizações Inteligentes',
      lines: [
        'Acreditamos que empresas só crescem de verdade quando tecnologia e pessoas operam em sintonia. Eficiência não é um luxo, é o requisito básico de sobrevivência. Estamos aqui para construir esse futuro agora.'
      ],
      icon: Sparkles,
      color: '#4A90E2'
    },
    {
      title: 'Por que Existimos',
      lines: [
        'Existimos para destravar o potencial operacional. Para eliminar a tarefa repetitiva que drena o talento humano. Para transformar processos travados em fluxos lógicos, rápidos e previsíveis. Para fazer a tecnologia trabalhar a favor do negócio, gerando resultados sustentáveis.'
      ],
      icon: Rocket,
      color: '#F5A623'
    },
    {
      title: 'Como Construímos',
      lines: [
        '1. A Automação Potencializa o Humano, Robôs não substituem talentos; eles os libertam. A automação assume o repetitivo para dar espaço ao estratégico. Aumenta a capacidade, zera os erros e amplia o alcance.',
        '2. Inteligência Comercial é Estrutura, Vendas não dependem de sorte ou talento isolado. Dependem de dados. Acreditamos na prospecção organizada, na equipe focada e na previsibilidade de receita. Inteligência comercial não é uma ferramenta; é cultura.',
        '3. Nada é Isolado. Tudo se Conecta. Rejeitamos a fragmentação. Conectamos RPA, IA, Cloud, CRM e Marketing em um único sistema vivo. Dados fluem, operações aceleram e a empresa escala.',
        
      ],
      icon: Layers,
      color: '#4A90E2'
    },
    {
      title: 'Nossa Missão',
      lines: [
        'Transformar negócios comuns em empresas de Alta Performance. Negócios que decidem com clareza. Que crescem com previsibilidade. Que estão preparados para um futuro que já começou.',
        'Composto Web. Automação e Inteligência.'
      ],
      icon: HeartHandshake,
      color: '#F5A623'
    },
    
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
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <Sparkles className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Manifesto</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Arquitetos de Eficiência.</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-1xl mx-auto">
              Não entregamos apenas tecnologia. Entregamos cultura, inteligência e performance aplicadas ao negócio.
            </p>
          </div>

          {/* Blocks */}
          <div className="space-y-10">
            {blocks.map((block, idx) => (
              <div key={idx} className="fade-in-section p-6 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <block.icon className="h-5 w-5" style={{ color: block.color }} />
                  <p className="md:text-xl text-lg font-bold leading-snug md:leading-normal" style={{ color: block.color }}>{block.title}</p>
                </div>
                <div className="space-y-2">
                  {block.lines.map((line, i2) => (
                    <p key={i2} className="text-[16px] text-gray-300 leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Final commitment */}
          <div className="mt-16 fade-in-section text-center p-8 rounded-2xl bg-[#151518] border border-[#4A90E2]/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">E este é o nosso compromisso.</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-1">Criar empresas mais inteligentes.</p>
            <p className="text-lg text-gray-300">Todos os dias.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;
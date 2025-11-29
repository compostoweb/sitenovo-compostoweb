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
      title: 'Nosso Manifesto',
      lines: [
        'Acreditamos que empresas crescem quando tecnologia e pessoas trabalham juntas.',
        'Acreditamos que eficiência não é um luxo, é um requisito.',
        'Acreditamos que o futuro pertence às organizações inteligentes.',
        'E estamos aqui para construir esse futuro agora.'
      ],
      icon: Sparkles,
      color: '#4A90E2'
    },
    {
      title: 'Por que Existimos',
      lines: [
        'Existimos para transformar processos travados em operações fluidas.',
        'Para eliminar tarefas repetitivas que drenam energia e tempo.',
        'Para elevar equipes a um novo patamar de produtividade.',
        'Para criar sistemas que geram resultados previsíveis e sustentáveis.',
        'Para fazer a tecnologia trabalhar a favor do negócio e não contra ele.'
      ],
      icon: Rocket,
      color: '#F5A623'
    },
    {
      title: 'Como Construímos',
      lines: [
        'Não somos apenas implementadores de ferramentas.',
        'Somos construtores de ecossistemas inteligentes que conectam automação, IA, software, vendas e marketing.',
        'Sistemas que integram dados, aceleram operações e liberam pessoas do que não gera valor.',
        'Tudo isso com uma única finalidade.',
        'Criar empresas mais rápidas, mais eficientes e mais competitivas.'
      ],
      icon: Layers,
      color: '#4A90E2'
    },
    {
      title: 'Automação Potencializa Pessoas',
      lines: [
        'Acreditamos que automação não substitui pessoas.',
        'Ela potencializa pessoas.',
        'Aumenta capacidade.',
        'Reduz erros.',
        'Amplia alcance.',
        'Dá espaço para o que realmente importa.'
      ],
      icon: HeartHandshake,
      color: '#F5A623'
    },
    {
      title: 'Inteligência Comercial é Estrutura',
      lines: [
        'Acreditamos que vendas podem ser previsíveis.',
        'Que prospecção pode ser organizada.',
        'Que equipes podem trabalhar com foco e clareza.',
        'E que inteligência comercial não é uma ferramenta.',
        'É uma estrutura.',
        'É cultura.',
        'É performance.'
      ],
      icon: Brain,
      color: '#4A90E2'
    },
    {
      title: 'Tecnologia Que Liberta',
      lines: [
        'Acreditamos que tecnologia não pode ser um peso.',
        'Ela precisa ser leve.',
        'Simples.',
        'Inteligente.',
        'E sempre alinhada à estratégia.'
      ],
      icon: Quote,
      color: '#F5A623'
    },
    {
      title: 'Tudo é Integrado',
      lines: [
        'Por isso conectamos RPA, IA, automações avançadas, cloud, software interno, CRM, cadências, landing pages, fluxos no WhatsApp, dashboards e tudo que é necessário para criar uma operação sólida e escalável.',
        'Nada é isolado.',
        'Tudo é integrado.'
      ],
      icon: Layers,
      color: '#4A90E2'
    },
    {
      title: 'Missão',
      lines: [
        'Nossa missão é transformar negócios comuns em empresas de alta performance.',
        'Negócios que trabalham com eficiência.',
        'Negócios que tomam decisões com clareza.',
        'Negócios que crescem com previsibilidade.',
        'Negócios preparados para um futuro que já começou.'
      ],
      icon: Rocket,
      color: '#F5A623'
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
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <Sparkles className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Manifesto</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Agentes de Transformação</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-1xl mx-auto">
              Não somos apenas tecnologia. Somos eficiência, cultura e inteligência aplicadas ao negócio.
            </p>
          </div>

          {/* Blocks */}
          <div className="space-y-10">
            {blocks.map((block, idx) => (
              <div key={idx} className="fade-in-section p-6 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <block.icon className="h-5 w-5" style={{ color: block.color }} />
                  <h2 className="text-xl font-bold leading-snug md:leading-normal" style={{ color: block.color }}>{block.title}</h2>
                </div>
                <div className="space-y-2">
                  {block.lines.map((line, i2) => (
                    <p key={i2} className="text-gray-300 leading-relaxed">{line}</p>
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
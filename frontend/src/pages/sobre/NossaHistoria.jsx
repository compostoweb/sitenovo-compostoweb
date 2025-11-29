import React, { useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { ArrowRight, Zap, TrendingUp, Code2, Server, Target, Sparkles, CheckCircle2, Clock } from 'lucide-react';

const NossaHistoria = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pillars = [
    { icon: Zap, name: 'Automação RPA e Eficiência Operacional', color: '#4A90E2' },
    { icon: TrendingUp, name: 'Inteligência Comercial e CRM', color: '#F5A623' },
    { icon: Code2, name: 'Engenharia de Software Sob Medida', color: '#4A90E2' },
    { icon: Server, name: 'Cloud Computing e DevOps', color: '#F5A623' },
    { icon: Target, name: 'Marketing de Performance Integrado', color: '#4A90E2' }
  ];

  const benefits = [
    'eliminam tarefas manuais',
    'integram áreas e plataformas',
    'aceleram vendas',
    'organizam processos',
    'aumentam eficiência',
    'sustentam o crescimento',
    'preparam a empresa para o futuro'
  ];

  const timeline = [
    { phase: 'Início', title: 'Marketing e Vendas', desc: 'Apoio a empresas para ampliar presença digital e gerar oportunidades.' },
    { phase: 'Virada', title: 'Descoberta do Problema Real', desc: 'O gargalo estava na operação: processos manuais, falta de integração, tecnologia mal aplicada.' },
    { phase: 'Evolução', title: 'Tecnologia Aplicada', desc: 'Automação de fluxos, CRM estruturado, cadências inteligentes e sistemas integrados.' },
    { phase: 'Consolidação', title: 'Ecossistema Completo', desc: 'Cinco pilares estratégicos formando um sistema de transformação empresarial.' }
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
              <Clock className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Nossa Jornada</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight md:whitespace-nowrap">
              De Marketing a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Tecnologia Aplicada</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A evolução de uma empresa que descobriu que o verdadeiro crescimento está na operação, não apenas na comunicação.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20 fade-in-section">
            <div className="grid md:grid-cols-2 gap-6">
              {timeline.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-3 py-1 rounded-full bg-[#4A90E2]/10 border border-[#4A90E2]/30">
                      <span className="text-xs font-bold text-[#4A90E2]">{t.phase}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Início */}
          <div className="mb-16 fade-in-section">
            <div className="p-8 rounded-2xl bg-[#151518] border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#4A90E2]">O início de uma mudança</h2>
              <div className="space-y-3 text-gray-300 leading-loose">
                <p>A Composto Web nasceu com o objetivo de ajudar empresas a crescerem no digital.</p>
                <p>No começo, nosso foco estava em marketing e vendas: apoiávamos negócios que precisavam ampliar sua presença, gerar oportunidades e criar rotinas comerciais mais organizadas.</p>
                <p>Esse foi o primeiro passo. Importante, necessário, mas incompleto.</p>
                <p>À medida que atendíamos mais empresas, algo ficou claro.</p>
                <p className="font-semibold text-white">O problema nunca era só marketing. O problema estava na operação.</p>
                <p>Nos processos. Na falta de integração. No excesso de tarefas manuais. Na ausência de tecnologia funcionando de forma estratégica.</p>
                <p>Percebemos que empresas queriam crescer, mas seus sistemas internos não acompanhavam esse crescimento.</p>
                <p className="text-[#F5A623] font-semibold">Sabíamos que podíamos ir além.</p>
              </div>
            </div>
          </div>

          {/* A virada */}
          <div className="mb-16 fade-in-section">
            <div className="p-8 rounded-2xl bg-[#151518] border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#F5A623]">A virada: quando entendemos o verdadeiro problema</h2>
              <div className="space-y-3 text-gray-300 leading-loose">
                <p>Ao aprofundar diagnósticos, mapeamentos e acompanhamentos, encontramos o mesmo cenário repetido inúmeras vezes:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Empresas com potencial enorme, mas presas em rotinas manuais</li>
                  <li>• Equipes sobrecarregadas com tarefas que poderiam ser automatizadas</li>
                  <li>• Processos fragmentados sem integração entre áreas</li>
                  <li>• Tecnologia mal aplicada ou inexistente</li>
                  <li>• E uma operação que dificultava o crescimento em vez de sustentá-lo</li>
                </ul>
                <p className="pt-4">Foi nesse momento que entendemos o que precisávamos fazer.</p>
                <p className="font-semibold text-white">Deixar de ser uma empresa de marketing e nos tornar uma empresa de tecnologia aplicada ao crescimento.</p>
                <p>Começamos a automatizar fluxos, integrar ferramentas, estruturar CRMs, implementar cadências inteligentes e criar sistemas que tiravam o peso da operação e devolviam eficiência ao negócio.</p>
                <p className="text-[#4A90E2] font-semibold">Essa foi a virada. E definiu o nosso futuro.</p>
              </div>
            </div>
          </div>

          {/* Evolução */}
          <div className="mb-16 fade-in-section">
            <div className="p-8 rounded-2xl bg-[#151518] border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#4A90E2]">A evolução para tecnologia, automação e inteligência</h2>
              <div className="space-y-3 text-gray-300 leading-loose mb-6">
                <p>Nos anos seguintes, nossa atuação se expandiu de forma natural.</p>
                <p>As empresas não buscavam apenas campanhas: buscavam eficiência, previsibilidade e escala.</p>
                <p>E isso só seria possível com tecnologia real, aplicada ao dia a dia.</p>
                <p className="font-semibold text-white">Foi assim que consolidamos nossa atuação em cinco pilares estratégicos, formando um ecossistema completo de transformação empresarial:</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {pillars.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#0f0f11] border border-white/5">
                    <p.icon className="h-5 w-5 flex-shrink-0" style={{ color: p.color }} />
                    <span className="text-sm text-gray-300">{p.name}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-gray-300 leading-loose">
                <p className="font-semibold text-white">Esses pilares não trabalham separados. Eles formam um único sistema.</p>
                <p>Um ecossistema que conecta automação, vendas, software, cloud e marketing. Tudo funcionando de ponta a ponta.</p>
                <p className="text-[#F5A623] font-semibold">A Composto Web deixou de entregar tarefas e passou a entregar eficiência.</p>
              </div>
            </div>
          </div>

          {/* Novo posicionamento */}
          <div className="mb-16 fade-in-section">
            <div className="p-8 rounded-2xl bg-[#151518] border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#F5A623]">O novo posicionamento</h2>
              <div className="space-y-3 text-gray-300 leading-loose mb-6">
                <p>Hoje, a Composto Web atua como uma consultoria tecnológica especializada em automação, IA, desenvolvimento de software, cloud computing, vendas inteligentes e geração de demanda integrada.</p>
                <p className="font-semibold text-white">Criamos sistemas que:</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4A90E2] flex-shrink-0" />
                    <span className="text-sm text-gray-300">{b}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 leading-loose">Tecnologia, estratégia e execução se unem para transformar processos e elevar resultados.</p>
            </div>
          </div>

          {/* Para onde estamos indo */}
          <div className="fade-in-section">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#4A90E2]/10 to-[#F5A623]/10 border border-[#4A90E2]/30">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-[#4A90E2]" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Para onde estamos indo</h2>
              </div>
              <div className="space-y-3 text-gray-300 leading-loose">
                <p className="font-semibold text-white text-lg">Nosso caminho é claro: Construir empresas mais inteligentes, mais eficientes e mais preparadas para crescer.</p>
                <p>Estamos evoluindo rápido. Mais automações. Mais IA aplicada. Mais software sob medida. Mais integrações. Mais nuvem. Mais inteligência comercial. Mais sistemas que funcionam sozinhos, com precisão e previsibilidade.</p>
                <p className="pt-4"><span className="text-[#4A90E2] font-semibold">A Composto Web nasceu com marketing.</span></p>
                <p><span className="text-[#F5A623] font-semibold">Cresceu com estratégia.</span></p>
                <p><span className="text-white font-semibold">E hoje existe para aplicar tecnologia que transforma negócios de verdade.</span></p>
                <p className="pt-4 text-white font-semibold">Nossa história continua sendo escrita. Todos os dias. Com eficiência como cultura e inteligência como padrão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0b] to-[#151518]">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos transformar sua operação juntos. Agende uma conversa e descubra como podemos acelerar seu crescimento.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A90E2] text-white font-bold rounded-xl hover:bg-[#3A7BC8] transition-all duration-300 shadow-lg hover:shadow-[#4A90E2]/50">
            Começar Agora
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default NossaHistoria;
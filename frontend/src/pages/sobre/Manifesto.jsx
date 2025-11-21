import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Manifesto = () => {
  const beliefs = [
    'Acreditamos que tecnologia existe para simplificar, não complicar',
    'Processos devem funcionar sozinhos, pessoas devem pensar estrategicamente',
    'Dados sem ação não geram valor',
    'Automação bem feita liberta tempo e potencial humano',
    'Crescimento sustentável vem de operações eficientes',
    'Tecnologia não é custo, é investimento em competitividade'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Nosso <span className="text-[#4A90E2]">Manifesto</span>
          </h1>
          
          <div className="mb-12 text-center text-lg text-gray-300">
            <p className="mb-4">
              Não somos apenas uma empresa de tecnologia.
            </p>
            <p className="text-xl font-semibold text-white">
              Somos agentes de transformação empresarial.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {beliefs.map((belief, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-[#151518] border border-white/10 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-[#4A90E2] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{belief}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-[#4A90E2]/30 rounded-2xl p-8 text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              Nosso compromisso é criar sistemas inteligentes que transformam operações, 
              aceleram resultados e liberam o potencial humano para o que realmente importa: 
              <span className="text-[#4A90E2] font-semibold"> pensar, criar e inovar</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;
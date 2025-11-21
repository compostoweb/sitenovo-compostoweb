import React from 'react';
import { Button } from '../../components/ui/button';
import { Cloud, ArrowRight, Server, Code, Shield } from 'lucide-react';

const SoftwareCloud = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=1920&q=80" 
            alt="Cloud Computing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/90 to-[#0a0a0b]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex p-4 bg-[#4A90E2]/10 rounded-2xl">
            <Cloud className="h-12 w-12 text-[#4A90E2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Software e <span className="text-[#4A90E2]">Cloud Computing</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Sistemas internos, integrações via API, cloud moderna, microsserviços e infraestrutura escalável.
            A tecnologia deixa de ser um problema e vira alavanca de crescimento.
          </p>
          <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8">
            Modernizar Infraestrutura
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=800&q=80" 
                alt="Cloud Infrastructure"
                className="w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Infraestrutura <span className="text-[#4A90E2]">escalável</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Migre para cloud com segurança e escale seu negócio sem limites. Nossa infraestrutura moderna suporta crescimento exponencial mantendo custos otimizados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Server, text: 'Alta Disponibilidade' },
                  { icon: Shield, text: 'Segurança Avançada' },
                  { icon: Code, text: 'APIs Modernas' },
                  { icon: Cloud, text: 'Multi-Cloud' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#151518] border border-white/10 rounded-xl">
                    <item.icon className="h-6 w-6 text-[#4A90E2]" />
                    <span className="text-sm font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareCloud;
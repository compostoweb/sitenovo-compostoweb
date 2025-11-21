import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { TrendingUp, Target, BarChart3, ArrowRight, Users, Zap } from 'lucide-react';

const InteligenciaComercial = () => {
  const features = [
    { icon: Target, title: 'Priorização Inteligente', description: 'IA que identifica os leads com maior potencial de conversão' },
    { icon: Zap, title: 'Cadências Automáticas', description: 'Follow-up perfeito sem esforço manual' },
    { icon: BarChart3, title: 'Previsibilidade', description: 'Vendas mais previsíveis com dados e processos estruturados' },
    { icon: Users, title: 'CRM Eficiente', description: 'Organização comercial que realmente funciona' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/flagged/photo-1553267252-d100936057c1?w=1920&q=80" 
            alt="Business Analytics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/90 to-[#0a0a0b]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex p-4 bg-[#4A90E2]/10 rounded-2xl">
            <TrendingUp className="h-12 w-12 text-[#4A90E2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Inteligência Comercial e <span className="text-[#4A90E2]">Automação de Vendas</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Organização comercial, IA para priorização de leads, cadências automáticas e CRM eficiente.
            Seu time vende mais com menos esforço.
          </p>
          <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8">
            Quero Vender Mais
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Vendas <span className="text-[#4A90E2]">mais inteligentes</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Nossa IA comercial analisa milhares de dados em segundos, priorizando automaticamente os leads com maior probabilidade de conversão. Seu time foca apenas nas oportunidades certas.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80" 
                alt="Analytics Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">O que você <span className="text-[#4A90E2]">ganha</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-[#4A90E2]/10 rounded-xl">
                    <feature.icon className="h-8 w-8 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteligenciaComercial;
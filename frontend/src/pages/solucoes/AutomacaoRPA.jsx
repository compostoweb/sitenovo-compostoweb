import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Zap, CheckCircle2, ArrowRight, Clock, TrendingUp, Shield } from 'lucide-react';

const AutomacaoRPA = () => {
  const benefits = [
    { icon: Clock, title: 'Economia de Tempo', description: 'Reduza em até 80% o tempo gasto em tarefas repetitivas' },
    { icon: CheckCircle2, title: 'Precisão Total', description: 'Elimine erros humanos em processos críticos' },
    { icon: TrendingUp, title: 'Escalabilidade', description: 'Opere 24/7 sem limites de capacidade' },
    { icon: Shield, title: 'Conformidade', description: 'Garanta compliance e rastreabilidade total' }
  ];

  const useCases = [
    'Processamento de pedidos e faturas',
    'Integração entre sistemas legados',
    'Extração e validação de dados',
    'Geração automática de relatórios',
    'Atualização de cadastros em massa',
    'Monitoramento e alertas inteligentes'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#4A90E2]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex p-4 bg-[#4A90E2]/10 rounded-2xl">
            <Zap className="h-12 w-12 text-[#4A90E2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Automação RPA e <span className="text-[#4A90E2]">Eficiência Operacional</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Robôs e fluxos inteligentes que eliminam tarefas repetitivas e aceleram processos internos.
            Sua operação funciona com mais precisão, menos falhas e muito mais velocidade.
          </p>
          <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8 transition-all duration-300 hover:scale-105">
            Agendar Demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Por que <span className="text-[#4A90E2]">automatizar</span>?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-[#4A90E2]/10 rounded-xl">
                    <benefit.icon className="h-8 w-8 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de <span className="text-[#4A90E2]">Uso</span></h2>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-[#151518] border border-white/10 rounded-xl hover:border-[#4A90E2]/50 transition-all duration-300">
                <CheckCircle2 className="h-5 w-5 text-[#4A90E2] flex-shrink-0" />
                <span className="text-sm">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0f0f11]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua operação?</h2>
          <p className="text-gray-300 mb-8">Vamos conversar sobre como a automação pode revolucionar seus processos.</p>
          <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-10 py-6 transition-all duration-300 hover:scale-105">
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AutomacaoRPA;
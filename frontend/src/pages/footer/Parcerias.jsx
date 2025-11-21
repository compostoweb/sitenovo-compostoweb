import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Handshake, Target, Rocket, Users } from 'lucide-react';
import { Button } from '../../components/ui/button';

const Parcerias = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Soluções Complementares',
      description: 'Amplie seu portfólio com tecnologias de automação e IA'
    },
    {
      icon: Rocket,
      title: 'Crescimento Mútuo',
      description: 'Cresça junto com a Composto Web em projetos inovadores'
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Conte com nossa equipe técnica para dar suporte aos seus clientes'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex p-4 bg-[#4A90E2]/10 rounded-2xl">
              <Handshake className="h-12 w-12 text-[#4A90E2]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#4A90E2]">Parcerias</span> Estratégicas
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Acreditamos no poder das parcerias para criar soluções ainda mais completas e impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10">
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

          <div className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-[#4A90E2]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Quer se tornar um parceiro?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Se sua empresa oferece soluções que complementam as nossas, vamos conversar sobre como podemos trabalhar juntos.
            </p>
            <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8">
              Falar sobre Parcerias
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parcerias;
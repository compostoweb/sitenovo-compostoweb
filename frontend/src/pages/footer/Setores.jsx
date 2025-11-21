import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Building2, ShoppingCart, Factory, Truck, Heart, GraduationCap, Landmark, Home } from 'lucide-react';

const Setores = () => {
  const sectors = [
    {
      icon: ShoppingCart,
      name: 'Varejo e E-commerce',
      description: 'Automação de pedidos, gestão de estoque e otimização de vendas online'
    },
    {
      icon: Factory,
      name: 'Indústria',
      description: 'Integração de sistemas, controle de produção e automação de processos'
    },
    {
      icon: Truck,
      name: 'Logística',
      description: 'Rastreamento automatizado, otimização de rotas e gestão de entregas'
    },
    {
      icon: Heart,
      name: 'Saúde',
      description: 'Digitalização de prontuários, agendamentos e gestão de pacientes'
    },
    {
      icon: GraduationCap,
      name: 'Educação',
      description: 'Plataformas de ensino, gestão acadêmica e automação administrativa'
    },
    {
      icon: Landmark,
      name: 'Serviços Financeiros',
      description: 'Automação de processos, compliance e análise de dados financeiros'
    },
    {
      icon: Home,
      name: 'Imobiliário',
      description: 'CRM especializado, automação de contratos e gestão de leads'
    },
    {
      icon: Building2,
      name: 'Serviços B2B',
      description: 'Automação comercial, integrações e gestão de relacionamento'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#4A90E2]">Setores</span> que Atendemos
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Soluções especializadas para diversos segmentos do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300 hover:translate-y-[-4px]">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-[#4A90E2]/10 rounded-xl">
                    <sector.icon className="h-8 w-8 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{sector.name}</h3>
                  <p className="text-sm text-gray-400">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setores;
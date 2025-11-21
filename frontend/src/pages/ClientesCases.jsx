import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { TrendingUp, Clock, Users } from 'lucide-react';

const ClientesCases = () => {
  const cases = [
    {
      company: 'Empresa de Logística',
      sector: 'Logística',
      challenge: 'Processamento manual de 5.000 pedidos/dia',
      solution: 'Automação RPA com integração de sistemas',
      results: ['80% de redução de tempo', '95% menos erros', 'ROI em 4 meses']
    },
    {
      company: 'E-commerce B2B',
      sector: 'Varejo',
      challenge: 'Leads não qualificados e baixa conversão',
      solution: 'IA comercial + CRM estruturado',
      results: ['150% aumento em conversão', '60% redução no ciclo de vendas', 'Previsibilidade total']
    },
    {
      company: 'Indústria de Manufatura',
      sector: 'Indústria',
      challenge: 'Sistemas legados sem integração',
      solution: 'Cloud migration + APIs customizadas',
      results: ['Operação unificada', '40% redução de custos TI', 'Escalabilidade garantida']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Clientes e <span className="text-[#4A90E2]">Cases de Sucesso</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Conheça como ajudamos empresas a transformarem suas operações e alcançarem resultados extraordinários.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{caseItem.company}</h3>
                    <span className="text-sm text-[#4A90E2]">{caseItem.sector}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Desafio</h4>
                      <p className="text-sm">{caseItem.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Solução</h4>
                      <p className="text-sm">{caseItem.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#F5A623] mb-2">Resultados</h4>
                      <ul className="space-y-1">
                        {caseItem.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-[#F5A623]" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientesCases;
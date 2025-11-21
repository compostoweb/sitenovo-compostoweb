import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Code, Database, Cloud, Cpu, Zap, Shield } from 'lucide-react';

const Tecnologias = () => {
  const techStack = [
    {
      category: 'Automação RPA',
      icon: Zap,
      technologies: ['UiPath', 'Automation Anywhere', 'Power Automate', 'Python', 'Selenium']
    },
    {
      category: 'Inteligência Artificial',
      icon: Cpu,
      technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Natural Language Processing']
    },
    {
      category: 'Cloud Computing',
      icon: Cloud,
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      category: 'Desenvolvimento',
      icon: Code,
      technologies: ['React', 'Node.js', 'Python', 'FastAPI', '.NET', 'Java']
    },
    {
      category: 'Banco de Dados',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch']
    },
    {
      category: 'Segurança',
      icon: Shield,
      technologies: ['SSL/TLS', 'OAuth 2.0', 'JWT', 'Criptografia', 'Firewalls']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossas <span className="text-[#4A90E2]">Tecnologias</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trabalhamos com as tecnologias mais modernas e robustas do mercado para entregar soluções de alta performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 bg-[#4A90E2]/10 rounded-xl">
                    <tech.icon className="h-8 w-8 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.technologies.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-400">• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tecnologias;
import React, { useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  TrendingUp, 
  GitBranch,
  Gauge,
  Layers,
  Globe
} from 'lucide-react';

const CloudDevOps = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { 
      icon: Gauge, 
      title: 'Alta Disponibilidade', 
      description: 'Infraestrutura sempre online com SLA de 99.9% e failover automático' 
    },
    { 
      icon: Shield, 
      title: 'Segurança Enterprise', 
      description: 'Criptografia, backups automáticos e conformidade com LGPD/GDPR' 
    },
    { 
      icon: TrendingUp, 
      title: 'Escalabilidade Automática', 
      description: 'Recursos que crescem com sua demanda sem intervenção manual' 
    },
    { 
      icon: Zap, 
      title: 'Performance Extrema', 
      description: 'CDN global, cache inteligente e otimizações de latência' 
    }
  ];

  const services = [
    {
      icon: Cloud,
      title: 'Migração para Cloud',
      description: 'Transição segura e planejada de servidores on-premise para AWS, Azure ou Google Cloud.',
      features: [
        'Análise de workloads',
        'Estratégia de migração',
        'Execução com zero downtime',
        'Otimização de custos'
      ]
    },
    {
      icon: Server,
      title: 'Infraestrutura como Código',
      description: 'Provisionamento automatizado com Terraform, CloudFormation e Ansible.',
      features: [
        'Ambientes replicáveis',
        'Versionamento de infraestrutura',
        'Deploys consistentes',
        'Disaster recovery'
      ]
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automação de builds, testes e deploys com GitHub Actions, GitLab CI e Jenkins.',
      features: [
        'Deploy automatizado',
        'Testes integrados',
        'Rollback instantâneo',
        'Quality gates'
      ]
    },
    {
      icon: Layers,
      title: 'Containerização',
      description: 'Docker, Kubernetes e orquestração de containers para aplicações modernas.',
      features: [
        'Microserviços',
        'Auto-scaling',
        'Load balancing',
        'Service mesh'
      ]
    },
    {
      icon: Lock,
      title: 'Segurança & Compliance',
      description: 'Hardening, monitoramento de vulnerabilidades e gestão de secrets.',
      features: [
        'Firewall e WAF',
        'SSL/TLS automático',
        'Vault para secrets',
        'Auditoria completa'
      ]
    },
    {
      icon: Globe,
      title: 'Monitoramento 24/7',
      description: 'Observabilidade completa com Datadog, Grafana, Prometheus e alertas proativos.',
      features: [
        'Métricas em tempo real',
        'Logs centralizados',
        'APM e tracing',
        'Alertas inteligentes'
      ]
    }
  ];

  const cloudProviders = [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' }
  ];

  const useCases = [
    'Migração completa de servidores físicos para cloud',
    'Setup de ambientes multi-região com alta disponibilidade',
    'Implementação de pipelines CI/CD para deploys diários',
    'Containerização de aplicações legadas',
    'Redução de 40% em custos de infraestrutura',
    'Monitoramento proativo com alertas e dashboards',
    'Disaster recovery com RTO < 1 hora',
    'Auto-scaling para picos de tráfego sazonais'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity .6s ease-out, transform .6s ease-out; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
            alt="Cloud Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/90 to-[#0a0a0b]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center fade-in-section">
          <div className="mb-6 inline-flex p-4 bg-[#4A90E2]/10 rounded-2xl">
            <Cloud className="h-12 w-12 text-[#4A90E2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cloud Computing e <span className="text-[#4A90E2]">DevOps</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Infraestrutura moderna, escalável e segura. Do planejamento à execução, preparamos sua empresa para crescer com agilidade, performance e custos otimizados.
          </p>
          <a href="/contato">
            <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8 transition-all duration-300 hover:scale-105">
              Modernizar Infraestrutura
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in-section">
            Por que migrar para <span className="text-[#4A90E2]">Cloud</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="fade-in-section bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-[#4A90E2]/10 rounded-xl">
                    <benefit.icon className="h-8 w-8 text-[#4A90E2]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in-section">
            Nossos <span className="text-[#4A90E2]">Serviços</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="fade-in-section p-6 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/40 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4A90E2]/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-[#4A90E2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Incluído:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#4A90E2] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-24 px-6 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in-section">
            Tecnologias <span className="text-[#4A90E2]">Cloud Native</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 fade-in-section">
            {cloudProviders.map((provider, i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-[#151518] rounded-xl border border-white/10 hover:border-[#4A90E2]/40 transition-all duration-300 hover:scale-105">
                <img src={provider.logo} alt={provider.name} className="h-12 w-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=800&q=80" 
                alt="DevOps Pipeline"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent" />
            </div>
            
            <div className="fade-in-section">
              <h2 className="text-3xl font-bold mb-6">
                Deploy com <span className="text-[#4A90E2]">confiança</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pipelines automatizados que testam, validam e fazem deploy do seu código em minutos. 
                Rollback instantâneo em caso de problemas. DevOps que acelera entregas sem comprometer qualidade.
              </p>
              <div className="space-y-3">
                {[
                  'Deploys 10x mais rápidos',
                  'Zero downtime em atualizações',
                  'Testes automatizados em cada commit',
                  'Infraestrutura versionada e auditável'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#4A90E2] rounded-full" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 bg-[#0f0f11]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in-section">
            Casos de <span className="text-[#4A90E2]">Sucesso</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="fade-in-section flex items-center gap-3 p-4 bg-[#151518] border border-white/10 rounded-xl hover:border-[#4A90E2]/50 transition-all duration-300"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-[#4A90E2] flex-shrink-0" />
                <span className="text-sm">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para escalar com segurança?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Vamos desenhar a arquitetura cloud ideal para o seu negócio. Agende uma conversa com nossos especialistas.
          </p>
          <a href="/contato">
            <Button className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold px-10 py-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#4A90E2]/50">
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Zap, 
  Shield, 
  Terminal,
  Server,
  Globe,
  Lock,
  Smartphone,
  Layers,
  GitBranch,
  Box,
  Workflow,
  Brain,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  BarChart3,
  ArrowRight
} from 'lucide-react';

const Tecnologias = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      category: 'Frontend & UI/UX',
      icon: Code,
      color: '#4A90E2',
      description: 'Interfaces modernas, responsivas e de alta performance que encantam usuários.',
      technologies: [
        { 
          name: 'React', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          description: 'Biblioteca JavaScript para construção de interfaces dinâmicas e componentes reutilizáveis.',
          useCases: ['SPAs', 'Dashboards', 'Portais Web']
        },
        { 
          name: 'Next.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          description: 'Framework React com SSR, SSG e otimizações automáticas para SEO e performance.',
          useCases: ['E-commerce', 'Landing Pages', 'Aplicações Enterprise']
        },
        { 
          name: 'TypeScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          description: 'JavaScript tipado que previne bugs e melhora a manutenibilidade do código.',
          useCases: ['Projetos de grande porte', 'Equipes distribuídas']
        },
        { 
          name: 'Tailwind CSS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
          description: 'Framework CSS utility-first para design systems consistentes e ágeis.',
          useCases: ['Design responsivo', 'Prototipagem rápida']
        },
        { 
          name: 'Vue.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          description: 'Framework progressivo para construção de interfaces interativas.',
          useCases: ['Aplicações progressivas', 'Componentes modulares']
        },
        { 
          name: 'Shadcn/ui', 
          logo: 'https://ui.shadcn.com/favicon.ico',
          description: 'Biblioteca de componentes acessíveis e customizáveis com Radix UI.',
          useCases: ['Design systems', 'Componentes reutilizáveis']
        }
      ]
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      color: '#F5A623',
      description: 'Arquiteturas robustas, escaláveis e preparadas para alto volume de requisições.',
      technologies: [
        { 
          name: 'Python', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          description: 'Linguagem versátil para backend, automação, IA e ciência de dados.',
          useCases: ['APIs REST', 'Automação RPA', 'Machine Learning']
        },
        { 
          name: 'FastAPI', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
          description: 'Framework Python moderno, rápido e com validação automática de dados.',
          useCases: ['APIs assíncronas', 'Microsserviços', 'Documentação automática']
        },
        { 
          name: 'Node.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          description: 'Runtime JavaScript para construção de aplicações backend escaláveis.',
          useCases: ['APIs em tempo real', 'Websockets', 'Streaming de dados']
        },
        { 
          name: 'Express.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          description: 'Framework minimalista para Node.js com foco em performance.',
          useCases: ['APIs RESTful', 'Middlewares customizados']
        },
        { 
          name: '.NET Core', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
          description: 'Plataforma multiplataforma da Microsoft para aplicações enterprise.',
          useCases: ['Sistemas corporativos', 'Integração com Azure']
        },
        { 
          name: 'Django', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
          description: 'Framework Python completo com ORM, admin e autenticação integrados.',
          useCases: ['Aplicações full-stack', 'Painéis administrativos']
        }
      ]
    },
    {
      category: 'Bancos de Dados',
      icon: Database,
      color: '#4A90E2',
      description: 'Armazenamento seguro, performático e escalável para dados estruturados e não estruturados.',
      technologies: [
        { 
          name: 'PostgreSQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          description: 'Banco relacional open-source com suporte a JSON, transações ACID e queries complexas.',
          useCases: ['Dados relacionais', 'Analytics', 'OLTP']
        },
        { 
          name: 'MongoDB', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          description: 'Banco NoSQL orientado a documentos, ideal para dados não estruturados.',
          useCases: ['Dados dinâmicos', 'Logs', 'Catálogos de produtos']
        },
        { 
          name: 'Redis', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          description: 'Banco em memória para cache, sessões e filas de mensagens ultra-rápidas.',
          useCases: ['Cache de aplicação', 'Sessões de usuário', 'Rate limiting']
        },
        { 
          name: 'MySQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          description: 'Banco relacional tradicional, confiável e amplamente utilizado.',
          useCases: ['Sistemas legados', 'E-commerce', 'CMS']
        },
        { 
          name: 'Elasticsearch', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
          description: 'Motor de busca distribuído para buscas full-text e analytics em tempo real.',
          useCases: ['Busca avançada', 'Logs centralizados', 'Analytics']
        },
        { 
          name: 'DynamoDB', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png',
          description: 'Banco NoSQL serverless da AWS com latência de milissegundos.',
          useCases: ['Aplicações serverless', 'Escalabilidade automática']
        }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: '#F5A623',
      description: 'Infraestrutura em nuvem moderna, automação de deploys e monitoramento contínuo.',
      technologies: [
        { 
          name: 'AWS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          description: 'Plataforma de nuvem líder com mais de 200 serviços para qualquer necessidade.',
          useCases: ['Hospedagem', 'Serverless', 'Machine Learning', 'Storage']
        },
        { 
          name: 'Docker', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          description: 'Containerização de aplicações para ambientes consistentes e portáveis.',
          useCases: ['Desenvolvimento local', 'Deploy consistente', 'Microserviços']
        },
        { 
          name: 'Kubernetes', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
          description: 'Orquestração de containers em produção com alta disponibilidade.',
          useCases: ['Deploy em escala', 'Auto-scaling', 'Load balancing']
        },
        { 
          name: 'Terraform', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
          description: 'Infraestrutura como código (IaC) para provisionar recursos cloud de forma automatizada.',
          useCases: ['Provisionamento automático', 'Infraestrutura versionada']
        },
        { 
          name: 'GitHub Actions', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          description: 'Pipelines CI/CD integrados ao GitHub para automação de builds e deploys.',
          useCases: ['Deploy automático', 'Testes automatizados']
        },
        { 
          name: 'Google Cloud', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
          description: 'Plataforma cloud do Google com foco em IA, BigData e Kubernetes.',
          useCases: ['BigQuery', 'Cloud Run', 'AI Platform']
        },
        { 
          name: 'Azure', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
          description: 'Cloud da Microsoft integrada com ecossistema Windows e Office 365.',
          useCases: ['Integração corporativa', 'Active Directory', 'DevOps']
        }
      ]
    },
    {
      category: 'Mobile & Cross-Platform',
      icon: Smartphone,
      color: '#4A90E2',
      description: 'Aplicativos nativos e híbridos para iOS, Android e multiplataforma.',
      technologies: [
        { 
          name: 'Flutter', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
          description: 'Framework do Google para apps nativos iOS/Android com um único código.',
          useCases: ['Apps multiplataforma', 'UI nativa', 'Alta performance']
        },
        { 
          name: 'React Native', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          description: 'Framework React para desenvolvimento mobile nativo com JavaScript.',
          useCases: ['Apps iOS/Android', 'Reuso de código web']
        },
        { 
          name: 'Expo', 
          logo: 'https://miro.medium.com/0*IPRVE5v1svBfc_Lh.png',
          description: 'Plataforma para React Native com builds simplificados e OTA updates.',
          useCases: ['Prototipagem rápida', 'Updates over-the-air']
        },
        { 
          name: 'Dart', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
          description: 'Linguagem de programação otimizada para construção de UIs com Flutter.',
          useCases: ['Desenvolvimento Flutter', 'Backend com Dart']
        }
      ]
    },
    {
      category: 'Automação & RPA',
      icon: Zap,
      color: '#F5A623',
      description: 'Robôs inteligentes que executam tarefas repetitivas 24/7 sem erros.',
      technologies: [
        { 
          name: 'UiPath', 
          logo: 'https://vmc.digicert.com/e3211931-56fe-4b8a-8839-de0197711c39.svg',
          description: 'Plataforma líder em RPA para automação de processos empresariais.',
          useCases: ['Automação de ERP', 'Processamento de documentos', 'Data entry']
        },
        { 
          name: 'Power Automate', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg',
          description: 'Ferramenta Microsoft para automação low-code integrada ao Office 365.',
          useCases: ['Fluxos de aprovação', 'Integração Microsoft', 'Automação de emails']
        },
        { 
          name: 'Selenium', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
          description: 'Automação de navegadores para testes e web scraping.',
          useCases: ['Testes automatizados', 'Web scraping', 'Monitoramento']
        },
        { 
          name: 'Puppeteer', 
          logo: 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png',
          description: 'Biblioteca Node.js para controle headless do Chrome.',
          useCases: ['Screenshots automatizados', 'PDFs', 'Testes E2E']
        },
        { 
          name: 'Apache Airflow', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg',
          description: 'Orquestração de workflows e pipelines de dados complexos.',
          useCases: ['ETL', 'Pipelines de dados', 'Jobs agendados']
        },
        { 
          name: 'n8n', 
          logo: 'https://n8n.io/favicon.ico',
          description: 'Plataforma open-source de automação visual com 400+ integrações.',
          useCases: ['Integração de APIs', 'Automação sem código', 'Webhooks']
        }
      ]
    },
    {
      category: 'Inteligência Artificial & ML',
      icon: Brain,
      color: '#4A90E2',
      description: 'Modelos de IA e Machine Learning para decisões inteligentes e automação cognitiva.',
      technologies: [
        { 
          name: 'OpenAI GPT', 
          logo: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
          description: 'Modelos de linguagem avançados para geração de texto, chat e análise.',
          useCases: ['Chatbots', 'Geração de conteúdo', 'Análise de sentimentos']
        },
        { 
          name: 'TensorFlow', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
          description: 'Framework open-source do Google para machine learning e deep learning.',
          useCases: ['Redes neurais', 'Visão computacional', 'NLP']
        },
        { 
          name: 'PyTorch', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
          description: 'Framework de deep learning com foco em pesquisa e produção.',
          useCases: ['Modelos customizados', 'Research', 'GPU acceleration']
        },
        { 
          name: 'Scikit-learn', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
          description: 'Biblioteca Python para machine learning clássico e análise de dados.',
          useCases: ['Classificação', 'Regressão', 'Clustering']
        },
        { 
          name: 'Langchain', 
          logo: 'https://cdn.brandfetch.io/idzf7Sjo28/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1759403690368',
          description: 'Framework para construção de aplicações com LLMs e RAG.',
          useCases: ['Chatbots contextuais', 'Busca semântica', 'Agentes IA']
        },
        { 
          name: 'Hugging Face', 
          logo: 'https://huggingface.co/favicon.ico',
          description: 'Plataforma com modelos pré-treinados para NLP, visão e áudio.',
          useCases: ['Modelos pré-treinados', 'Fine-tuning', 'Transformers']
        }
      ]
    },
    {
      category: 'Segurança & Compliance',
      icon: Shield,
      color: '#F5A623',
      description: 'Proteção de dados, autenticação robusta e conformidade com LGPD/GDPR.',
      technologies: [
        { 
          name: 'OAuth 2.0', 
          logo: 'https://oauth.net/images/oauth-logo-square.png',
          description: 'Protocolo padrão para autenticação e autorização segura.',
          useCases: ['Login social', 'APIs seguras', 'SSO']
        },
        { 
          name: 'JWT', 
          logo: 'https://jwt.io/img/icon.svg',
          description: 'Tokens seguros para autenticação stateless em APIs.',
          useCases: ['Autenticação de APIs', 'Sessões distribuídas']
        },
        { 
          name: 'SSL/TLS', 
          logo: 'https://cdn-icons-png.flaticon.com/512/6195/6195699.png',
          description: 'Criptografia de comunicação entre cliente e servidor.',
          useCases: ['HTTPS', 'Segurança de dados em trânsito']
        },
        { 
          name: 'AWS IAM', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          description: 'Gerenciamento de identidades e permissões na AWS.',
          useCases: ['Controle de acesso', 'Políticas de segurança']
        },
        { 
          name: 'HashiCorp Vault', 
          logo: 'https://www.datocms-assets.com/2885/1620159869-brandvaultprimaryattributedcolor.svg',
          description: 'Gerenciamento seguro de secrets, tokens e credenciais.',
          useCases: ['Gestão de secrets', 'Rotação de chaves']
        },
        { 
          name: 'Cloudflare', 
          logo: 'https://www.cloudflare.com/favicon.ico',
          description: 'CDN, proteção DDoS e firewall de aplicação web (WAF).',
          useCases: ['Proteção DDoS', 'CDN global', 'Rate limiting']
        }
      ]
    },
    {
      category: 'Ferramentas de Desenvolvimento',
      icon: Terminal,
      color: '#4A90E2',
      description: 'Ferramentas que aceleram o desenvolvimento e melhoram a qualidade do código.',
      technologies: [
        { 
          name: 'Git', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          description: 'Sistema de controle de versão distribuído essencial para qualquer projeto.',
          useCases: ['Versionamento', 'Colaboração', 'Code review']
        },
        { 
          name: 'GitHub', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          description: 'Plataforma de hospedagem de código com CI/CD integrado.',
          useCases: ['Repositórios', 'Code review', 'CI/CD']
        },
        { 
          name: 'VS Code', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
          description: 'Editor de código leve e extensível com suporte a múltiplas linguagens.',
          useCases: ['Desenvolvimento', 'Debugging', 'Extensions']
        },
        { 
          name: 'Postman', 
          logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
          description: 'Plataforma para desenvolvimento, teste e documentação de APIs.',
          useCases: ['Teste de APIs', 'Documentação', 'Mocks']
        },
        { 
          name: 'ESLint', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
          description: 'Linter JavaScript para encontrar e corrigir problemas no código.',
          useCases: ['Code quality', 'Padrões de código']
        },
        { 
          name: 'Prettier', 
          logo: 'https://prettier.io/icon.png',
          description: 'Formatador de código opinativo para manter consistência.',
          useCases: ['Formatação automática', 'Code style']
        }
      ]
    },
    {
      category: 'Monitoramento & Analytics',
      icon: BarChart3,
      color: '#F5A623',
      description: 'Observabilidade completa com logs, métricas e rastreamento de erros.',
      technologies: [
        { 
          name: 'Datadog', 
          logo: 'https://imgix.datadoghq.com/img/favicons/favicon-32x32.png',
          description: 'Plataforma unificada de monitoramento de infraestrutura, APM e logs.',
          useCases: ['Monitoramento de servidores', 'APM', 'Log management']
        },
        { 
          name: 'Sentry', 
          logo: 'https://www.svgrepo.com/show/354332/sentry-icon.svg',
          description: 'Rastreamento de erros em tempo real com stack traces completos.',
          useCases: ['Error tracking', 'Performance monitoring']
        },
        { 
          name: 'Google Analytics', 
          logo: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
          description: 'Analytics web para rastreamento de comportamento de usuários.',
          useCases: ['Web analytics', 'Conversion tracking']
        },
        { 
          name: 'Grafana', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
          description: 'Visualização de métricas e dashboards customizáveis.',
          useCases: ['Dashboards', 'Alertas', 'Visualização de dados']
        },
        { 
          name: 'Prometheus', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
          description: 'Sistema de monitoramento e alertas com foco em métricas de série temporal.',
          useCases: ['Métricas de infraestrutura', 'Alertas']
        },
        { 
          name: 'New Relic', 
          logo: 'https://newrelic.com/favicon.ico',
          description: 'Observabilidade full-stack com APM, infraestrutura e logs.',
          useCases: ['Application performance', 'Distributed tracing']
        }
      ]
    }
  ];

  const architectureHighlights = [
    {
      icon: Layers,
      title: 'Arquitetura em Camadas',
      description: 'Frontend, Backend, Banco de Dados e Infraestrutura totalmente desacoplados para máxima flexibilidade.'
    },
    {
      icon: GitBranch,
      title: 'Microsserviços',
      description: 'Sistemas modulares que escalam independentemente conforme a demanda.'
    },
    {
      icon: Lock,
      title: 'Segurança por Design',
      description: 'Autenticação, autorização e criptografia em todas as camadas da aplicação.'
    },
    {
      icon: Workflow,
      title: 'CI/CD Automático',
      description: 'Deploys automatizados com testes, validação e rollback em caso de falha.'
    },
    {
      icon: Globe,
      title: 'Cloud Native',
      description: 'Infraestrutura elástica que se adapta ao crescimento do seu negócio.'
    },
    {
      icon: Sparkles,
      title: 'IA Integrada',
      description: 'Inteligência artificial aplicada em automação, chatbots e análise preditiva.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#4A90E2]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <Cpu className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">Stack Tecnológico Completo</span>
            </div>
            <h1 className="text-4xl md:text-6xl  font-bold mb-6 leading-tight">
              A Tecnologia que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Transforma Negócios</span>
            </h1>
            <p className="text-xl text-left text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 md:text-center">
              Trabalhamos com as tecnologias mais modernas e robustas do mercado para entregar soluções de alta performance, seguras e escaláveis.
            </p>
            {/*<p className="text-base text-gray-400 max-w-3xl mx-auto">
              Não somos presos a uma única ferramenta. Escolhemos o stack ideal para cada projeto, garantindo a melhor solução técnica para o seu desafio de negócio.
            </p>*/}
          </div>

          {/* Architecture Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 fade-in-section">
            {architectureHighlights.map((item, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-[#151518] to-[#0f0f11] rounded-2xl border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4A90E2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4A90E2]/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-[#4A90E2]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#4A90E2] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-24 fade-in-section">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}05 100%)`, border: `1px solid ${category.color}30` }}>
                  <category.icon className="h-8 w-8" style={{ color: category.color }} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: category.color }}>{category.category}</h2>
                  <p className="text-gray-400 text-lg">{category.description}</p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="group p-6 bg-[#151518] rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    onClick={() => setActiveCategory(activeCategory === `${catIndex}-${techIndex}` ? null : `${catIndex}-${techIndex}`)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
                        <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                        <ChevronRight className={`h-5 w-5 text-gray-500 group-hover:text-[${category.color}] transition-all ${activeCategory === `${catIndex}-${techIndex}` ? 'rotate-90' : ''}`} style={{ color: activeCategory === `${catIndex}-${techIndex}` ? category.color : undefined }} />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{tech.description}</p>
                    
                    {activeCategory === `${catIndex}-${techIndex}` && tech.useCases && (
                      <div className="mt-4 pt-4 border-t border-white/10 animate-in">
                        <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Casos de Uso:</p>
                        <div className="space-y-2">
                          {tech.useCases.map((useCase, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: category.color }} />
                              <span className="text-sm text-gray-300">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0b] to-[#151518]">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para escalar com tecnologia de ponta?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos aplicar essas tecnologias para resolver os desafios específicos do seu negócio.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A90E2] text-white font-bold rounded-xl hover:bg-[#3A7BC8] transition-all duration-300 shadow-lg hover:shadow-[#4A90E2]/50">
            Falar com Especialista
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Tecnologias;
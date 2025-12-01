import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, ArrowRight, Search, Filter, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const posts = [
    {
      slug: 'automacao-rpa-transformar-operacao',
      title: 'Como a Automação RPA pode transformar sua operação',
      excerpt: 'Descubra como robôs de software podem eliminar tarefas repetitivas e aumentar a produtividade da sua equipe em até 80%.',
      date: '15 Mar 2025',
      category: 'Automação',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      slug: 'automacao-rpa-transformar-operacao',
      title: 'Como a Automação RPA pode transformar sua operação',
      excerpt: 'Descubra como robôs de software podem eliminar tarefas repetitivas e aumentar a produtividade da sua equipe em até 80%.',
      date: '15 Mar 2025',
      category: 'Automação',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      slug: 'ia-comercial-futuro-vendas',
      title: 'IA Comercial: O futuro das vendas previsíveis',
      excerpt: 'Entenda como inteligência artificial está revolucionando processos comerciais e aumentando taxa de conversão em até 150%.',
      date: '10 Mar 2025',
      category: 'IA',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    },
    {
      slug: 'cloud-computing-migrar-agora',
      title: 'Cloud Computing: Por que migrar agora?',
      excerpt: 'Os benefícios da migração para cloud e como isso pode reduzir custos em até 70% e aumentar escalabilidade exponencialmente.',
      date: '05 Mar 2025',
      category: 'Cloud',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    },
    {
      slug: 'devops-acelerando-entregas',
      title: 'DevOps: Acelerando entregas com qualidade',
      excerpt: 'Como a cultura DevOps pode reduzir o time-to-market e garantir deploys mais seguros e frequentes.',
      date: '28 Fev 2025',
      category: 'DevOps',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop'
    },
    {
      slug: 'seguranca-dados-era-digital',
      title: 'Segurança de Dados na Era Digital',
      excerpt: 'Boas práticas de segurança e conformidade com LGPD para proteger dados críticos da sua empresa.',
      date: '20 Fev 2025',
      category: 'Segurança',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
    },
    {
      slug: 'apis-integracoes-conectando-sistemas',
      title: 'APIs e Integrações: Conectando sistemas',
      excerpt: 'Como construir ecossistemas integrados com APIs modernas e escaláveis para unificar sua operação.',
      date: '12 Fev 2025',
      category: 'Desenvolvimento',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    }
  ];

  const categories = ['Todos', ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20 overflow-x-hidden">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity .6s, transform .6s; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[420px] bg-[#4A90E2]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12 md:mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <BookOpen className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Blog & Insights</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight px-2">
              Conhecimento e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Inovação</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
              Insights, tendências e conhecimento sobre automação, inteligência artificial e tecnologia empresarial.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-12 fade-in-section">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-[#151518] border-white/10 text-white placeholder:text-gray-500 focus:border-[#4A90E2]/50"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? 'bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white whitespace-nowrap'
                      : 'bg-transparent border-white/10 text-gray-300 hover:bg-white/5 hover:text-white whitespace-nowrap'}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            {filteredPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`}>
                <Card className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300 group cursor-pointer overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold text-white bg-[#4A90E2] px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#4A90E2] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[#4A90E2] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Nenhum artigo encontrado com esses filtros.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
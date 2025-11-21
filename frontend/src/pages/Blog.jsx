import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: 'Como a Automação RPA pode transformar sua operação',
      excerpt: 'Descubra como robôs de software podem eliminar tarefas repetitivas e aumentar a produtividade da sua equipe.',
      date: '15 Mar 2025',
      category: 'Automação'
    },
    {
      title: 'IA Comercial: O futuro das vendas previsíveis',
      excerpt: 'Entenda como inteligência artificial está revolucionando processos comerciais e aumentando taxa de conversão.',
      date: '10 Mar 2025',
      category: 'Inteligência Comercial'
    },
    {
      title: 'Cloud Computing: Por que migrar agora?',
      excerpt: 'Os benefícios da migração para cloud e como isso pode reduzir custos e aumentar escalabilidade.',
      date: '05 Mar 2025',
      category: 'Cloud'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#4A90E2]">Blog</span> Composto Web
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Insights, tendências e conhecimento sobre automação, inteligência artificial e tecnologia empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-[#4A90E2] bg-[#4A90E2]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#4A90E2] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#4A90E2] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Mais conteúdo em breve</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
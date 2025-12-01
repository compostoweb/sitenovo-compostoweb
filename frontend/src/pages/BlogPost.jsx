import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data - em produção viria de uma API/banco de dados
  const posts = {
    'automacao-rpa-transformar-operacao': {
      title: 'Como a Automação RPA pode transformar sua operação',
      excerpt: 'Descubra como robôs de software podem eliminar tarefas repetitivas e aumentar a produtividade da sua equipe em até 80%.',
      date: '15 Mar 2025',
      category: 'Automação',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
      author: 'Equipe Composto Web',
      content: `
# Introdução

A automação de processos robóticos (RPA) está revolucionando a forma como empresas executam tarefas repetitivas. Neste artigo, vamos explorar como essa tecnologia pode transformar completamente sua operação.

## O que é RPA?

RPA (Robotic Process Automation) é uma tecnologia que permite criar "robôs de software" que imitam ações humanas para executar tarefas repetitivas e baseadas em regras. Esses robôs podem trabalhar 24/7, sem erros, e com velocidade muito superior a qualquer operador humano.

## Benefícios da Automação RPA

### 1. Redução de Custos Operacionais

Empresas que implementam RPA conseguem reduzir custos operacionais em até 70%. Isso acontece porque:

- Menos horas humanas gastas em tarefas repetitivas
- Redução de erros que geram retrabalho
- Maior capacidade de processamento sem contratações

### 2. Aumento de Produtividade

Com robôs executando tarefas operacionais, sua equipe pode focar em atividades estratégicas que realmente geram valor. Estudos mostram que a produtividade pode aumentar em até 80%.

### 3. Precisão e Qualidade

Robôs não cometem erros humanos. Uma vez programados corretamente, executam tarefas com 100% de precisão, o que é especialmente importante em:

- Processamento de pedidos
- Emissão de notas fiscais
- Reconciliação financeira
- Atualização de sistemas

## Casos de Uso Comuns

### Processos Financeiros

- Conciliação bancária automatizada
- Processamento de faturas
- Fechamento de mês
- Relatórios financeiros

### Recursos Humanos

- Onboarding de funcionários
- Processamento de folha de pagamento
- Gestão de benefícios
- Controle de ponto

### Atendimento ao Cliente

- Respostas automáticas
- Atualização de status de pedidos
- Processamento de solicitações
- Geração de relatórios

## Como Implementar RPA na Sua Empresa

### Passo 1: Identificar Processos

Nem todo processo é adequado para automação. Procure por tarefas que sejam:

- Repetitivas e baseadas em regras
- Alto volume de execução
- Propensas a erros humanos
- Realizadas em sistemas digitais

### Passo 2: Priorizar por Impacto

Calcule o ROI potencial de cada processo considerando:

- Tempo economizado
- Redução de erros
- Custo de implementação
- Complexidade técnica

### Passo 3: Escolher a Ferramenta Certa

Existem diversas plataformas de RPA no mercado. As principais são:

- UiPath
- Automation Anywhere
- Blue Prism
- Microsoft Power Automate

### Passo 4: Implementar e Monitorar

Comece com um piloto, monitore os resultados e expanda gradualmente. É importante:

- Treinar a equipe
- Documentar processos
- Manter governança
- Monitorar performance

## ROI da Automação

Em média, empresas conseguem retorno sobre investimento em RPA entre 6 a 12 meses. Os principais indicadores de sucesso incluem:

- Redução de 60-80% no tempo de processamento
- Diminuição de 90%+ em erros operacionais
- Liberação de 30-40% da capacidade da equipe
- Aumento de satisfação dos colaboradores

## Desafios e Como Superá-los

### Resistência à Mudança

Funcionários podem temer que robôs substituam seus empregos. A solução é:

- Comunicação transparente
- Requalificação da equipe
- Demonstração de benefícios
- Envolvimento no processo

### Processos Mal Documentados

RPA exige processos bem definidos. Antes de automatizar:

- Mapeie o processo atual
- Identifique gargalos
- Padronize procedimentos
- Documente cada etapa

### Manutenção de Robôs

Robôs precisam de manutenção quando sistemas mudam. Estabeleça:

- Equipe de suporte dedicada
- Processos de atualização
- Monitoramento contínuo
- Documentação técnica

## Conclusão

A automação RPA não é mais uma tendência, é uma necessidade para empresas que querem se manter competitivas. Com implementação adequada, é possível transformar completamente a operação, reduzir custos e liberar sua equipe para focar no que realmente importa: crescimento e inovação.

Pronto para transformar sua operação com RPA? Entre em contato conosco e descubra como podemos ajudar sua empresa a dar esse salto tecnológico.
      `
    }
  };

  const post = posts[slug] || posts['automacao-rpa-transformar-operacao'];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        
        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="text-white hover:text-[#4A90E2] hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 -mt-32 relative z-10">
        {/* Meta Info */}
        <div className="mb-8">
          <span className="inline-block bg-[#4A90E2] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} de leitura
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              Por {post.author}
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 rounded-2xl p-6 md:p-12 mb-12">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl font-bold mt-6 mb-3 text-[#4A90E2]">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-xl font-bold mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={idx} className="ml-6 text-gray-300">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.trim() === '') {
                return <br key={idx} />;
              }
              return <p key={idx} className="mb-4 text-gray-300 leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-[#4A90E2]" />
              <span className="font-semibold">Compartilhar artigo</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
                Facebook
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#4A90E2]/10 to-[#F5A623]/10 border border-[#4A90E2]/30 rounded-2xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Pronto para automatizar sua operação?</h3>
          <p className="text-gray-300 mb-6">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a dar esse salto tecnológico.
          </p>
          <Link to="/contato">
            <Button className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white">
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

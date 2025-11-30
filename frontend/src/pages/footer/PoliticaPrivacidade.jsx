import React, { useEffect } from 'react';

// Função utilitária para renderizar negrito entre **
function renderBold(text) {
  const parts = [];
  let lastIndex = 0;
  const regex = /\*\*(.+?)\*\*/g;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(React.createElement('strong', { key: key++, className: 'text-white font-semibold' }, match[1]));
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}
import { Shield, Lock, Eye, FileText, UserCheck, Mail, Clock, Database, AlertCircle } from 'lucide-react';

const PoliticaPrivacidade = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "1. Introdução e Definições",
      content: [
        "A Composto Web está comprometida em proteger a privacidade e os dados pessoais de seus usuários, clientes e visitantes do site.",
        "Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e demais legislações aplicáveis.",
        "**Dados Pessoais:** Qualquer informação relacionada a uma pessoa natural identificada ou identificável.",
        "**Titular:** Pessoa natural a quem se referem os dados pessoais.",
        "**Tratamento:** Toda operação realizada com dados pessoais, como coleta, armazenamento, uso, compartilhamento ou eliminação."
      ]
    },
    {
      icon: Database,
      title: "2. Dados Coletados",
      content: [
        "**Dados fornecidos diretamente por você:**",
        "• Nome completo e nome da empresa",
        "• E-mail profissional e telefone de contato",
        "• Cargo e informações sobre a empresa",
        "• Mensagens e solicitações enviadas através dos formulários",
        "",
        "**Dados coletados automaticamente:**",
        "• Endereço IP e informações do dispositivo",
        "• Navegador, sistema operacional e resolução de tela",
        "• Páginas visitadas, tempo de permanência e origem do acesso",
        "• Cookies e tecnologias similares de rastreamento"
      ]
    },
    {
      icon: Eye,
      title: "3. Finalidade do Tratamento",
      content: [
        "Utilizamos seus dados pessoais para as seguintes finalidades:",
        "• **Comunicação:** Responder solicitações, dúvidas e pedidos de informação",
        "• **Comercial:** Apresentar propostas comerciais e demonstrações de produtos",
        "• **Marketing:** Enviar conteúdos relevantes, novidades e atualizações (com seu consentimento)",
        "• **Análise:** Melhorar nossos serviços, site e experiência do usuário",
        "• **Segurança:** Prevenir fraudes e garantir a segurança das operações",
        "• **Cumprimento Legal:** Atender obrigações legais e regulatórias"
      ]
    },
    {
      icon: Lock,
      title: "4. Base Legal para o Tratamento",
      content: [
        "O tratamento dos seus dados pessoais está fundamentado nas seguintes bases legais previstas na LGPD:",
        "• **Consentimento:** Quando você autoriza expressamente o tratamento",
        "• **Execução de Contrato:** Para cumprir obrigações contratuais",
        "• **Legítimo Interesse:** Para atividades de marketing e melhoria de serviços",
        "• **Cumprimento de Obrigação Legal:** Quando exigido por lei",
        "• **Exercício Regular de Direitos:** Em processos judiciais ou administrativos"
      ]
    },
    {
      icon: Shield,
      title: "5. Compartilhamento de Dados",
      content: [
        "Seus dados podem ser compartilhados nas seguintes situações:",
        "• **Prestadores de Serviço:** Empresas que nos auxiliam em hospedagem, email marketing, análise de dados e pagamentos",
        "• **Parceiros Comerciais:** Quando você autorizar expressamente o compartilhamento",
        "• **Autoridades:** Quando exigido por lei ou ordem judicial",
        "• **Sucessores:** Em caso de fusão, aquisição ou venda de ativos da empresa",
        "",
        "**Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing sem seu consentimento explícito.**"
      ]
    },
    {
      icon: Clock,
      title: "6. Armazenamento e Retenção",
      content: [
        "**Local de Armazenamento:** Seus dados são armazenados em servidores seguros localizados no Brasil e/ou em países com nível adequado de proteção de dados.",
        "",
        "**Prazo de Retenção:**",
        "• Dados de contato comercial: enquanto houver relacionamento ativo ou legítimo interesse",
        "• Dados de propostas: até 5 anos após o último contato",
        "• Dados de contratos: pelo prazo legal de prescrição (10 anos)",
        "• Dados de marketing: até a revogação do consentimento",
        "",
        "Após o término do prazo, os dados serão eliminados ou anonimizados, exceto quando houver obrigação legal de retenção."
      ]
    },
    {
      icon: Lock,
      title: "7. Segurança dos Dados",
      content: [
        "Implementamos medidas técnicas e organizacionais para proteger seus dados:",
        "• **Criptografia:** Transmissão segura via SSL/TLS e criptografia em repouso",
        "• **Controle de Acesso:** Apenas colaboradores autorizados têm acesso aos dados",
        "• **Auditoria:** Monitoramento contínuo e registros de acesso",
        "• **Treinamento:** Capacitação regular da equipe em proteção de dados",
        "• **Backup:** Cópias de segurança periódicas em ambientes protegidos",
        "• **Testes:** Avaliações regulares de vulnerabilidades e segurança"
      ]
    },
    {
      icon: UserCheck,
      title: "8. Seus Direitos como Titular",
      content: [
        "De acordo com a LGPD, você tem os seguintes direitos:",
        "• **Confirmação e Acesso:** Saber se tratamos seus dados e acessá-los",
        "• **Correção:** Solicitar correção de dados incompletos ou desatualizados",
        "• **Anonimização ou Eliminação:** Pedir a exclusão de dados desnecessários",
        "• **Portabilidade:** Solicitar seus dados em formato estruturado",
        "• **Revogação do Consentimento:** Retirar autorização a qualquer momento",
        "• **Informação sobre Compartilhamento:** Saber com quem compartilhamos seus dados",
        "• **Oposição:** Opor-se ao tratamento em certas situações",
        "",
        "Para exercer seus direitos, entre em contato através do email: **comercial@compostoweb.com.br**"
      ]
    },
    {
      icon: Mail,
      title: "9. Cookies e Tecnologias de Rastreamento",
      content: [
        "Utilizamos cookies e tecnologias similares para:",
        "• Manter suas preferências e sessões",
        "• Analisar o tráfego e comportamento no site",
        "• Personalizar conteúdo e anúncios",
        "• Melhorar a experiência de navegação",
        "",
        "**Tipos de Cookies:**",
        "• **Essenciais:** Necessários para o funcionamento do site",
        "• **Funcionais:** Armazenam preferências do usuário",
        "• **Analíticos:** Coletam estatísticas de uso",
        "• **Marketing:** Personalizam anúncios e campanhas",
        "",
        "Você pode gerenciar ou desativar cookies nas configurações do seu navegador."
      ]
    },
    {
      icon: FileText,
      title: "10. Alterações nesta Política",
      content: [
        "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou legislação.",
        "Notificaremos sobre alterações significativas através do site ou por e-mail.",
        "Recomendamos que você revise esta página regularmente para se manter informado.",
        "A data da última atualização está indicada no final desta política."
      ]
    },
    {
      icon: Mail,
      title: "11. Contato",
      content: [
        "Para dúvidas, solicitações ou reclamações sobre esta Política de Privacidade:",
        "",
        "**E-mail:** comercial@compostoweb.com.br",
        "",
       // "Você também pode registrar reclamações junto à Autoridade Nacional de Proteção de Dados (ANPD) através do site: www.gov.br/anpd"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20 overflow-x-hidden">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity .6s ease-out, transform .6s ease-out; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[520px] bg-[#4A90E2]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12 md:mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <Shield className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Privacidade e Proteção de Dados</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight px-2">
              Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Privacidade</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto px-2 md:whitespace-nowrap">
              Transparência e segurança no tratamento dos seus dados pessoais, em conformidade com a LGPD
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="fade-in-section p-4 md:p-8 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className={`p-2 md:p-3 rounded-xl flex-shrink-0 ${isEven ? 'bg-[#4A90E2]/10' : 'bg-[#F5A623]/10'}`}>
                      <Icon className={`h-5 w-5 md:h-6 md:w-6 ${isEven ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`} />
                    </div>
                    <p className={`text-[21px] md:text-2xl font-bold leading-tight ${isEven ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`}>
                      {section.title}
                    </p>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 text-[13px] md:text-base text-gray-300 leading-relaxed pl-0 md:pl-16">
                    {section.content.map((paragraph, pIndex) => {
                      if (paragraph === '') return <p key={pIndex} className="h-2" />;
                      if (paragraph.startsWith('•')) {
                        return (
                          <p key={pIndex} className="flex items-start gap-2">
                            <span className="text-[#4A90E2] mt-1.5 flex-shrink-0">•</span>
                            <span className="flex-1">{renderBold(paragraph.substring(2))}</span>
                          </p>
                        );
                      }
                      return (
                        <p key={pIndex}>{renderBold(paragraph)}</p>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="mt-8 md:mt-12 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-[#4A90E2]/10 to-[#F5A623]/10 border border-[#4A90E2]/30 fade-in-section">
            <div className="flex items-start gap-3 md:gap-4">
              <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-[#4A90E2] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base md:text-lg font-bold mb-2">Última Atualização</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">
                  Esta Política de Privacidade foi atualizada em <strong>29 de novembro de 2025</strong>.
                </p>
                <p className="text-gray-400 text-xs">
                  Ao continuar utilizando nossos serviços após esta data, você concorda com os termos descritos nesta política.
                  Caso tenha dúvidas ou não concorde com algum ponto, entre em contato conosco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaPrivacidade;

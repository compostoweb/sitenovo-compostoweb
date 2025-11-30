import React, { useEffect } from 'react';
import { FileText, UserCheck, Lock, Globe, AlertCircle, Edit, Shield, Gavel, Mail } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: '1. Aceitação e Escopo',
    content: [
      'Ao acessar e utilizar o site da Composto Web, você concorda integralmente com estes Termos de Uso e com todas as políticas e avisos publicados. Caso não concorde, recomendamos que não utilize nossos serviços.',
      'Estes termos se aplicam a todos os visitantes, usuários e demais que acessarem ou utilizarem o site.'
    ]
  },
  {
    icon: UserCheck,
    title: '2. Conduta e Uso Permitido',
    content: [
      'Você se compromete a utilizar o site apenas para fins lícitos e de acordo com estes Termos. É proibido:',
      '• Violar direitos de terceiros, inclusive propriedade intelectual, privacidade ou outros direitos;',
      '• Inserir ou transmitir conteúdo ilegal, ofensivo, difamatório, discriminatório ou que possa causar danos à Composto Web ou a terceiros;',
      '• Utilizar qualquer recurso automatizado (robôs, scripts, etc.) para acessar, coletar dados ou interagir com o site sem autorização expressa.'
    ]
  },
  {
    icon: Lock,
    title: '3. Propriedade Intelectual',
    content: [
      'Todo o conteúdo do site (textos, imagens, marcas, logos, layouts, códigos e demais elementos) é de propriedade exclusiva da Composto Web ou de seus licenciantes.',
      'É vedada a reprodução, distribuição, modificação, exibição ou uso comercial de qualquer conteúdo sem autorização prévia e expressa.'
    ]
  },
  {
    icon: Globe,
    title: '4. Links Externos',
    content: [
      'Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, políticas ou práticas de privacidade desses sites.',
      'Recomendamos que você leia os termos e políticas de cada site visitado.'
    ]
  },
  {
    icon: Edit,
    title: '5. Modificações dos Termos',
    content: [
      'A Composto Web reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio.',
      'As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após as alterações constitui aceitação dos novos termos.'
    ]
  },
  {
    icon: Shield,
    title: '6. Privacidade e Proteção de Dados',
    content: [
      'A utilização do site está sujeita à nossa Política de Privacidade, que descreve como coletamos, utilizamos e protegemos seus dados pessoais.',
      'Ao utilizar o site, você concorda com as práticas descritas na Política de Privacidade.'
    ]
  },
  {
    icon: AlertCircle,
    title: '7. Limitação de Responsabilidade',
    content: [
      'A Composto Web não garante que o site estará sempre disponível, livre de erros ou de vírus.',
      'Não nos responsabilizamos por danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de uso do site.'
    ]
  },
  {
    icon: Gavel,
    title: '8. Legislação e Foro',
    content: [
      'Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.',
      'Fica eleito o foro da comarca de Rio de Janeiro/RJ para dirimir quaisquer dúvidas ou controvérsias decorrentes destes termos.'
    ]
  },
  {
    icon: Mail,
    title: '9. Contato',
    content: [
      'Em caso de dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso, entre em contato pelo e-mail:',
      'comercial@compostoweb.com.br'
    ]
  }
];

const TermosUso = () => {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20 overflow-x-hidden">
      <style>{`
        .fade-in-section { opacity: 0; transform: translateY(30px); transition: opacity .6s, transform .6s; }
        .fade-in-section.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[420px] bg-[#4A90E2]/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12 md:mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151518] border border-white/10 mb-6 shadow-lg shadow-[#4A90E2]/10">
              <FileText className="h-4 w-4 text-[#4A90E2]" />
              <span className="text-xs font-bold tracking-widest uppercase">Termos de Uso</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight px-2">
              Termos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#00E5FF] to-[#4A90E2] bg-[length:200%_auto] animate-gradient">Uso</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2 md:whitespace-normal">
              Leia atentamente os termos abaixo antes de utilizar nossos serviços. O uso do site implica na aceitação integral das condições aqui descritas.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="fade-in-section p-4 md:p-8 rounded-2xl bg-gradient-to-br from-[#151518] to-[#0f0f11] border border-white/10 hover:border-[#4A90E2]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className={`p-2 md:p-3 rounded-xl flex-shrink-0 ${isEven ? 'bg-[#4A90E2]/10' : 'bg-[#F5A623]/10'}`}>
                      <Icon className={`h-5 w-5 md:h-6 md:w-6 ${isEven ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`} />
                    </div>
                    <p className={`text-[18px] md:text-2xl font-bold leading-tight whitespace-normal ${isEven ? 'text-[#4A90E2]' : 'text-[#F5A623]'}`}>
                      {section.title}
                    </p>
                  </div>
                  <div className="space-y-2 md:space-y-3 text-[16px] md:text-base text-gray-300 leading-relaxed pl-0 md:pl-16">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className={paragraph.startsWith('•') ? 'pl-4 relative before:content-[\'\\2022\'] before:absolute before:left-0 before:text-[#4A90E2] before:font-bold' : ''}>
                        {paragraph}
                      </p>
                    ))}
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
                  Estes Termos de Uso foram atualizados em <strong>30 de novembro de 2025</strong>.
                </p>
                <p className="text-gray-400 text-xs">
                  O uso contínuo do site após esta data implica aceitação das condições revisadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermosUso;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Soluções',
      links: [
        { path: '/solucoes/automacao-rpa', label: 'Automação RPA' },
        { path: '/solucoes/inteligencia-comercial', label: 'Inteligência Comercial' },
        { path: '/solucoes/software-cloud', label: 'Software e Cloud' },
        { path: '/solucoes/marketing-integrado', label: 'Marketing Integrado' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { path: '/sobre/nossa-historia', label: 'Nossa História' },
        { path: '/sobre/manifesto', label: 'Manifesto' },
        { path: '/clientes-cases', label: 'Clientes e Cases' },
        { path: '/blog', label: 'Blog' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { path: '/tecnologias', label: 'Tecnologias' },
        { path: '/setores', label: 'Setores' },
        { path: '/parcerias', label: 'Parcerias' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { path: '/politica-privacidade', label: 'Política de Privacidade' },
        { path: '/termos-uso', label: 'Termos de Uso' }
      ]
    }
  ];

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_8d9190b7-1684-4b12-b017-ddf1e511962c/artifacts/meum1uho_Favicon%20Composto%20Web%20-%20Nov25.png"
                alt="Composto Web"
                className="h-10 w-10"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_8d9190b7-1684-4b12-b017-ddf1e511962c/artifacts/cka8rhn4_Logo%20nova%20-%20Composto%20Web%20%28500%20x%20100%20px%29.png"
                alt="Composto Web"
                className="h-7"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Automação e Inteligência para Empresas
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-[#4A90E2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 Composto Web. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/contato" className="text-gray-400 text-sm hover:text-[#4A90E2] transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
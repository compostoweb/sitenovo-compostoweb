import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/img/menu/lg-white-cw.png';

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
        { path: '/clientes-cases', label: 'Clientes ' },
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
            <div className="mb-4">
              <img
                src={LogoWhite}
                alt="Composto Web"
                className="h-8"
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

        <div className="border-t border-white/5 pt-8 flex flex-col md:text-center items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center">© 2026 Composto Web. Todos os direitos reservados.</p>
          {/*<div className="flex gap-6">
            <Link to="/contato" className="text-gray-400 text-sm hover:text-[#4A90E2] transition-colors">
              Contato
            </Link>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
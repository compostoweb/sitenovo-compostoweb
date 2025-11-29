import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

// --- IMPORTAÇÃO DAS IMAGENS DA PÁGINA ---
// Ajuste a quantidade de "../" se necessário, dependendo de onde o Header.jsx está salvo.
// Se Header.jsx está em src/components, use '../assets/lg-white-cw.png'
import LogoWhite from '../assets/img/menu/lg-white-cw.png';
import LogoOficial from '../assets/img/menu/lg-oficial-cw.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();

  // URLs DAS LOGOS - Substitua a segunda URL pela sua versão com texto branco
  //const logoOficialTextUrl = "https://customer-assets.emergentagent.com/job_digital-transform-29/artifacts/c52q9usi_Logo%20nova%20oficial%20nov25%20-%20Composto%20Web.png";
  
  // ATENÇÃO: SUBSTITUA A URL ABAIXO PELA VERSÃO DA SUA LOGO COM TEXTO BRANCO E ÍCONE COLORIDO
  // Estou usando a mesma por enquanto apenas como exemplo de posicionamento.
  //const logoWhiteTextUrl = "https://customer-assets.emergentagent.com/job_digital-transform-29/artifacts/c52q9usi_Logo%20nova%20oficial%20nov25%20-%20Composto%20Web.png";


  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMenu(null);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { path: '/', label: 'Home' },
    {
      label: 'Soluções',
      submenu: [
        { path: '/solucoes/automacao-rpa', label: 'Automação RPA e Eficiência' },
        { path: '/solucoes/inteligencia-comercial', label: 'Inteligência Comercial' },
        { path: '/solucoes/software-sob-medida', label: 'Software Sob Medida' },
        { path: '/solucoes/cloud-devops', label: 'Cloud e DevOps' },
        { path: '/solucoes/marketing-integrado', label: 'Marketing Integrado' }
      ]
    },
    {
      label: 'Sobre',
      submenu: [
        { path: '/sobre/nossa-historia', label: 'Nossa História' },
        { path: '/sobre/manifesto', label: 'Manifesto' }
      ]
    },
    { path: '/clientes-cases', label: 'Clientes' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' }
  ];

  const toggleSubmenu = (index) => {
    if (expandedMenu === index) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(index);
    }
  };

  return (
    <>
      {/* --- HEADER PRINCIPAL (Fundo Claro) --- */}
      <header className={`fixed top-0 w-full z-50 bg-gray-50/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO PRINCIPAL (Texto Escuro) */}
          <Link to="/" className="flex items-center relative">
            <img
              src={LogoOficial}
              alt="Composto Web"
              className="h-10 md:h-10"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-[#4A90E2] ${
                      location.pathname === item.path ? 'text-[#4A90E2]' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#4A90E2] transition-colors group-hover:text-[#4A90E2]">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                )}

                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-max min-w-[280px] bg-white shadow-xl rounded-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.path}
                        className="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#4A90E2] transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-6 shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105">
              Fale Conosco
            </Button>
          </div>

          {/* MOBILE MENU TRIGGER (Hambúrguer) */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-[#4A90E2] transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>

        </div>
      </header>

      {/* --- MENU MOBILE OVERLAY (Fundo Escuro) --- */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0b] z-[60] transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100dvh' }}
      >
        {/* HEADER DO MENU MOBILE (Logo Branca + Botão Fechar) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
           {/* LOGO ALTERNATIVA PARA FUNDO ESCURO */}
           <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src={LogoWhite} // <--- ESTA É A IMAGEM QUE VOCÊ PRECISA TROCAR
              alt="Composto Web"
              className="h-10" 
              // Se você não tiver a imagem de texto branco agora, descomente a linha abaixo para um "quebra-galho" (inverte tudo, inclusive o ícone)
              // style={{ filter: 'brightness(0) invert(1)' }} 
            />
          </Link>

          {/* BOTÃO FECHAR (X) */}
          <button 
            className="p-2 text-gray-300 hover:text-[#4A90E2] transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-7 w-7" />
          </button>
        </div>
        
        {/* CONTEÚDO ROLÁVEL DO MENU */}
        <div className="flex flex-col h-full py-8 px-6 overflow-y-auto">
          
          {/* Navegação (Texto Claro) */}
          <nav className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-white/10 last:border-0">
                {item.submenu ? (
                  // Accordion
                  <div>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={`flex items-center justify-between w-full py-4 text-lg font-medium transition-colors ${
                        expandedMenu === index ? 'text-[#4A90E2]' : 'text-gray-200'
                      }`}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform duration-300 ${
                          expandedMenu === index ? 'rotate-180 text-[#4A90E2]' : 'text-gray-500'
                        }`} 
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedMenu === index ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-1">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            to={subitem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base text-gray-400 hover:text-[#4A90E2] py-2 block"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Link Simples
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-4 text-lg font-medium ${
                      location.pathname === item.path ? 'text-[#4A90E2]' : 'text-gray-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="mt-8 space-y-6">
            <Button className="w-full bg-[#F5A623] hover:bg-[#E09515] text-white font-bold py-6 text-lg shadow-[0_0_20px_rgba(245,166,35,0.2)] rounded-xl">
              Fale Conosco
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-500">© 2025 Composto Web</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
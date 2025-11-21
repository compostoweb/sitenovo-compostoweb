import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home' },
    {
      label: 'Soluções',
      submenu: [
        { path: '/solucoes/automacao-rpa', label: 'Automação RPA e Eficiência Operacional' },
        { path: '/solucoes/inteligencia-comercial', label: 'Inteligência Comercial e Automação de Vendas' },
        { path: '/solucoes/software-cloud', label: 'Software e Cloud Computing' },
        { path: '/solucoes/marketing-integrado', label: 'Marketing Integrado à Automação' }
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

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://customer-assets.emergentagent.com/job_digital-transform-29/artifacts/c52q9usi_Logo%20nova%20oficial%20nov25%20-%20Composto%20Web.png"
            alt="Composto Web"
            className="h-10"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
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
                <button
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#4A90E2] transition-colors"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              )}

              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-max min-w-[320px] bg-white shadow-xl rounded-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      to={subitem.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4A90E2] transition-colors whitespace-nowrap"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-6 transition-all duration-300 hover:scale-105">
          Fale Conosco
        </Button>
      </div>
    </header>
  );
};

export default Header;
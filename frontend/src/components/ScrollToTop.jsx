import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Rola para o topo em cada mudança de rota
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remove hash fragment offset antes de rolar
    if (window.location.hash) {
      history.replaceState(null, '', pathname); // limpa o hash para evitar jump
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

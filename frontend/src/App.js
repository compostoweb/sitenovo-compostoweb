import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AutomacaoRPA from './pages/solucoes/AutomacaoRPA';
import InteligenciaComercial from './pages/solucoes/InteligenciaComercial';
import SoftwareCloud from './pages/solucoes/SoftwareCloud';
import CloudDevOps from './pages/solucoes/CloudDevOps';
import MarketingIntegrado from './pages/solucoes/MarketingIntegrado';
import NossaHistoria from './pages/sobre/NossaHistoria';
import Manifesto from './pages/sobre/Manifesto';
import ClientesCases from './pages/ClientesCases';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import PoliticaPrivacidade from './pages/footer/PoliticaPrivacidade';
import TermosUso from './pages/footer/TermosUso';
import Tecnologias from './pages/footer/Tecnologias';
import Setores from './pages/footer/Setores';
import Parcerias from './pages/footer/Parcerias';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Soluções */}
          <Route path="/solucoes/automacao-rpa" element={<AutomacaoRPA />} />
          <Route path="/solucoes/inteligencia-comercial" element={<InteligenciaComercial />} />
          <Route path="/solucoes/software-sob-medida" element={<SoftwareCloud />} />
          <Route path="/solucoes/cloud-devops" element={<CloudDevOps />} />
          <Route path="/solucoes/marketing-integrado" element={<MarketingIntegrado />} />
          
          {/* Sobre */}
          <Route path="/sobre/nossa-historia" element={<NossaHistoria />} />
          <Route path="/sobre/manifesto" element={<Manifesto />} />
          
          {/* Main Pages */}
          <Route path="/clientes-cases" element={<ClientesCases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          
          {/* Footer Pages */}
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/setores" element={<Setores />} />
          <Route path="/parcerias" element={<Parcerias />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
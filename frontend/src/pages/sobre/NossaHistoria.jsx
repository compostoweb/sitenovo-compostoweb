import React from 'react';
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react';

const NossaHistoria = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Nossa <span className="text-[#4A90E2]">História</span>
          </h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-lg">
              A Composto Web nasceu da percepção de que a tecnologia deveria ser uma aliada estratégica, 
              não um obstáculo. Iniciamos nossa jornada com a missão de transformar processos complexos 
              em operações simples e eficientes.
            </p>
            
            <p>
              Ao longo dos anos, evoluímos de uma consultoria de tecnologia para um ecossistema completo 
              de automação, inteligência artificial e performance comercial. Cada projeto nos ensinou algo novo, 
              cada cliente nos desafiou a ser melhores.
            </p>
            
            <p>
              Hoje, somos reconhecidos como parceiros estratégicos que não apenas implementam tecnologia, 
              mas transformam negócios por completo. Nossa expertise abrange desde automação RPA até 
              inteligência comercial avançada.
            </p>
            
            <p>
              Nossa história é construída todos os dias ao lado dos nossos clientes, ajudando empresas a 
              escalarem, crescerem e se tornarem mais competitivas no mercado.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8">
              Faça Parte da Nossa História
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NossaHistoria;
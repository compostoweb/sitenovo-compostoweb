import React from 'react';
import { Button } from '../../components/ui/button';
import { Cloud, ArrowRight, Server, Code, Shield } from 'lucide-react';

const SoftwareCloud = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex p-4 bg-[#4A90E2]/10 rounded-2xl">
            <Cloud className="h-12 w-12 text-[#4A90E2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Software e <span className="text-[#4A90E2]">Cloud Computing</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Sistemas internos, integrações via API, cloud moderna, microsserviços e infraestrutura escalável.
            A tecnologia deixa de ser um problema e vira alavanca de crescimento.
          </p>
          <Button className="bg-[#F5A623] hover:bg-[#E09515] text-white font-semibold px-8">
            Modernizar Infraestrutura
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareCloud;
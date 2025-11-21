import React from 'react';

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Termos de <span className="text-[#4A90E2]">Uso</span>
          </h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site da Composto Web, você concorda em cumprir estes termos de uso 
                e todas as leis e regulamentos aplicáveis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">2. Uso do Site</h2>
              <p>
                Você concorda em usar nosso site apenas para fins legítimos e de maneira que não infrinja 
                os direitos de terceiros ou restrinja ou iniba o uso do site por terceiros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, gráficos, logos e imagens, é propriedade da 
                Composto Web e está protegido por leis de propriedade intelectual.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">4. Limitação de Responsabilidade</h2>
              <p>
                A Composto Web não será responsável por quaisquer danos diretos, indiretos, incidentais 
                ou consequenciais resultantes do uso ou incapacidade de usar nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">5. Modificações</h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação no site.
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: Março de 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermosUso;
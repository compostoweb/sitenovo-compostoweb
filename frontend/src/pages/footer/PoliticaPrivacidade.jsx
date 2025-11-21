import React from 'react';

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Política de <span className="text-[#4A90E2]">Privacidade</span>
          </h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">1. Introdução</h2>
              <p>
                A Composto Web respeita sua privacidade e está comprometida em proteger seus dados pessoais. 
                Esta política explica como coletamos, usamos e protegemos suas informações.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">2. Coleta de Dados</h2>
              <p>
                Coletamos informações que você nos fornece diretamente, como nome, email, telefone e 
                informações da empresa quando você preenche formulários em nosso site ou entra em contato conosco.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">3. Uso dos Dados</h2>
              <p>
                Utilizamos seus dados para fornecer nossos serviços, responder suas solicitações, 
                enviar informações relevantes sobre nossos produtos e melhorar nossa experiência de usuário.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">4. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">5. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir, excluir ou limitar o uso de seus dados pessoais. 
                Entre em contato conosco para exercer esses direitos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">6. Contato</h2>
              <p>
                Para questões sobre esta política, entre em contato: contato@compostoweb.com
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

export default PoliticaPrivacidade;
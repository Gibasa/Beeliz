function ForCondHero() {
  return (
    <section className="w-full bg-brand-white py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        
        {/* TÍTULO */}
        <h2 className="text-brand-primary mb-12">
          A BeeLiz no seu condomínio
        </h2>

        {/* IMAGENS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
          <img
            src="/images/condominio-1.jpg"
            alt="BeeLiz em condomínio - 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/condominio-2.jpg"
            alt="BeeLiz em condomínio - 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/condominio-3.jpg"
            alt="BeeLiz em condomínio - 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/condominio-4.jpg"
            alt="BeeLiz em condomínio - 4"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="max-w-4xl text-left text-brand-primary space-y-6">
          <p>
            Levar a BeeLiz para o seu condomínio é transformar um espaço
            disponível em um serviço que facilita a vida dos moradores todos os
            dias.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Áreas comuns subutilizadas</li>
            <li>Espaços próximos à portaria</li>
            <li>Áreas cobertas</li>
            <li>Áreas externas com baixo uso</li>
          </ul>

          <p>
            Um mini mercado inteligente, com funcionamento simples, reposição
            constante e atendimento humano, pensado para atender diferentes
            perfis de famílias e rotinas.
          </p>

          <p>
            <strong>Cuidamos de toda a operação:</strong>
            <br />
            Da instalação à gestão, da logística à curadoria de produtos.
            <br />
            O condomínio não precisa se preocupar com custos, estoque ou
            manutenção.
            <br />
            O resultado é mais comodidade, mais segurança e mais tempo para o que
            realmente importa.
          </p>

          <p>
            Para os moradores, a BeeLiz vira parte da rotina.
            <br />
            Para o condomínio, um diferencial que valoriza o espaço e a
            experiência de viver ali.
            <br />
            <strong>BeeLiz no seu condomínio.</strong>
            <br />
            Sempre por perto, do jeito que a vida pede.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ForCondHero;

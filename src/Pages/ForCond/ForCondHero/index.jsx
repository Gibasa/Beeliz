function ForCondHero() {
  return (
    <section className="w-full bg-brand-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Container principal: texto à esquerda, imagens à direita */}
        <div className="flex flex-col lg:flex-row items-start gap-20">

          {/* TEXTO */}
          <div className="lg:w-1/2 text-left">
            {/* TÍTULO */}
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              A BeeLiz no seu condomínio
            </h2>

            {/* PARÁGRAFO */}
            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Levar a BeeLiz para o seu condomínio é transformar um espaço disponível em um serviço que facilita a vida dos moradores todos os dias.
            </p>

            {/* LISTA */}
            <ul className="list-disc pl-5 space-y-1 mb-4 font-main text-base md:text-lg text-brand-primary">
              <li>Áreas comuns subutilizadas</li>
              <li>Espaços próximos à portaria</li>
              <li>Áreas cobertas</li>
              <li>Áreas externas com baixo uso</li>
            </ul>

            {/* PARÁGRAFO */}
            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Um mini mercado inteligente, com funcionamento simples, reposição constante e atendimento humano, pensado para atender diferentes perfis de famílias e rotinas.
            </p>

            {/* PARÁGRAFO */}
            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              <strong>Cuidamos de toda a operação:</strong>
              <br />
              Da instalação à gestão, da logística à curadoria de produtos. O condomínio não precisa se preocupar com custos, estoque ou manutenção.
              <br />
              O resultado é mais comodidade, mais segurança e mais tempo para o que realmente importa.
            </p>

            {/* PARÁGRAFO */}
            <p className="font-main text-base md:text-lg text-brand-primary">
              Para os moradores, a BeeLiz vira parte da rotina.
              <br />
              Para o condomínio, um diferencial que valoriza o espaço e a experiência de viver ali.
            </p>
          </div>

          {/* IMAGENS */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/images/ForCond/ForCond1.webp"
              alt="BeeLiz em condomínio - 1"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <img
              src="/images/ForCond/ForCond2.webp"
              alt="BeeLiz em condomínio - 2"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <img
              src="/images/ForCond/ForCond3.webp"
              alt="BeeLiz em condomínio - 3"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <img
              src="/images/ForCond/ForCond4.webp"
              alt="BeeLiz em condomínio - 4"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForCondHero;

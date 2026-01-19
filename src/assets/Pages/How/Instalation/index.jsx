import Button from "../../../../components/Button";

function InstallationSection() {
  return (
    <section className="w-full bg-brand-white py-16">
      {/* WRAPPER CENTRAL */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold italic text-brand-primary mb-12">
          Instalação da Beeliz no seu espaço
        </h2>

        {/* IMAGENS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
          <img
            src="/images/instalacao-1.jpg"
            alt="Instalação Beeliz - etapa 1"
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
          />
          <img
            src="/images/instalacao-2.jpg"
            alt="Instalação Beeliz - etapa 2"
            className="w-full h-auto rounded-xl object-cover"
          />
          <img
            src="/images/instalacao-3.jpg"
            alt="Instalação Beeliz - etapa 3"
            className="w-full h-auto rounded-xl object-cover"
          />
          <img
            src="/images/instalacao-4.jpg"
            alt="Instalação Beeliz - etapa 4"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* TEXTO */}
        <p className="text-base md:text-lg text-brand-primary leading-relaxed mb-8 max-w-4xl text-left">
          A BeeLiz foi pensada para se adaptar a diferentes ambientes,
          respeitando a estrutura existente e valorizando áreas antes pouco
          utilizadas. Sem obras complexas, sem interferências estruturais e
          sem custos para o condomínio.
          <br />
          <br />
          Transformamos metros esquecidos em conveniência real. Um espaço que
          passa a fazer parte da rotina, gera uso contínuo e entrega benefício
          diário para quem vive ali. Onde hoje há um espaço ocioso, amanhã
          pode existir praticidade, cuidado e presença. BeeLiz se instala no
          seu espaço. E muda a forma como ele é vivido.
        </p>

        {/* BOTÃO */}
        <Button hoverVariant="default">
          Quero transformar meu condomínio
        </Button>
      </div>
    </section>
  );
}

export default InstallationSection;

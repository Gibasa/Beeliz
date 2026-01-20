import Button from "../../../components/Button";

function InstallationSection() {
  return (
    <section className="w-full bg-brand-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Container principal: texto à esquerda, imagens à direita */}
        <div className="flex flex-col lg:flex-row items-start gap-20">
          
          {/* TEXTO */}
          <div className="lg:w-1/2 text-left">
            {/* TÍTULO */}
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              Instalação da BeeLiz
              <br /> no seu espaço
            </h2>

            {/* PARÁGRAFO */}
            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              A BeeLiz foi pensada para se adaptar a diferentes ambientes,
              respeitando a estrutura existente e valorizando áreas antes pouco
              utilizadas. Sem obras complexas, sem interferências estruturais e
              sem custos para o condomínio.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Transformamos metros esquecidos em conveniência real. Um espaço
              que passa a fazer parte da rotina, gera uso contínuo e entrega
              benefício diário para quem vive ali. Onde hoje há um espaço
              ocioso, amanhã pode existir praticidade, cuidado e presença.
              BeeLiz se instala no seu espaço. E muda a forma como ele é vivido.
            </p>

            {/* BOTÃO CENTRALIZADO NO MOBILE */}
            <div className="w-full flex justify-center lg:justify-start mt-5">
              <Button hoverVariant="default">
                Quero transformar meu condomínio
              </Button>
            </div>
          </div>

          {/* IMAGENS */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/images/How/How1.webp"
              alt="Instalação Beeliz - etapa 1"
              className="w-full h-auto object-cover rounded-2xl"
              loading="lazy"
            />
            <img
              src="/images/How/How2.webp"
              alt="Instalação Beeliz - etapa 2"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <img
              src="/images/How/How3.webp"
              alt="Instalação Beeliz - etapa 3"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <img
              src="/images/How/How4.webp"
              alt="Instalação Beeliz - etapa 4"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallationSection;

import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const images = [
  "/images/How/How1.webp",
  "/images/How/How2.webp",
  "/images/How/How3.webp",
  "/images/How/How4.webp",
];

function InstallationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-brand-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* TEXTO */}
          <div className="lg:w-1/2 text-left">
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              Instalação da BeeLiz
              <br /> no seu espaço
            </h2>

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

            <div className="w-full flex justify-center lg:justify-start mt-10">
              <Button whatsapp hoverVariant="default">
                Quero transformar meu condomínio
              </Button>
            </div>
          </div>

          {/* CAROUSEL (PADRÃO) */}
          <div className="lg:w-1/2 flex flex-col gap-4">

            {/* IMAGEM GRANDE */}
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={images[activeIndex]}
                alt={`Instalação BeeLiz ${activeIndex + 1}`}
                className="
                  w-full
                  h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]
                  object-contain
                  transition-all duration-500
                "
              />
            </div>

            {/* THUMBNAILS */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded-xl border-2 transition-all ${
                    activeIndex === index
                      ? "border-none"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallationSection;

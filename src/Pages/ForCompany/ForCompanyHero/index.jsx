import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const images = [
  "/images/ForCompany/ForCompany1.webp",
  "/images/ForCompany/ForCompany2.webp",
  "/images/ForCompany/ForCompany3.webp",
  "/images/ForCompany/ForCompany4.webp",
];

function ForCompaniesHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-brand-white pt-12 md:pt-16 pb-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* TEXTO */}
          <div className="lg:w-1/2 text-left flex flex-col">
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              A BeeLiz na sua empresa
            </h2>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Ambientes de trabalho saudáveis começam nos detalhes.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              A BeeLiz se integra a empresas como um ponto de apoio à rotina dos
              colaboradores, criando espaços que favorecem a pausa, a
              organização do dia e pequenos momentos de respiro ao longo da
              jornada.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Quando instalada em salas de descanso, áreas comuns ou locais
              estratégicos, a BeeLiz contribui para uma experiência mais fluida,
              reduz interrupções externas e valoriza o tempo das pessoas.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-6">
              Para a empresa, representa cuidado, atenção ao bem-estar e
              fortalecimento da cultura organizacional. Para quem trabalha ali, torna-se parte natural do dia.
            </p>

            <Button
              whatsapp
              hoverVariant="default"
              className="mt-6 self-center lg:self-start w-fit"
            >
              Quero levar a BeeLiz para minha empresa
            </Button>
          </div>

          {/* CAROUSEL (IGUAL AO BASE) */}
          <div className="lg:w-1/2 flex flex-col gap-4">

            {/* IMAGEM GRANDE */}
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={images[activeIndex]}
                alt={`BeeLiz empresa ${activeIndex + 1}`}
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

        {/* BOTÃO MOBILE */}
        <div className="flex justify-center lg:hidden">
          <Button whatsapp hoverVariant="default" className="mt-8 w-fit">
            Quero saber mais
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ForCompaniesHero;

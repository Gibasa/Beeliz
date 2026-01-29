import { useEffect, useState } from "react";
import Button from "../../components/Button";

const images = [
  "/images/BeelizPlus/BeelizPlus1.webp",
  "/images/BeelizPlus/BeelizPlus2.webp",
  "/images/BeelizPlus/BeelizPlus3.webp",
  "/images/BeelizPlus/BeelizPlus4.webp",
];

function BeelizPlus() {
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
          <div className="lg:w-1/2 text-left flex flex-col">
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              BeeLiz em Centros Comerciais, Hospitais, Universidades e Grandes
              Circulações.
            </h2>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Em ambientes de grande circulação, o tempo é valioso.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              A BeeLiz atua como uma solução de conveniência que apoia pessoas
              em movimento, sejam pacientes, estudantes, profissionais ou
              visitantes, oferecendo acesso rápido a itens essenciais no momento
              em que eles são necessários.
            </p>
            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Em hospitais, universidades e centros comerciais, nossa presença
              contribui para a organização do fluxo, melhora a experiência do
              público e transforma espaços estratégicos em pontos de apoio
              funcionais e acolhedores.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-6">
              Tudo pensado para integrar-se ao ambiente, respeitar o contexto e
              facilitar a jornada de quem passa por ali.
            </p>

            <Button
              whatsapp
              hoverVariant="default"
              className="mt-6 self-center lg:self-start w-fit"
            >
              Quero levar a BeeLiz para minha empresa
            </Button>
          </div>

          {/* CAROUSEL */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {/* IMAGEM GRANDE */}
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={images[activeIndex]}
                alt={`BeeLiz ${activeIndex + 1}`}
                className="w-full 
                          h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]
                          object-contain 
                          transition-all duration-500"
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

export default BeelizPlus;

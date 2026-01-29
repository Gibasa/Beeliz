import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const images = [
  "/images/ForCond/ForCond1.webp",
  "/images/ForCond/ForCond2.webp",
  "/images/ForCond/ForCond3.webp",
  "/images/ForCond/ForCond4.webp",
];

function ForCondHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-brand-white pt-16 pb-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* TEXTO */}
          <div className="lg:w-1/2 text-left flex flex-col">
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              A BeeLiz no seu condomínio
            </h2>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              A BeeLiz nasce para facilitar a vida dentro de casa.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Em condomínios residenciais, somos uma solução de conveniência
              pensada para apoiar a rotina dos moradores, oferecendo acesso
              rápido a itens essenciais sem a necessidade de deslocamentos ou
              interrupções no dia a dia.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Nossa presença valoriza os espaços comuns, contribui para uma
              experiência mais prática e fortalece a sensação de cuidado com
              quem vive ali.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-6">
              Mais do que um minimercado, a BeeLiz se integra ao cotidiano do
              condomínio, respeitando o fluxo, o perfil dos moradores e a
              dinâmica do espaço.
            </p>

            <Button
              whatsapp
              hoverVariant="default"
              className="mt-10 self-center lg:self-start w-fit"
            >
              Quero saber mais
            </Button>
          </div>

          {/* CAROUSEL (PADRÃO BEELIZPLUS) */}
          <div className="lg:w-1/2 flex flex-col gap-4">

            {/* IMAGEM GRANDE */}
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={images[activeIndex]}
                alt={`BeeLiz em condomínio ${activeIndex + 1}`}
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

export default ForCondHero;

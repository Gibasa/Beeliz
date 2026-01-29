import Button from "../../../components/Button";

const imagem1 = "/images/IMAGEM 1.png";

function Hero() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* TEXTO */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="font-title text-4xl md:text-5xl font-bold text-brand-primary leading-tight mb-6 italic">
              Minimercado <br />
              inteligente, com <br />
              cuidado humano.
            </h1>

            <p className="font-main text-base md:text-lg text-brand-primary mb-8
              md:max-w-[28ch] lg:max-w-[35ch]
              mx-auto lg:mx-0"
            >
              Tudo o que você precisa, a poucos passos de você. Uma solução pensada para trazer praticidade, conveniência e tranquilidade para a rotina.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button whatsapp hoverVariant="invert">
                Quero saber mais
              </Button>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={imagem1}
              alt="Shopping basket in a mini-market"
              className="w-full max-w-md lg:max-w-lg h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

import Button from "../../../components/Button";

const imagem1 = "/images/IMAGEM 1.png";

function Hero() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* TEXTO */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="font-title text-4xl md:text-5xl font-bold text-brand-primary leading-tight mb-6 italic">
              Minimercados <br />
              inteligentes com <br />
              cuidado humano
            </h1>

            <p className="font-sans text-base md:text-lg text-gray-700 mb-8 max-w-none m:max-w-[22ch] lg:max-w-[25ch] mx-auto lg:mx-0">
              Tudo o que você precisa, a poucos passos de você.
              <br />
              Uma solução inteligente criada para facilitar o seu dia a dia.
            </p>

            <Button hoverVariant="invert">Quero saber mais</Button>
          </div>

          {/* IMAGEM */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={imagem1}
              alt="Shopping basket in a mini-market"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

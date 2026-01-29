import Button from "../../../components/Button";

function HowToBuy() {
  const steps = [
    {
      src: "/images/Passos/B1.png",
      alt: "Passo 1",
      text: "Escolha o(s) seu(s) produto(s)",
    },
    {
      src: "/images/Passos/B2.png",
      alt: "Passo 2",
      text: "Leia o código de barras",
    },
    {
      src: "/images/Passos/B3.png",
      alt: "Passo 3",
      text: "Selecione a forma de pagamento",
    },
    {
      src: "/images/Passos/B4.png",
      alt: "Passo 4",
      text: "Finalize o pagamento",
    },
    {
      src: "/images/Passos/B5.png",
      alt: "Passo 5",
      text: "Embale suas compras",
    },
    {
      src: "/images/Passos/B6.png",
      alt: "Passo 6",
      text: "Leve seu produto",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col">
        {/* Título */}
        <h2 className="font-title text-brand-primary text-center mb-12 italic">
          Como comprar?
        </h2>

        {/* Grid */}
        <div
          className="grid
                    justify-center
                    grid-cols-[repeat(2,minmax(0,220px))]
                    lg:grid-cols-[repeat(3,minmax(0,320px))]
                    gap-y-10"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                max-w-[220px] lg:max-w-[300px]
                mx-auto
              "
            >
              {/* Imagem */}
              <img
                src={step.src}
                alt={step.alt}
                className="w-full max-w-[180px] lg:max-w-[260px] h-auto"
              />

              {/* Texto */}
              <p
                className="
                mt-3
                font-main font-semibold
                text-brand-primary
                text-base md:text-lg
                leading-snug
                max-w-[22ch]
                w-40
              "
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
        <Button
          whatsapp
          hoverVariant="light"
          className="mt-10 self-center w-fit mb-5"
        >
          Saiba mais
        </Button>
      </div>
    </section>
  );
}

export default HowToBuy;

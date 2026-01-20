function HowToBuy() {
  const steps = [
    { src: "/images/Passos/B1.png", alt: "Passo 1", text: "Escolha o(s) seu(s) produto(s)" },
    { src: "/images/Passos/B2.png", alt: "Passo 2", text: "Leia o código de barras" },
    { src: "/images/Passos/B3.png", alt: "Passo 3", text: "Selecione a forma de pagamento" },
    { src: "/images/Passos/B4.png", alt: "Passo 4", text: "Finalize o pagamento" },
    { src: "/images/Passos/B5.png", alt: "Passo 5", text: "Embale suas compras" },
    { src: "/images/Passos/B6.png", alt: "Passo 6", text: "Leve sua compra para casa" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Título */}
        <h2 className="font-title text-brand-primary text-center mb-12 italic">
          Como comprar?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Imagem */}
              <img
                src={step.src}
                alt={step.alt}
                className="w-full max-w-[220px] lg:max-w-[260px] h-auto"
              />

              {/* Texto */}
              <p className="mt-3 font-main pl-15 font-semibold text-brand-primary text-base md:text-lg leading-snug max-w-[22ch]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowToBuy;

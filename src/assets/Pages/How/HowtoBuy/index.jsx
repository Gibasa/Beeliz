function HowToBuy() {
  const steps = [
    { src: "/images/Passos/B1.png", alt: "Passo 1" },
    { src: "/images/Passos/B2.png", alt: "Passo 2" },
    { src: "/images/Passos/B3.png", alt: "Passo 3" },
    { src: "/images/Passos/B4.png", alt: "Passo 4" },
    { src: "/images/Passos/B5.png", alt: "Passo 5" },
    { src: "/images/Passos/B6.png", alt: "Passo 6" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Título */}
        <h2 className="font-title text-3xl md:text-4xl font-bold text-brand-primary text-center mb-12 italic">
          Como comprar?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex justify-center">
              <img src={step.src} alt={step.alt} className=" h-auto max-w-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;

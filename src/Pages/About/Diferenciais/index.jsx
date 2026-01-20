import Button from "@/components/Button";

const diferenciais = [
  {
    title: "Não somos \nfranquia",
    text: "Sem taxas \nde franquia, \nroyalties e taxas \nde marketing.",
  },
  {
    title: "Empresa \nfamiliar",
    text: "Criada com \na lógica do \ncuidado e da \nresponsabilidade.",
  },
  {
    title: "Suporte \nhumano \nonline",
    text: "Com pessoas para \nresolver dúvidas \ne imprevistos.",
  },
  {
    title: "Política \nde preços",
    text: "Preços mais \natrativos graças \na parcerias \nestratégicas.",
  },
];

function Differentials() {
  return (
    <section className="bg-brand-primary py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* TÍTULO */}
        <h2 className="text-brand-secondary text-center mb-12">
          Por que somos <br />
          diferentes?
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 px-4 sm:px-8 md:px-20 lg:px-40">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="bg-brand-secondary p-6 text-center rounded-2xl mx-auto sm:max-w-none"
            >
              <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center rounded-full bg-brand-primary text-brand-secondary text-lg">
                ✔
              </div>

              <h3 className="text-brand-primary mb-2 whitespace-pre-line">
                {item.title}
              </h3>

              <p className="text-brand-primary whitespace-pre-line ">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button whatsapp hoverVariant="light">
            Quero a BeeLiz no meu condomínio
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Differentials;

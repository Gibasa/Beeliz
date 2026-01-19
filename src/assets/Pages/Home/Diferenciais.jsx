import Button from "../../../components/Button";

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
        <h2 className="font-title text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-12 italic">
          Por que somos <br />
          diferentes?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 px-4 sm:px-8 md:px-20 lg:px-40">
          {diferenciais.map((item, index) => (
            <div key={index} className="bg-brand-secondary p-6 text-center">
              <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center rounded-full bg-brand-primary text-brand-secondary text-2xl">
                ✔
              </div>

              <h3 className="font-title text-xl font-bold text-brand-primary mb-2 italic whitespace-pre-line">
                {item.title}
              </h3>

              <p className="font-sans text-gray-700 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button hoverVariant="light">Quero a Beeliz no meu condomínio</Button>
        </div>
      </div>
    </section>
  );
}

export default Differentials;

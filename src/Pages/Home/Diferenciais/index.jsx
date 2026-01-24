import Button from "@/components/Button";

const diferenciais = [
  {
    title: "Não somos franquia",
    text: "Sem taxas, royalties ou cobranças ocultas.",
  },
  {
    title: "Gestão profissional",
    text: "Operação pensada por quem entende de logística e abastecimento.",
  },
  {
    title: "Atendimento humano",
    text: "Suporte feito por pessoas, com agilidade e proximidade.",
  },
  {
    title: "Projeto sob medida",
    text: "Cada unidade adaptada ao perfil do condomínio.",
  },
  {
    title: "Política de Preço",
    text: "Parcerias estratégicas e controle de custos.",
  },
  {
    title: "Visão de longo prazo",
    text: "Empresa familiar, com responsabilidade e compromisso.",
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
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          mb-12
          px-4 md:px-12 lg:px-24
        ">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="
                bg-brand-secondary 
                p-6 
                text-center 
                rounded-2xl 
                w-full
              "
            >
              <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center rounded-full bg-brand-primary text-brand-secondary text-lg">
                ✔
              </div>

              <h3 className="text-brand-primary mb-2 whitespace-pre-line">
                {item.title}
              </h3>

              <p className="text-brand-primary">
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

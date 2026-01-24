import Button from "../../../components/Button";

function ForCondCards() {
  return (
    <section className="bg-brand-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD – CONDOMÍNIO */}
          <div className="bg-brand-primary text-brand-secondary p-8 rounded-3xl flex flex-col">
            <h3 className="mb-6">Benefícios para o condomínio</h3>
            <ul className="space-y-3">
              <li>• Implantação sem investimento inicial</li>
              <li>• Operação sem custos ou gestão para o condomínio</li>
              <li>• Instalação rápida e totalmente reversível</li>
              <li>• Valorização das áreas comuns</li>
              <li>• Serviço disponível 24h para os moradores</li>
            </ul>
          </div>

          {/* CARD – MORADORES */}
          <div className="bg-brand-primary text-brand-secondary p-8 rounded-3xl flex flex-col">
            <h3 className="mb-6">Benefícios para os moradores</h3>
            <ul className="space-y-3">
              <li>• Conveniência de um mercado dentro do condomínio</li>
              <li>• Menos deslocamentos no dia a dia</li>
              <li>• Mais segurança e tranquilidade</li>
              <li>• Compras rápidas para a rotina</li>
              <li>• Atendimento humano sempre que necessário</li>
            </ul>
          </div>

          {/* BOTÃO CENTRALIZADO */}
          <div className="md:col-span-2 flex justify-center mt-2">
            <Button whatsapp hoverVariant="default">
              Quero transformar meu condomínio
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ForCondCards;

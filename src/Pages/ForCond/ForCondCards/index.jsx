function ForCondCards() {
  return (
    <section className="bg-brand-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD – CONDOMÍNIO */}
          <div className="bg-brand-primary text-brand-secondary p-8 flex rounded-3xl flex-col">
            <h3 className="font-title text-2xl font-bold italic mb-6">
              Benefícios para o condomínio:
            </h3>

            <ul className="space-y-3 text-base md:text-lg">
              <li>• Sem investimento inicial</li>
              <li>• Sem custos operacionais</li>
              <li>• Sem gestão por parte do condomínio</li>
              <li>• Instalação rápida e reversível</li>
              <li>• Valorização do espaço comum</li>
              <li>• Serviço ativo 24h</li>
            </ul>
          </div>

          {/* CARD – MORADORES */}
          <div className="bg-brand-primary text-brand-secondary p-8 flex rounded-3xl flex-col">
            <h3 className="font-title text-2xl font-bold italic mb-6">
              Benefícios para os moradores:
            </h3>

            <ul className="space-y-3 text-base md:text-lg">
              <li>• Mercado dentro do condomínio</li>
              <li>• Menos deslocamentos</li>
              <li>• Mais segurança</li>
              <li>• Compras rápidas para o dia a dia</li>
              <li>• Atendimento humano quando necessário</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ForCondCards;

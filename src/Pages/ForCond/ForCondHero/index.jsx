import Button from "../../../components/Button";

function ForCondHero() {
  return (
    <section className="w-full bg-brand-white pt-16 pb-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-20">

          {/* TEXTO */}
          <div className="lg:w-1/2 text-left flex flex-col sm:justify-center">
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              A BeeLiz no seu condomínio
            </h2>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Levar a BeeLiz para o seu condomínio é transformar um espaço disponível em um serviço que facilita a vida dos moradores todos os dias.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              A BeeLiz se adapta a diferentes tipos de ambientes, como:
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-6 font-main text-base md:text-lg text-brand-primary">
              <li>Áreas comuns subutilizadas</li>
              <li>Espaços próximos à portaria</li>
              <li>Áreas cobertas e descobertas</li>
              <li>Áreas externas com baixo fluxo</li>
            </ul>

            <p className="font-main text-base md:text-lg text-brand-primary mb-6">
              Implantamos um mini mercado inteligente, com operação simples, reposição frequente e atendimento humano, pensado para atender diferentes perfis de famílias e rotinas.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-2 font-semibold">
              Operação completa, sem preocupação para o condomínio.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-6">
              A BeeLiz cuida de toda a operação, da instalação à gestão diária, da logística à curadoria dos produtos.
              <br />
              O condomínio não precisa se preocupar com custos, estoque, manutenção ou gestão operacional.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-6">
              O resultado é mais comodidade, mais segurança e mais tempo para o que realmente importa.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary">
              <strong>Um benefício para todos.</strong>
              <br />
              Para os moradores, a BeeLiz se torna parte da rotina.
              <br />
              Para o condomínio, é um diferencial que valoriza o espaço e melhora a experiência de viver ali.
            </p>

            <Button whatsapp hoverVariant="light" className="mt-10 self-center w-fit">
              Quero saber mais
            </Button>
          </div>

          {/* IMAGENS */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="/images/ForCond/ForCond1.webp" alt="BeeLiz em condomínio - 1" className="w-full h-auto object-cover rounded-2xl" />
            <img src="/images/ForCond/ForCond2.webp" alt="BeeLiz em condomínio - 2" className="w-full h-auto object-cover rounded-2xl" />
            <img src="/images/ForCond/ForCond3.webp" alt="BeeLiz em condomínio - 3" className="w-full h-auto object-cover rounded-2xl" />
            <img src="/images/ForCond/ForCond4.webp" alt="BeeLiz em condomínio - 4" className="w-full h-auto object-cover rounded-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ForCondHero;

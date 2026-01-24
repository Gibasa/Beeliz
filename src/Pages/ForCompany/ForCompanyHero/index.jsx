import Button from "../../../components/Button";

function ForCompaniesHero() {
  return (
    <section className="w-full bg-brand-white pt-12 md:pt-16 pb-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          {/* TEXTO */}
          <div className="lg:w-1/2 text-left flex flex-col">
            <h2 className="font-title text-3xl md:text-4xl font-bold italic text-brand-primary mb-8">
              A BeeLiz na sua empresa
            </h2>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              A BeeLiz se integra a ambientes de trabalho, estudo, circulação e
              cuidado, oferecendo uma solução de conveniência que apoia a rotina
              diária e melhora a experiência das pessoas.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Atendemos:
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-6 font-main text-base md:text-lg text-brand-primary">
              <li>Empresas e indústrias</li>
              <li>Centros comerciais e edifícios corporativos</li>
              <li>Universidades e instituições de ensino</li>
              <li>Hospitais, clínicas e ambientes assistenciais</li>
            </ul>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              A BeeLiz pode estar em áreas comuns estratégicas, próximas a
              fluxos de pessoas, recepção ou acessos principais.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-4">
              Ao facilitar o acesso a itens essenciais dentro do próprio
              ambiente, contribuímos para rotinas mais organizadas.
            </p>

            <p className="font-main text-base md:text-lg text-brand-primary mb-6">
              Para as pessoas, a BeeLiz se torna parte natural da rotina.
              <br />
              Para a instituição, é um diferencial que valoriza o espaço.
            </p>

            <Button
              whatsapp
              hoverVariant="default"
              className="mt-4 self-center lg:self-start w-fit"
            >
              Quero levar a BeeLiz para minha empresa
            </Button>
          </div>

          {/* IMAGENS */}
          <div className="lg:w-1/3 w-full flex flex-col gap-4 items-center lg:items-stretch">
            <img
              src="/images/ForCompany/ForCompany1.webp"
              alt="BeeLiz em ambiente corporativo"
              className="w-full max-w-md lg:max-w-none h-auto object-cover rounded-3xl"
            />

            <img
              src="/images/ForCompany/ForCompany2.webp"
              alt="BeeLiz em ambiente educacional"
              className="w-full max-w-md lg:max-w-none h-auto object-cover rounded-3xl"
            />

            <img
              src="/images/ForCompany/ForCompany3.webp"
              alt="BeeLiz em ambiente assistencial"
              className="w-full max-w-md lg:max-w-none h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="flex justify-center lg:hidden">
          <Button whatsapp hoverVariant="default" className="mt-8 w-fit">
            Quero saber mais
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ForCompaniesHero;

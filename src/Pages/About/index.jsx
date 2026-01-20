import Button from "../../components/Button";

const imagem2 = "/images/IMAGEM 2.png";

function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col py-15 md:flex-row items-start justify-between gap-12">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-brand-primary py-2 lg:text-left sm:text-center mb-12">
              Quem somos
            </h2>
            <p className="text-gray-700 mb-6">
              A BeeLiz nasceu de uma necessidade real do dia a dia: resolver
              imprevistos de forma rápida, simples e sem deslocamentos. Da
              rotina corrida de famílias e profissionais surgiu a ideia de estar
              no lugar certo, na hora certa, facilitando decisões e reduzindo
              esforços.
            </p>

            <p className="text-gray-700 mb-6">
              Criada por uma família, a marca carrega no próprio nome sua origem
              e seus valores. BeeLiz vem de Bento e Liz, filhos dos fundadores,
              e também da palavra bee (abelha), símbolo de organização, cuidado
              e responsabilidade.
            </p>

            <p className="text-gray-700">
              Inspirada na inteligência coletiva das abelhas, a BeeLiz une
              tecnologia, praticidade e cuidado humano para cuidar da rotina das
              pessoas e fazer a vida fluir melhor, onde elas vivem e trabalham.
            </p>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex justify-center flex-col">
            <img
              src={imagem2}
              alt="Família reunida em ambiente doméstico"
              className="max-w-full h-auto"
            />
            <Button whatsapp hoverVariant="light" className="mt-10 self-center w-fit">
              Quero saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

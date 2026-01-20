import Differentials from "./Diferenciais";

const imagem2 = "/images/IMAGEM 2.png";

function About() {
  return (
    <section className="bg-white">
        <Differentials />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-brand-primary py-10 text-center mb-12">
          Quem somos
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
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
          <div className="md:w-1/2 flex justify-center">
            <img
              src={imagem2}
              alt="Família reunida em ambiente doméstico"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

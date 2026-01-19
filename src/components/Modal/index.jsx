import Button from "../Button";

function EntryModal({ onClose, onAction }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal */}
      <div className="relative bg-white max-w-md w-full mx-4 p-8 md:p-10 text-center rounded-2xl">
        
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-primary text-xl"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Conteúdo */}
        <h2 className="font-title text-2xl md:text-3xl font-bold italic text-brand-primary mb-4">
          Aviso importante
        </h2>

        <p className="font-main text-brand-primary mb-8 text-base md:text-lg">
          Quer saber como a BeeLiz pode transformar o dia a dia do seu
          condomínio?
        </p>

        <Button hoverVariant="invert" onClick={onAction}>
          Quero saber mais
        </Button>
      </div>
    </div>
  );
}

export default EntryModal;

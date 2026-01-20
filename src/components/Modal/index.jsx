import Button from "../Button";

function EntryModal({ onClose, onAction }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal */}
      <div className="relative bg-white max-w-lg w-full mx-4 p-8 md:p-10 text-center rounded-2xl">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-primary text-xl cursor-pointer"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Conteúdo */}
        <h2 className="font-title text-2xl md:text-3xl font-bold italic text-brand-primary mb-4">
          Indique e ganhe!
        </h2>

        <p className="font-main text-brand-primary mb-8 text-sm">
          Conhece um condomínio que combina com a Beeliz? <br/>Indique pra gente
          e, se o contrato for fechado, você recebe uma recompensa especial!
          Aproveite a oportundade de ganhar enquanto ajuda a Beeliz a crescer.
        </p>

        <Button hoverVariant="invert" onClick={onAction}>
          Quero saber mais
        </Button>
      </div>
    </div>
  );
}

export default EntryModal;

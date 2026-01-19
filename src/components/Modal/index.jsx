function EntryModal({ onClose, onAction }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal */}
      <div className="relative bg-white max-w-md w-full mx-4 p-8 text-center">
        
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-primary text-xl"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Conteúdo */}
        <h2 className="font-title text-2xl font-bold text-brand-primary mb-4 italic">
          Aviso importante
        </h2>

        <p className="font-sans text-gray-700 mb-6">
          Quer saber como a BeeLiz pode transformar o dia a dia do seu
          condomínio?
        </p>

        <button
          onClick={onAction}
          className="bg-brand-secondary text-brand-primary font-bold py-3 px-6 rounded-full cursor-pointer hover:bg-brand-primary hover:text-brand-secondary transition-colors"
        >
          Quero saber mais
        </button>
      </div>
    </div>
  );
}

export default EntryModal;

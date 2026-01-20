import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  const phoneNumber = "5515996810505";
  const message = "Olá! Gostaria de saber mais sobre a BeeLiz.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-16 h-16
        bg-brand-primary
        rounded-full
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        transition-transform
      "
    >
      <FaWhatsapp className="w-9 h-9 text-brand-secondary" />
    </a>
  );
}

export default WhatsApp;

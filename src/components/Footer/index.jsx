import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">

        <div className="flex flex-col items-center text-center gap-4">
          
          {/* Ícones */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/beelizmarketgo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-brand-secondary hover:opacity-80 transition"
            >
              <FaInstagram className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/company/beelizmarketgo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-brand-secondary hover:opacity-80 transition"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>

          {/* Localização */}
          <div className="flex items-center gap-2 text-brand-secondary font-main text-sm">
            <FaMapMarkerAlt className="text-brand-secondary" />
            <span>Sorocaba · SP · Brasil</span>
          </div>

          {/* Copyright */}
          <p className="text-brand-secondary font-main text-sm">
            © {year} BeeLiz. Todos os direitos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

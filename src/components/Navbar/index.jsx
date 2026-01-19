import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navBg = scrolled ? "bg-brand-secondary" : "bg-brand-primary";
  const itemBg = scrolled ? "bg-brand-primary" : "bg-brand-secondary";
  const textColor = scrolled ? "text-brand-secondary" : "text-brand-primary";

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={scrolled ? "/images/Logo-blue.png" : "/images/Logo-yellow.png"}
            alt="Beeliz Logo"
            className="h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* MENU */}
        <div className="flex space-x-4">
          {[
            { label: "Quem somos", path: "/quem-somos" },
            { label: "Como funciona", path: "/como-funciona" },
            { label: "Para condomínios", path: "/para-condominios" },
            { label: "Contato", path: "/contato" },
          ].map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-5 py-2
                  rounded-full
                  transition-colors duration-300
                  font-medium italic
                  text-sm md:text-base lg:text-lg
                  ${active ? "bg-white text-brand-primary" : itemBg}
                  ${textColor}
                  hover:bg-white
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === "/quem-somos" && location.pathname === "/") {
      return true;
    }
    return location.pathname === path;
  };

  /** =========================
   * CORES DESKTOP (INALTERADAS)
   ========================== */
  const navBg = scrolled ? "bg-brand-secondary" : "bg-brand-primary";
  const itemBg = scrolled ? "bg-brand-primary" : "bg-brand-secondary";
  const textColor = scrolled ? "text-brand-secondary" : "text-brand-primary";

  /** =========================
   * CORES HAMBURGUER (INVERTIDAS)
   ========================== */
  const mobileBoxBg = scrolled ? "bg-brand-primary" : "bg-brand-secondary";

  const mobileButtonBg = scrolled ? "bg-brand-secondary" : "bg-brand-primary";

  const mobileTextColor = scrolled
    ? "text-brand-primary"
    : "text-brand-secondary";

  const burgerColor = scrolled ? "text-brand-primary" : "text-brand-secondary";

  const menuItems = [
    { label: "Quem somos", path: "/" },
    { label: "Como funciona", path: "/como-funciona" },
    { label: "Para condomínios", path: "/para-condominios" },
    { label: "Para empresas", path: "/para-empresas" },
    { label: "Contato", path: "/contato" },
  ];

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
            className="h-12 lg:h-16 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex space-x-3">
          {menuItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2.5
                  rounded-full
                  transition-colors duration-300
                  font-medium italic
                  text-sm md:text-base
                  ${
                    active
                      ? "bg-white text-brand-primary"
                      : `${itemBg} ${textColor}`
                  }
                  hover:bg-white hover:text-brand-primary
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* HAMBURGUER + DROPDOWN */}
        <div className="relative lg:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`focus:outline-none transition-colors ${burgerColor}`}
            aria-label="Abrir menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* DROPDOWN INVERTIDO */}
          <div
            className={`
              absolute right-0 mt-3 w-56
              rounded-2xl shadow-lg
              transition-all duration-200 origin-top-right
              ${mobileBoxBg}
              ${
                menuOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }
            `}
          >
            <div className="p-3 space-y-2">
              {menuItems.map((item) => {
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block text-center
                      px-5 py-2.5
                      rounded-full
                      transition-colors duration-300
                      font-bold italic
                      text-sm
                      ${
                        active
                          ? "bg-white text-brand-primary"
                          : `${mobileButtonBg} ${mobileTextColor}`
                      }
                      hover:bg-white hover:text-brand-primary
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

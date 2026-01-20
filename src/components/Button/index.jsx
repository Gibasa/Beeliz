function Button({
  children,
  onClick,
  className = "",
  hoverVariant = "default",
  type = "button",
  whatsapp = false,
}) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-main font-semibold
    text-sm md:text-base
    py-2.5 px-6
    rounded-full
    cursor-pointer
    transition-colors duration-300
    focus:outline-none
  `;

  const variants = {
    default: `
      bg-brand-primary text-brand-secondary
      hover:bg-brand-secondary hover:text-brand-primary
    `,
    bgYellow: `
      bg-brand-primary text-brand-secondary
      hover:bg-white hover:text-brand-primary
    `,
    invert: `
      bg-brand-secondary text-brand-primary
      hover:bg-brand-primary hover:text-brand-secondary
    `,
    light: `
      bg-brand-secondary text-brand-primary
      hover:bg-white hover:text-brand-primary
    `,
  };

  const classes = `${baseClasses} ${variants[hoverVariant]} ${className}`;

  if (whatsapp) {
    const phoneNumber = "5515996810505"; 
    const message = "Olá! Gostaria de saber mais sobre a BeeLiz.";
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;

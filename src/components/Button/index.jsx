function Button({
  children,
  onClick,
  className = "",
  hoverVariant = "default", // default | invert | light
}) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold
    py-3 px-6
    rounded-full
    cursor-pointer
    transition-colors duration-300
    focus:outline-none
    italic
  `;

  const variants = {
    default: `
      bg-brand-primary text-brand-secondary
      hover:bg-brand-secondary hover:text-brand-primary
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

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variants[hoverVariant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

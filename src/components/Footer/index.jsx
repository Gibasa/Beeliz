function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-beeliz-dark-blue py-8 text-white text-center">
      <p>&copy; {currentYear} Beeliz Market Go. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;



const Header = () => {
  return (
    
    <header className="w-full h-auto bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] pt-5">
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Logo */}
      <div className=" text-name-orange text-6xl font-bold font-glazkrak">
        <a href="/">INDÉNUM</a>
      </div>

        {/* Slogan */}
    
      <p className="text-white font-semibold container w-3/4 text-xs">Service de Réparation pour vos objets électroniques</p>

      {/* Navigation */}
      <nav className="w-full mt-2">
        <ul className="w-full h-8 flex justify-center items-center gap-3 bg-name-orange">
          <li>
            <a href="#home" className="text-white font-semibold hover:text-gray-300">Accueil</a>
          </li>
          <li>
            <a href="#about" className="text-white font-semibold hover:text-gray-300">Tarifs</a>
          </li>
          <li>
            <a href="#services" className="text-white font-semibold hover:text-gray-300">Annonces</a>
          </li>
          <li>
            <a href="#contact" className="text-white font-semibold hover:text-gray-300">Devis</a>
          </li>
          <li>
            <a href="#contact" className="text-white font-semibold hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
};

export default Header;
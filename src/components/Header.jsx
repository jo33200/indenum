import { Link } from 'react-router-dom';
import Logo from '../assets/img/Indenum.png';

const Header = () => {
  return (
    
    <header className="w-full h-auto bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] pt-5">
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Indenum" />
      </div>

        {/* Slogan */}
      <p className="text-white font-semibold container w-3/4 text-xs">Service de Réparation pour vos objets électroniques</p>

      {/* Navigation */}
      <nav className="w-full mt-2">
        <ul className="w-full h-10 flex justify-center items-center gap-3 bg-neutral-700">
          <li>
            <Link to="/" className="text-white font-semibold hover:text-gray-300">Accueil</Link>
          </li>
          <li>
            <Link to="/rates" className="text-white font-semibold hover:text-gray-300">Tarifs</Link>
          </li>
          <li>
            <Link to="/ad" className="text-white font-semibold hover:text-gray-300">Annonces</Link>
          </li>
          <li>
            <Link to="/quote" className="text-white font-semibold hover:text-gray-300">Devis</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white font-semibold hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
};

export default Header;
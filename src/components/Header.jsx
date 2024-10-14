import { Link } from 'react-router-dom';
import Logo from '../assets/img/Indenum.png';

const Header = () => {
  return (
    
    <header className="w-full h-auto bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] pt-5">
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Indenum" className='w-48 h-auto md:w-60 lg:w-72 xl:w-80' />
      </div>

        {/* Slogan */}
      <p className="text-white sm:text-sm md:text-base font-semibold container w-3/4 text-xs">Service de Réparation pour vos objets électroniques</p>

      {/* Navigation */}
      <nav className="w-full mt-2">
        <ul className="w-full h-10 text-sm sm:text-base md:text-lg flex justify-center items-center gap-3 sm:gap-6 lg:gap-14 bg-neutral-700">
          <li className='hover:scale-110 transition-transform duration-200'>
            <Link to="/" className="text-white font-semibold hover:text-gray-300 ">Accueil</Link>
          </li>
          <li className='hover:scale-110 transition-transform duration-200'>
            <Link to="/rates" className="text-white font-semibold hover:text-gray-300 hover:scale-110 transition-transform duration-200">Tarifs</Link>
          </li>
          <li className='hover:scale-110 transition-transform duration-200'>
            <Link to="/ad" className="text-white font-semibold hover:text-gray-300 hover:scale-110 transition-transform duration-200">Annonces</Link>
          </li>
          <li className='hover:scale-110 transition-transform duration-200'>
            <Link to="/quote" className="text-white font-semibold hover:text-gray-300 hover:scale-110 transition-transform duration-200">Devis</Link>
          </li>
          <li className='hover:scale-110 transition-transform duration-200'>
            <Link to="/contact" className="text-white font-semibold hover:text-gray-300 hover:scale-110 transition-transform duration-200">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
};

export default Header;
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Indenum.png";
import CleTournevis from "../assets/img/cléTournevis.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return `${
      location.pathname === path ? "scale-125" : ""
    } transition-transform duration-200 hover:scale-110 font-semibold text-white`;
  };

  return (
    <header className="h-auto w-full bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] pt-5">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {/* Logo */}
        <div className="flex h-auto w-full justify-around">
          <div className="hidden w-96 lg:flex lg:justify-center">
            <img src={CleTournevis} alt="Cle et Tournevis" className="h-auto w-12 md:w-16 lg:w-20 xl:w-24"/>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Logo} alt="Indenum" className="h-auto w-48 md:w-60 lg:w-72 xl:w-96"/>
            <p className="container w-full text-xs font-semibold text-white sm:text-sm md:text-base">
          Service de Réparation pour vos objets électroniques
        </p>
          </div>
          <ul className="hidden w-96 lg:flex flex-col justify-around items-end text-left text-base font-semibold text-white">
            <li>
              <a href="mailto:indenum@outlook.com" className="hover:cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                indenum@outlook.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2"/>
              07 66 44 13 37</li>
          </ul>
        </div>

        {/* Slogan */}
        

        {/* Navigation */}
        <nav className="mt-2 w-full">
          <ul className="flex w-full items-center justify-between bg-neutral-700 px-2 py-2 text-sm sm:text-base md:text-xl lg:justify-center lg:gap-14 xl:py-3 xl:text-2xl">
            <li className={getLinkClass("/")}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={getLinkClass("/rates")}>
              <Link to="/rates">Tarifs</Link>
            </li>
            <li className={getLinkClass("/ad")}>
              <Link to="/ad">Annonces</Link>
            </li>
            <li className={getLinkClass("/quote")}>
              <Link to="/quote">Devis</Link>
            </li>
            <li className={getLinkClass("/contact")}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

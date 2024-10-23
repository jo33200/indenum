import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Indenum.png";

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
        <div>
          <img
            src={Logo}
            alt="Indenum"
            className="h-auto w-48 md:w-60 lg:w-72 xl:w-80"
          />
        </div>

        {/* Slogan */}
        <p className="container w-3/4 text-xs font-semibold text-white sm:text-sm md:text-base">
          Service de Réparation pour vos objets électroniques
        </p>

        {/* Navigation */}
        <nav className="mt-2 w-full">
          <ul className="flex h-10 w-full px-2 items-center justify-between lg:justify-center bg-neutral-700 text-sm sm:text-base md:text-xl lg:gap-14">
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

import { faEnvelope, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/Indenum.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    return `${
      location.pathname === path ? "scale-125" : ""
    } transition-transform duration-200 hover:scale-110 font-semibold text-gray-500`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative h-auto w-full z-50 bg-white">
      <div className="header-border-gradient flex h-auto w-full flex-row items-center justify-between px-4 lg:px-10 py-2">
        <section className="flex h-full">
          <div className="flex items-center justify-center gap-2">
            <img src={Logo} alt="Indenum" className="h-auto w-52" />
          </div>
        </section>

        {/* Menu de navigation */}
        <section className="hidden md:flex">
          <nav className="mt-2 w-full">
            <ul className="flex w-full items-center justify-center md:gap-5 text-sm md:w-auto lg:gap-10 md:text-base">
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
              <li>
                <a
                  href="mailto:indenum@outlook.com"
                  className="text-gray-500 hover:cursor-pointer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
              </li>
            </ul>
          </nav>
        </section>

        {/* Icône de menu burger pour petits écrans */}
        <section className="flex md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </section>
      </div>

      {/* Menu burger pour petits écrans */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center bg-white py-4 md:hidden">
          <ul className="w-full text-center">
            <li className="py-2">
              <Link to="/" onClick={toggleMenu} className={getLinkClass("/")}>
                Accueil
              </Link>
            </li>
            <li className="py-2">
              <Link to="/rates" onClick={toggleMenu} className={getLinkClass("/rates")}>
                Tarifs
              </Link>
            </li>
            <li className="py-2">
              <Link to="/ad" onClick={toggleMenu} className={getLinkClass("/ad")}>
                Annonces
              </Link>
            </li>
            <li className="py-2">
              <Link to="/quote" onClick={toggleMenu} className={getLinkClass("/quote")}>
                Devis
              </Link>
            </li>
            <li className="py-2">
              <Link to="/contact" onClick={toggleMenu} className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
            <li className="py-2">
              <a
                href="mailto:indenum@outlook.com"
                className="text-gray-500 hover:cursor-pointer"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faEnvelope} className="" />
              </a>
            </li>
            <li className="py-2">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

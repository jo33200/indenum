import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Indenum.png";
import CleTournevis from "../assets/img/cléTournevis.png";

const Header = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return `${
      location.pathname === path ? "scale-125" : ""
    } transition-transform duration-200 hover:scale-110 font-semibold text-white`;
  };

  return (
    <header className="h-auto w-full">
      <div className="bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] w-full h-auto flex flex-row justify-between p-5">
        <section className="flex h-full">
          <div className="hidden lg:block lg:h-full lg:w-20 ">
            <img src={CleTournevis} alt="Cle et Tournevis" className="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="Indenum" className="h-auto w-48 md:w-60 lg:w-72"/>
            <p className="container w-full text-xs font-semibold text-name-orange sm:text-sm md:text-base">
              Service de Réparation pour vos objets électroniques
            </p>
          </div>
        </section>
        <section>
          <nav className="mt-2 w-full">
            <ul className="flex w-full lg:w-auto items-center justify-between px-2 py-2 text-sm sm:text-base md:text-xl lg:justify-center lg:gap-14 xl:py-3 xl:text-2xl">
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
        </section>
        <section className="h-full lg:flex flex-col justify-around gap-4 hidden">
            <ul className=" w-auto h-full flex flex-col items-start justify-around text-base font-semibold text-white">
              <li>
                <a
                  href="mailto:indenum@outlook.com"
                  className="hover:cursor-pointer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  indenum@outlook.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                07 66 44 13 37
              </li>
            </ul>
          </section>
         
      
          
          
         
        
      </div>
    </header>
  );
};

export default Header;

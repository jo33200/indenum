import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Indenum.png";

const Header = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return `${
      location.pathname === path ? "scale-125" : ""
    } transition-transform duration-200 hover:scale-110 font-semibold text-black`;
  };

  return (
    <header className="h-auto w-full header-border-gradient">
      <div className="flex h-auto w-full flex-row justify-between p-2">
        <section className="flex h-full">
          <div className="flex items-center justify-center gap-2">
            <img
              src={Logo}
              alt="Indenum"
              className="h-auto w-52"
            />
          </div>
        </section>
        <section>
          <nav className="mt-2 w-full">
            <ul className="flex w-full items-center justify-between px-2 py-2 text-sm sm:text-base lg:w-auto lg:justify-center lg:gap-10">
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
                className="hover:cursor-pointer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="" />
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="" />
            </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;

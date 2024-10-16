import { Link } from "react-router-dom";
import Logo from "../assets/img/Indenum.png";

const Header = () => {
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
          <ul className="flex h-10 w-full items-center justify-center gap-3 bg-neutral-700 text-sm sm:gap-6 sm:text-base md:text-lg lg:gap-14">
            <li className="transition-transform duration-200 hover:scale-110">
              <Link
                to="/"
                className="font-semibold text-white hover:text-gray-300"
              >
                Accueil
              </Link>
            </li>
            <li className="transition-transform duration-200 hover:scale-110">
              <Link
                to="/rates"
                className="font-semibold text-white transition-transform duration-200 hover:scale-110 hover:text-gray-300"
              >
                Tarifs
              </Link>
            </li>
            <li className="transition-transform duration-200 hover:scale-110">
              <Link
                to="/ad"
                className="font-semibold text-white transition-transform duration-200 hover:scale-110 hover:text-gray-300"
              >
                Annonces
              </Link>
            </li>
            <li className="transition-transform duration-200 hover:scale-110">
              <Link
                to="/quote"
                className="font-semibold text-white transition-transform duration-200 hover:scale-110 hover:text-gray-300"
              >
                Devis
              </Link>
            </li>
            <li className="transition-transform duration-200 hover:scale-110">
              <Link
                to="/contact"
                className="font-semibold text-white transition-transform duration-200 hover:scale-110 hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

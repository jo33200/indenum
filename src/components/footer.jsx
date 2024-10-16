import Logo from "../assets/img/Indenum.png";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-start justify-start gap-10 bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] px-1 py-5 text-white lg:flex-row">
      <div className="container w-36 text-left">
        <img className="bg-contain" src={Logo} alt="Indenum" />
      </div>
      <nav className="h-auto w-full">
        <ul className="flex flex-col items-start justify-start gap-1 text-left">
          <li className="font-bold">Services</li>
          <li>Réparation de téléphones toutes marques</li>
          <li>Réparation de tablettes toutes marques</li>
          <li>Réparation de consoles de jeux</li>
        </ul>
      </nav>
      <ContactInfo isFooter={true} />
      <nav className="w-full">
        <ul className="flex flex-col items-start justify-start gap-1 text-left">
          <li className="font-bold">Informations</li>
          <li>Mentions légales</li>
          <li>Conditions générales de vente</li>
          <li>Politique de confidentialité</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

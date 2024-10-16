import Logo from "../assets/img/Indenum.png";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-start justify-start sm:items-center gap-10 bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] px-2 py-5 text-white">
      <div className="container w-36 text-left">
        <img className="bg-contain" src={Logo} alt="Indenum" />
      </div>
      <section className="w-full sm:w-[300px] lg:w-[1024px] flex flex-col lg:flex-row lg:justify-around gap-10 lg:gap-0">
        <nav className="h-auto w-[300px]">
          <ul className="flex flex-col items-start justify-start gap-1 text-left">
            <li className="font-bold">Services</li>
            <li>Réparation de téléphones toutes marques</li>
            <li>Réparation de tablettes toutes marques</li>
            <li>Réparation de consoles de jeux</li>
          </ul>
        </nav>
         <ContactInfo isFooter={true} />        
        <nav className="h-auto w-[230px]">
          <ul className="flex flex-col items-start justify-start gap-1 text-left">
            <li className="font-bold">Informations</li>
            <li>Mentions légales</li>
            <li>Conditions générales de vente</li>
            <li>Politique de confidentialité</li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;

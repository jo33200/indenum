import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Atelier from "../../assets/img/atelier.jpg";
import Casse from "../../assets/img/casse.jpg";
import Contact from "../../assets/img/contact.jpg";
import Manette from "../../assets/img/manette.jpg";
import Pieces from "../../assets/img/pièces.jpg";
import Proximite from "../../assets/img/proximite.jpg";

const CardList = () => {
  // Tableau de données
  const cardData = [
    {
      title: "Notre Atelier",
      image: Atelier,
      subtitle: "Découvrir",
      link: "#atelier",
    },
    {
      title: "Besoin d'un devis rapide",
      image: Casse,
      subtitle: "En savoir plus",
      link: "/quote",
    },
    {
      title: "Service de proximité",
      image: Proximite,
      subtitle: "En savoir plus",
      link: "#proximite",
    },
    {
      title: "Nos Annonces en ligne",
      image: Manette,
      subtitle: "Voir catalogue",
      link: "/ad",
    },
    {
      title: "Service pièces détachées",
      image: Pieces,
      subtitle: "Voir catalogue",
      link: "/ad",
      filter: "pièces détachées",
    },
    {
      title: "Nous contacter",
      image: Contact,
      subtitle: "En savoir plus",
      link: "/contact",
    },
  ];

  // Composant Card
  const Card = ({ title, image, subtitle, link, filter }) => {
    const handleAnchorClick = (event) => {
      if (link.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(link);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    return (
      <div className="max-w-[280px] border bg-white shadow-lg">
        <div className="flex flex-col items-start gap-4 p-3">
          <h2 className="text-xl font-bold">{title}</h2>
          <Link to={link} onClick={handleAnchorClick} className="w-full">
            <div className="container w-full">
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
              />
            </div>
          </Link>
          <h3 className="text-sm font-bold text-gray-400">
            {filter ? (
              <Link to={`${link}?filter=${encodeURIComponent(filter)}`}>
                {subtitle}
              </Link>
            ) : link.startsWith("#") ? (
              <a href={link} onClick={handleAnchorClick}>
                {subtitle}
              </a>
            ) : (
              <Link to={link}>{subtitle}</Link>
            )}
          </h3>
        </div>
      </div>
    );
  };

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    filter: PropTypes.string,
  };

  // Retourne la liste des cartes
  return (
    <div className="flex justify-center">
      <div className="grid max-w-screen-lg grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            subtitle={card.subtitle}
            link={card.link}
            filter={card.filter}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;

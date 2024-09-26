import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Atelier from '../assets/img/atelier.jpg';
import Casse from '../assets/img/casse.jpg';
import Proximite from '../assets/img/proximite.jpg';
import Pieces from '../assets/img/pièces.jpg';
import Contact from '../assets/img/contact.jpg';

const CardList = () => {
  // Tableau de données
  const cardData = [
    {
      title: 'Notre Atelier',
      image: Atelier,
      subtitle: 'Découvrir',
      link : '/rates'
    },
    {
      title: "Besoin d'un devis rapide",
      image: Casse,
      subtitle: 'En savoir plus',
      link : '/quote'
    },
    {
      title: 'Service de proximité',
      image: Proximite,
      subtitle: 'En savoir plus',
      link : '/contact'
    },
    {
        title: 'Service pièces détachées',
        image: Pieces,
        subtitle: 'Voir catalogue',
        link : '/ad',
        filter: 'pièces détachées',
      },
      {
        title: 'Nous contacter',
        image: Contact,
        subtitle: 'En savoir plus',
        link : '/contact'
      },
  ];

  // Composant Card
  const Card = ({ title, image, subtitle, link, filter }) => {
    return (
      <div className="border shadow-lg  max-w-sm bg-white">
        <div className="p-3 flex flex-col items-start gap-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className='container w-56'>
                <img src={image} alt={title} className="w-full h-48 object-cover " />
            </div>
            <h3 className="text-sm font-bold text-gray-400">
            {filter ? (
            <Link
              to={{
                pathname: link,
                state: { openCategory: filter } // Ici, on passe le filtre "Pièces détachées"
              }}
            >
              {subtitle}
            </Link>
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
    <div>
      <div className="flex flex-col justify-center items-center gap-6 p-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} subtitle={card.subtitle} link={card.link} filter={card.filter} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

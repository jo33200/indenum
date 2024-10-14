import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Atelier from '../assets/img/atelier.jpg';
import Casse from '../assets/img/casse.jpg';
import Proximite from '../assets/img/proximite.jpg';
import Pieces from '../assets/img/pièces.jpg';
import Contact from '../assets/img/contact.jpg';
import Manette from '../assets/img/manette.jpg';

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
      title: 'Nos Annonces en ligne',
      image: Manette,
      subtitle: 'Voir catalogue',
      link : '/ad',
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
                <Link to={`${link}?filter=${encodeURIComponent(filter)}`}>{subtitle}</Link>
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
    <div className='flex justify-center'>
      <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pb-10 lg:pb-[60px]">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} subtitle={card.subtitle} link={card.link} filter={card.filter} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

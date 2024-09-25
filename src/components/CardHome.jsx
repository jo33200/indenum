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
    },
    {
      title: "Besoin d'un devis rapide",
      image: Casse,
      subtitle: 'En savoir plus',
    },
    {
      title: 'Service de proximité',
      image: Proximite,
      subtitle: 'En savoir plus',
    },
    {
        title: 'Service pièces détachées',
        image: Pieces,
        subtitle: 'Découvrir',
      },
      {
        title: 'Nous contacter',
        image: Contact,
        subtitle: 'En savoir plus',
      },
  ];

  // Composant Card
  const Card = ({ title, image, subtitle }) => {
    return (
      <div className="border shadow-lg p-4 max-w-sm bg-white">
        <div className="p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <img src={image} alt={title} className="w-full h-48 object-cover " />
            <h3 className="text-lg text-gray-500 mt-2">{subtitle}</h3>
        </div>
      </div>
    );
  };

  Card.propTypes = {
    title: PropTypes.string.isRequired, // title doit être une string et est requis
    image: PropTypes.string.isRequired, // image doit être une string et est requis
    subtitle: PropTypes.string.isRequired, // subtitle doit être une string et est requis
  };

  // Retourne la liste des cartes
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} subtitle={card.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

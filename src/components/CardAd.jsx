import PropTypes from "prop-types";

// Exemple de données statiques pour les annonces
const adsData = [
  {
    title: "Manette PS4 V1 officielle",
    description: "Manette 100% fonctionnelle.",
    price: "30€",
    image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/61/98/fe/6198fe89750f8d88a1c3b8273bdbde492d3b7a86.jpg?rule=classified-1200x800-webp",
    url: "https://www.leboncoin.fr/ad/consoles/2842841235", 
  },
  {
    title: "Batterie Joy-Con Nintendo Switch",
    description: "Batterie compatible Joy-Con Nintendo Switch / Switch Oled. Produit neuf",
    price: "10€",
    image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/a8/5a/1b/a85a1bc987565f613868c55c684a50d2e710c2b5.jpg?rule=classified-1200x800-webp",
    url: "https://www.leboncoin.fr/ad/consoles/2844352853",
  },
  {
    title: "Lecteur de Carte microSD Nintendo Switch",
    description: "Votre Nintendo Switch ne reconnait plus votre carte microSD, cette pièce règlera votre problème. Pièce neuve.",
    price: "10€",
    image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/08/a0/b9/08a0b9ffde443a48d3a512fc9a6f3f288031d01a.jpg?rule=classified-1200x800-webp",
    url: "https://www.leboncoin.fr/ad/consoles/2829367655",
  },
];

const CardAD = ({ title, description, price, image, url }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img className="w-full rounded-t-lg" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="font-semibold mt-2">{price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-name-orange hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Voir annonce
        </a>
      </div>
    </div>
  );
};

CardAD.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

// Composant qui affiche une liste d'annonces
const AdsList = ({ selectedFilters }) => {
    const filteredAds = adsData.filter(ad => {
      // Logique de filtrage basée sur les selectedFilters
      // Par exemple, vérifier si le titre ou la description contient un filtre
      return selectedFilters.length === 0 || selectedFilters.some(filter => 
        ad.title.includes(filter) || ad.description.includes(filter)
      );
    });
  
    return (
      <div className="container mx-auto flex justify-center flex-wrap gap-4">
        {filteredAds.map((ad, index) => (
          <CardAD
            key={index}
            title={ad.title}
            description={ad.description}
            price={ad.price}
            image={ad.image}
            url={ad.url}
          />
        ))}
      </div>
    );
  };

AdsList.propTypes = {
    selectedFilters: PropTypes.array.isRequired,
  };
  

export default AdsList;
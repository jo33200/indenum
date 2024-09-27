import PropTypes from "prop-types";

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

// Fonction pour extraire et convertir le prix depuis une chaîne comme "30€"
const extractPrice = (priceStr) => {
  return parseFloat(priceStr.replace('€', ''));
};

const ListAd = ({ adsData, selectedFilters }) => {
  const filterAds = (ads) => {
    return ads.filter((ad) => {
      let matchesPrice = true;
      let matchesCategory = true;

      // Filtrage sur le prix
      if (selectedFilters.includes("Moins de 10€")) {
        matchesPrice = extractPrice(ad.price) < 10;
      } else if (selectedFilters.includes("10€ à 30€")) {
        matchesPrice = extractPrice(ad.price) >= 10 && extractPrice(ad.price) <= 30;
      } else if (selectedFilters.includes("Plus de 30€")) {
        matchesPrice = extractPrice(ad.price) > 30;
      }

      // Vous pouvez ajouter d'autres conditions de filtrage, comme les catégories
      if (selectedFilters.includes("Manette")) {
        matchesCategory = ad.categories.some(category => category.subcategories.includes("Manette"));
      }

      return matchesPrice && matchesCategory;
    });
  };

  const filteredAds = filterAds(adsData);

  return (
    <div className="ads-list">
      {filteredAds.length > 0 ? (
        filteredAds.map((ad) => (
          <div key={ad.title} className="ad-card">
            <img src={ad.image} alt={ad.title} />
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p>{ad.price}</p>
          </div>
        ))
      ) : (
        <p>Aucune annonce ne correspond aux filtres sélectionnés.</p>
      )}
    </div>
  );
};

ListAd.propTypes = {
  adsData: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
  })).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListAd;

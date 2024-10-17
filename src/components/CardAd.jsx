import PropTypes from "prop-types";

const CardAD = ({ title, description, price, image, url }) => {
  return (
    <div className="flex w-40 h-80 max-w-sm flex-col items-center justify-between rounded border-solid bg-white pb-2 shadow-lg">
      <div className="h-40 w-full">
        <img className="object-fill w-full h-full rounded-t-lg" src={image} alt={title} />
      </div>
      <div className="md:px-6 md:py-4">
        <h3 className="md:mb-2 text-base md:text-xl font-bold line-clamp-1">{title}</h3>
        <p className="text-xs md:text-base text-gray-700 line-clamp-2">{description}</p>
        <p className="mt-2 font-semibold">{price}</p>
      </div>
      <div className="px:1 pb:0 pt:1 md:px-6 md:pb-2 md:pt-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-name-orange md:px-4 md:py-2 font-bold text-white text-xs hover:bg-blue-700"
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
  return parseFloat(priceStr.replace("€", ""));
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
        matchesPrice =
          extractPrice(ad.price) >= 10 && extractPrice(ad.price) <= 30;
      } else if (selectedFilters.includes("Plus de 30€")) {
        matchesPrice = extractPrice(ad.price) > 30;
      }

      // Vous pouvez ajouter d'autres conditions de filtrage, comme les catégories
      if (selectedFilters.includes("Manette")) {
        matchesCategory = ad.categories.some((category) =>
          category.subcategories.includes("Manette"),
        );
      }

      return matchesPrice && matchesCategory;
    });
  };

  const filteredAds = filterAds(adsData);

  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {" "}
      {/* Utilise un grid layout */}
      {filteredAds.length > 0 ? (
        filteredAds.map((ad) => (
          <CardAD
            key={ad.title}
            title={ad.title}
            description={ad.description}
            price={ad.price}
            image={ad.image}
            url={ad.url}
          />
        ))
      ) : (
        <p>Aucune annonce ne correspond aux filtres sélectionnés.</p>
      )}
    </div>
  );
};

ListAd.propTypes = {
  adsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListAd;

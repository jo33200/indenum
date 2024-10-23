import PropTypes from "prop-types";

const CardAD = ({ title, description, price, image, url }) => {
  return (
    <div className="flex h-80 w-full flex-col items-start justify-between rounded border-solid bg-white shadow-lg">
      <div className="h-40 w-full">
        <img
          className="h-full w-full rounded-t-lg object-fill"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col items-start justify-start px-2">
        <h3 className="line-clamp-1 text-left text-base font-bold lg:text-xl">
          {title}
        </h3>
        <p className="line-clamp-2 text-left text-xs text-gray-700 lg:text-base">
          {description}
        </p>
        <p className="font-semibold">{price}</p>
      </div>
      <div className="px-2 pb-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-name-orange px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
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
    <div className="w-full grid gap-5 sm:gap-3 grid-cols-2 justify-between sm:grid-cols-3 lg:gap-3 lg:w-7/12 xl:grid-cols-4 xl:w-7/12">
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

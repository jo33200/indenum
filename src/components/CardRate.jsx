import PropTypes from "prop-types";

const CardRate = ({ title, description, category, price, image }) => {

  const imagePath = `/src/assets/img/${image}.png`;

  return (
    <div className="flex h-80 w-full flex-col items-start justify-between rounded border border-gray-300 bg-white shadow-lg xl:h-auto xl:max-w-64 xl:gap-5 xl:pb-3">
      <div className="h-32 w-full flex justify-center items-center">
        <img src={imagePath} alt={title} className="h-2/3 w-2/3 object-fill" />
      </div>
      <div className="flex flex-col items-start justify-start px-2 xl:gap-2">
        <h3 className="line-clamp-1 text-left text-base font-bold lg:text-xl">{title}</h3>
        <p className="line-clamp-1 text-left text-xs text-gray-700 lg:text-base">{description}</p>
        <span className="text-sm text-gray-500">{category}</span>
        <p className="font-semibold text-sm md:text-base lg:text-lg">{price}€</p>
      </div>
    </div>
  );
};

CardRate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// Fonction pour extraire et convertir le prix depuis une chaîne comme "30€"
const extractPrice = (priceStr) => {
  return parseFloat(priceStr.replace("€", ""));
};

const ListRates = ({ ratesData, selectedFilters }) => {
  const filterRates = (rates) => {
    return rates.filter((rate) => {
      let matchesPrice = true;
      let matchesCategory = true;

      // Filtrage sur le prix
      if (selectedFilters.includes("Moins de 10€")) {
        matchesPrice = extractPrice(rate.price) < 10;
      } else if (selectedFilters.includes("10€ à 30€")) {
        matchesPrice =
          extractPrice(rate.price) >= 10 && extractPrice(rate.price) <= 30;
      } else if (selectedFilters.includes("Plus de 30€")) {
        matchesPrice = extractPrice(rate.price) > 30;
      }

      // Vous pouvez ajouter d'autres conditions de filtrage, comme les catégories
      if (selectedFilters.includes("Manette")) {
        matchesCategory = rate.categories.some((category) =>
          category.subcategories.includes("Manette"),
        );
      }

      return matchesPrice && matchesCategory;
    });
  };

  const filteredRates = filterRates(ratesData);

  return (
    <div className="grid w-full max-w-[1144px] grid-cols-2 justify-between gap-5 sm:grid-cols-3 sm:gap-3 lg:w-7/12 lg:gap-3 xl:w-auto xl:grid-cols-4 xl:gap-10">
      {" "}
      {/* Utilise un grid layout */}
      {filteredRates.length > 0 ? (
        filteredRates.map((rate) => (
          <CardRate
            key={rate.title}
            title={rate.title}
            category={rate.category}
            description={rate.description}
            price={rate.price}
            image={rate.image}
          />
        ))
      ) : (
        <p className="w-[256px]">Aucune résultat dans la recherche.</p>
      )}
    </div>
  );
};

ListRates.propTypes = {
  ratesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListRates;

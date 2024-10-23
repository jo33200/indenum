import PropTypes from "prop-types";

const CardRate = ({ title, description, category, price }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <span className="text-sm text-gray-500">{category}</span>
      <p className="text-sm text-gray-900">{price}€</p>
    </div>
  );
};

CardRate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
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
    <div className="grid w-full grid-cols-2 justify-between gap-5 sm:grid-cols-3 sm:gap-3 lg:w-7/12 lg:gap-3 xl:w-auto xl:grid-cols-4 xl:gap-10">
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
            url={rate.url}
          />
        ))
      ) : (
        <p>Aucune annonce ne correspond aux filtres sélectionnés.</p>
      )}
    </div>
  );
};

ListRates.propTypes = {
  ratesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListRates;

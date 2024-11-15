import PropTypes from "prop-types";
import CardRate from "./CardRate";

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
    <div className="item-center grid w-full max-w-[1144px] grid-cols-2 justify-center gap-5 sm:grid-cols-3 sm:justify-between sm:gap-3 lg:w-7/12 lg:gap-3 xl:w-auto xl:grid-cols-4 xl:gap-10">
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

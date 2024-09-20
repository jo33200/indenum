import { useState } from "react";
import Filters from "../../components/filters";
import Card from "../../components/CardRates";

// Exemple de données de cartes
const cardData = [
  { title: "iPhone 13", description: "Smartphone", category: "iPhone" },
  { title: "Galaxy S21", description: "Smartphone", category: "Samsung" },
  { title: "Xbox Series X", description: "Console", category: "Xbox série X" },
  { title: "Playstation 5", description: "Console", category: "Playstation 5" },
];

// Exemple de données de filtres
const filterData = [
  {
    category: "Téléphonie",
    subcategories: ["iPhone", "Samsung", "Xiaomi"],
  },
  {
    category: "Tablette",
    subcategories: ["Apple", "Samsung"],
  },
  {
    category: "Console",
    subcategories: [
      {
        subcategory: "Microsoft",
        subSubcategories: ["Xbox série X", "Xbox série S", "Xbox one X", "Xbox one S", "Xbox one", "Accessoires"],
      },
      {
        subcategory: "Nintendo",
        subSubcategories: ["Switch", "Accessoires"],
      },
      {
        subcategory: "Sony",
        subSubcategories: ["Playstation 5", "Playstation 4", "Playstation 3", "Playstation 2", "Accessoires"],
      },
    ],
  },
];

const CardFilterPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openCategories, setOpenCategories] = useState({}); // État des catégories ouvertes

  // Gère la sélection des filtres
  const handleFilterChange = (subcategory) => {
    if (selectedFilters.includes(subcategory)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== subcategory));
    } else {
      setSelectedFilters([...selectedFilters, subcategory]);
    }
  };

  // Gère l'affichage des sous-catégories
  const toggleCategory = (category) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [category]: !prevOpenCategories[category],
    }));
  };

  const filteredCards = cardData.filter((card) =>
    selectedFilters.length > 0 ? selectedFilters.includes(card.category) : true
  );

  return (
    <div className="container mx-auto p-4 flex flex-col items-center gap-5">
      {/* Conteneur des filtres, aligné à gauche avec Flexbox */}
      <div className="w-72 p-4 bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-4">Notre catalogue</h2>

        {/* Parcourir les catégories de filtres */}
        {filterData.map((filter) => (
          <div key={filter.category} className="mb-4">
            {/* Titre de la catégorie */}
            <div
              className="cursor-pointer flex justify-between items-center bg-gray-200 p-2 rounded-md"
              onClick={() => toggleCategory(filter.category)}
            >
              <span className="font-semibold text-blue-500">{filter.category}</span>
              <span className="text-xl">
                {openCategories[filter.category] ? "−" : "+"}
              </span>
            </div>

            {/* Affichage des sous-catégories si la catégorie est ouverte */}
            {openCategories[filter.category] && (
              <div className="ml-4 mt-2">
                {filter.category === "Console" ? (
                  filter.subcategories.map((subcat) => (
                    <div key={subcat.subcategory} className="mb-2">
                      <div
                        className="font-semibold text-gray-700 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleCategory(subcat.subcategory)}
                      >
                        {subcat.subcategory}
                        <span className="text-lg">
                          {openCategories[subcat.subcategory] ? "−" : "+"}
                        </span>
                      </div>

                      {openCategories[subcat.subcategory] && (
                        <div className="ml-4 mt-1">
                          {subcat.subSubcategories.map((subSubcat) => (
                            <div key={subSubcat} className="mt-1">
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  value={subSubcat}
                                  checked={selectedFilters.includes(subSubcat)}
                                  onChange={(e) => handleFilterChange(e.target.value)}
                                  className="form-checkbox"
                                />
                                <span className="ml-2">{subSubcat}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  filter.subcategories.map((subcategory) => (
                    <div key={subcategory} className="ml-4 mb-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          value={subcategory}
                          checked={selectedFilters.includes(subcategory)}
                          onChange={(e) => handleFilterChange(e.target.value)}
                          className="form-checkbox"
                        />
                        <span className="ml-2">{subcategory}</span>
                      </label>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Conteneur des cartes filtrées */}
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} category={card.category} />
          ))
        ) : (
          <p>Aucune carte ne correspond aux filtres sélectionnés.</p>
        )}
      </div>
    </div>
  );
};

export default CardFilterPage;

import { useState } from "react";
import Card from "../../components/CardRates";
import ScrollToTopButton from "../../components/ScrollToTopButton";

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
        subSubcategories: [
          "Xbox série X",
          "Xbox série S",
          "Xbox one X",
          "Xbox one S",
          "Xbox one",
          "Accessoires",
        ],
      },
      {
        subcategory: "Nintendo",
        subSubcategories: ["Switch", "Accessoires"],
      },
      {
        subcategory: "Sony",
        subSubcategories: [
          "Playstation 5",
          "Playstation 4",
          "Playstation 3",
          "Playstation 2",
          "Accessoires",
        ],
      },
    ],
  },
];

const CardFilterPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openCategories, setOpenCategories] = useState({});

  const handleFilterChange = (subcategory) => {
    if (selectedFilters.includes(subcategory)) {
      setSelectedFilters(
        selectedFilters.filter((item) => item !== subcategory),
      );
    } else {
      setSelectedFilters([...selectedFilters, subcategory]);
    }
  };

  const toggleCategory = (category) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [category]: !prevOpenCategories[category],
    }));
  };

  const filteredCards = cardData.filter(
    (card) =>
      selectedFilters.length === 0 || selectedFilters.includes(card.category),
  );

  return (
    <div className="md:gap-auto mx-auto flex flex-col items-center gap-5 p-4 md:mx-0 md:flex-row md:items-start md:justify-center">
      <div className="w-72 rounded-lg bg-gray-100 p-2 shadow-md">
        {filterData.map((filter) => (
          <div key={filter.category} className="mb-1">
            <div
              className="flex cursor-pointer items-center justify-between rounded-md bg-gray-200 p-2"
              onClick={() => toggleCategory(filter.category)}
            >
              <span className="font-semibold">{filter.category}</span>
              <span className="text-xl">
                {openCategories[filter.category] ? "−" : "+"}
              </span>
            </div>
            {openCategories[filter.category] && (
              <div className="ml-4 mt-2">
                {filter.category === "Console"
                  ? filter.subcategories.map((subcat) => (
                      <div key={subcat.subcategory} className="mb-2">
                        <div
                          className="flex cursor-pointer items-center justify-between font-semibold text-gray-700"
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
                              <div
                                key={subSubcat}
                                className="mt-1 flex items-center"
                              >
                                <label className="inline-flex items-center">
                                  <input
                                    type="checkbox"
                                    value={subSubcat}
                                    checked={selectedFilters.includes(
                                      subSubcat,
                                    )}
                                    onChange={(e) =>
                                      handleFilterChange(e.target.value)
                                    }
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
                  : filter.subcategories.map((subcategory) => (
                      <div key={subcategory} className="mb-2 ml-4 flex">
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
                    ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid w-3/4 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => <Card key={index} {...card} />)
        ) : (
          <p>Aucune carte ne correspond aux filtres sélectionnés.</p>
        )}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default CardFilterPage;

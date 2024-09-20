import { useState } from "react";
import Filters from "../../components/filters";
import Card from "../../components/CardRates";

const cardData = [
  { title: "iPhone 13", description: "Smartphone", category: "iPhone" },
  { title: "Galaxy S21", description: "Smartphone", category: "Samsung" },
  { title: "Xbox Series X", description: "Console", category: "Xbox série X" },
  { title: "Playstation 5", description: "Console", category: "Playstation 5" },
  // Ajoute plus de cartes ici...
];

const filterData = [
  {
    category: "Téléphonie",
    subcategories: ["iPhone", "Samsung", "Xiaomi"]
  },
  {
    category: "Tablette",
    subcategories: ["Apple", "Samsung"]
  },
  {
    category: "Console",
    subcategories: [
      {
        subcategory: "Microsoft",
        subSubcategories: ["Xbox série X", "Xbox série S", "Xbox one X", "Xbox one S", "Xbox one", "Accessoires"]
      },
      {
        subcategory: "Nintendo",
        subSubcategories: ["Switch", "Accessoires"]
      },
      {
        subcategory: "Sony",
        subSubcategories: ["Playstation 5", "Playstation 4", "Playstation 3", "Playstation 2", "Accessoires"]
      }
    ]
  }
];

const CardFilterPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (subcategory) => {
    if (selectedFilters.includes(subcategory)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== subcategory));
    } else {
      setSelectedFilters([...selectedFilters, subcategory]);
    }
  };

  const filteredCards = cardData.filter((card) =>
    selectedFilters.length > 0 ? selectedFilters.includes(card.category) : true
  );

  return (
    <div className="container mx-auto px-4">
      {/* Filtres avec sous-catégories */}
      <Filters
        filterData={filterData}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />

      {/* Affichage des cartes filtrées */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
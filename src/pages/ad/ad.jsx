import ListAd from '../../components/CardAd';
import Filters from '../../components/filters';
import { useState } from 'react';

const Ad = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  // Exemple de données de filtres
  const filterData = [
    {
      category: "Type d'annonce",
      subcategories: ["Manette", "Batterie", "Accessoire"],
    },
    {
      category: "Prix",
      subcategories: ["Moins de 10€", "10€ à 30€", "Plus de 30€"],
    },
    {
      category: "Marque",
      subcategories: ["Apple", "Samsung", "Microsoft", "Sony", "Nintendo"],
    },
    {
      category: "Pièces détachées",
      subcategories: ["Ecran", "Batterie", "Connecteur de charge", "Vitre arrière", "autres"],
    }
  ];

  const handleFilterChange = (subcategory) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(subcategory)
        ? prevFilters.filter(item => item !== subcategory)
        : [...prevFilters, subcategory]
    );
  };

  // Ici, on va initialiser le filtre ouvert par défaut
  const openCategory = "Pièces détachées"; // Définit la catégorie à ouvrir

  return (
    <div className='container mx-auto p-4 flex flex-col items-center gap-5'>
      <div className='w-72 p-2'>
        <Filters
          filterData={filterData} 
          selectedFilters={selectedFilters} 
          onFilterChange={handleFilterChange} 
          openCategory={openCategory}  // Passer la catégorie à ouvrir
        />
      </div>
      <ListAd selectedFilters={selectedFilters} />
    </div>
  );
};

export default Ad;

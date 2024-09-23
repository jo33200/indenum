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
  ];

  const handleFilterChange = (subcategory) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(subcategory)
        ? prevFilters.filter(item => item !== subcategory)
        : [...prevFilters, subcategory]
    );
  };

  return (
    <div className='container mx-auto p-4 flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-bold text-center'>Nos annonces</h1>
      <div className='w-72 p-2'>
        <Filters
          filterData={filterData} 
          selectedFilters={selectedFilters} 
          onFilterChange={handleFilterChange} 
        />
        </div>
        <ListAd selectedFilters={selectedFilters} />
      
    </div>
  );
};

export default Ad;
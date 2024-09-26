import ListAd from '../../components/CardAd';
import Filters from '../../components/filters';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Ad = () => {
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openCategory, setOpenCategory] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0); // Remonter en haut de la page à chaque changement de route
    if (location.state && location.state.openCategory) {
      setOpenCategory(location.state.openCategory); // Ouvre "Pièces détachées" si c'est demandé
    } else {
      setOpenCategory(""); // Sinon, n'ouvre aucune catégorie par défaut
    }
  }, [location.state]);
  
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

  return (
    <div className='container mx-auto p-4 flex flex-col items-center gap-5'>
      <div className='w-72 p-2'>
        <Filters
          filterData={filterData} 
          selectedFilters={selectedFilters} 
          onFilterChange={handleFilterChange} 
          openCategory={openCategory}  // Passer la catégorie à ouvrir
          setOpenCategory={setOpenCategory} // Fonction pour changer la catégorie ouverte
        />
      </div>
      <ListAd selectedFilters={selectedFilters} />
    </div>
  );
};

export default Ad;

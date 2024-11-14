import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListAd from "../../components/pages/ListAd.jsx";
import Filters from "../../components/common/filters";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton.jsx";
import adsDataJson from "../../data/ad.json";

const Ad = () => {
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openCategory, setOpenCategory] = useState("");
  const [adsData, setAdsData] = useState([]); // État pour stocker les annonces
  const [loading, setLoading] = useState(true); // Pour gérer l'état de chargement
  const [error] = useState(null); // Pour gérer les erreurs

  // Récupération des paramètres de l'URL et filtrage
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get("filter");
    console.log("Current URL filter:", filter); // Vérification du filtre récupéré dans l'URL
    window.scrollTo(0, 0); // Remonter en haut de la page

    if (filter) {
      setOpenCategory(filter); // Ouvre la catégorie correspondant au filtre récupéré
    } else {
      setOpenCategory(""); // Si aucun filtre, n'ouvre aucune catégorie par défaut
    }
  }, [location]);

  // Chargement des données des annonces
  useEffect(() => {
    setAdsData(adsDataJson); // Charge les annonces depuis le fichier JSON
    setLoading(false); // Arrête le chargement une fois les données récupérées
  }, []);

  // Données de filtrage
  const filterData = [
    {
      category: "Téléphone",
      subcategories: ["Apple", "Samsung", "Xiaomi", "Huawei", "Oppo"],
    },
    {
      category: "Tablette",
      subcategories: ["Apple", "Samsung", "Huawei", "Lenovo", "Microsoft"],
    },
    {
      category: "Console",
      subcategories: ["Microsoft", "Sony", "Nintendo"],
    },
  ];

  // Gestion des filtres
  const handleFilterChange = (subcategory) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(subcategory)
        ? prevFilters.filter((item) => item !== subcategory)
        : [...prevFilters, subcategory],
    );
  };

  const handleCategoryChange = (category) => {
    setOpenCategory(category);
  };

  const filteredAds = adsData.filter((ad) => {
    if (selectedFilters.length === 0) {
      return true; // Si aucun filtre sélectionné, afficher toutes les annonces
    }
    // Vérifier si une des sous-catégories de l'annonce correspond à un filtre sélectionné
    return (
      selectedFilters.includes(ad.category) ||
      selectedFilters.includes(ad.subcategories)
    );
  });

  // Affichage pendant le chargement
  if (loading) {
    return <div>Chargement des annonces...</div>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="my-5 flex h-auto w-full flex-col items-start gap-5 px-2 sm:w-full md:flex-row md:items-start md:justify-around xl:my-32">
      <div className="w-full md:w-80">
        <Filters
          filterData={filterData}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          openCategory={openCategory} // Passer la catégorie à ouvrir
          onCategoryChange={handleCategoryChange} // Fonction pour changer la catégorie ouverte
        />
      </div>
      <ListAd adsData={filteredAds} selectedFilters={selectedFilters} />{" "}
      {/* Passer les annonces ici */}
      <ScrollToTopButton />
    </div>
  );
};

export default Ad;

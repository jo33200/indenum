import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListAd from "../../components/CardAd";
import Filters from "../../components/filters";
import ScrollToTopButton from "../../components/ScrollToTopButton.jsx";
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
      subcategories: [
        "Ecran",
        "Batterie",
        "Connecteur de charge",
        "Vitre arrière",
        "autres",
      ],
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

  // Affichage pendant le chargement
  if (loading) {
    return <div>Chargement des annonces...</div>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="my-5 flex w-full flex-col items-start gap-5 px-2 sm:w-full md:flex-row md:items-start md:justify-around">
      <div className="w-full md:w-80">
        <Filters
          filterData={filterData}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          openCategory={openCategory} // Passer la catégorie à ouvrir
          setOpenCategory={setOpenCategory} // Fonction pour changer la catégorie ouverte
        />
      </div>
      <ListAd adsData={adsData} selectedFilters={selectedFilters} />{" "}
      {/* Passer les annonces ici */}
      <ScrollToTopButton />
    </div>
  );
};

export default Ad;

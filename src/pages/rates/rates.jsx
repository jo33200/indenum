import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Filters from "../../components/filters";
import RatesData from "../../data/rate.json";
import ListRates from "../../components/CardRate";

const Rate = () => {
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openCategory, setOpenCategory] = useState("");
  const [ratesData, setRatesData] = useState([]);
  const [loading, setLoading] = useState(true); // Pour gérer l'état de chargement
  const [error] = useState(null); // Pour gérer les erreurs

  // Charger les données depuis le fichier JSON
  useEffect(() => {
    setRatesData(RatesData); // Charger les données des cartes depuis le fichier JSON
    setLoading(false); // Arrêter le chargement une fois les données récupérées
  }, []);

  // Gestion des filtres via URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get("filter");
    window.scrollTo(0, 0); // Remonter en haut de la page
    if (filter) {
      setOpenCategory(filter); // Ouvre la catégorie correspondant au filtre récupéré
    } else {
      setOpenCategory(""); // Si aucun filtre, n'ouvre aucune catégorie par défaut
    }
  }, [location]);

  // Chargement des données des annonces
  useEffect(() => {
    setRatesData(ratesData); // Charge les annonces depuis le fichier JSON
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

  

  // Gérer l'ajout/suppression des filtres sélectionnés
  const handleFilterChange = (subcategory) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(subcategory)
        ? prevFilters.filter((item) => item !== subcategory)
        : [...prevFilters, subcategory]
    );
  };

  // Affichage pendant le chargement
  if (loading) {
    return <div>Chargement des données...</div>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="my-5 flex h-auto w-full flex-col items-start gap-5 px-2 sm:w-full md:flex-row md:items-start md:justify-around xl:my-32">
      {/* Filtres */}
      <div className="w-full md:w-80">
        <Filters
          filterData={filterData} // Récupérer les filtres depuis le JSON
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          openCategory={openCategory} // Passer la catégorie ouverte
          setOpenCategory={setOpenCategory} // Gérer l'ouverture de la catégorie
        />
      </div>

      <ListRates ratesData={ratesData} selectedFilters={selectedFilters} />{" "}
      {/* Passer les annonces ici */}
      <ScrollToTopButton />
    </div>
  );
};

export default Rate;
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListRates from "../../components/CardRate";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Filters from "../../components/filters";
import RatesData from "../../data/rate.json";

const Rate = () => {
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openCategory, setOpenCategory] = useState("");
  const [ratesData, setRatesData] = useState([]);
  const [loading, setLoading] = useState(true); // Pour gérer l'état de chargement
  const [error] = useState(null); // Pour gérer les erreurs

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

  // Charger les données depuis le fichier JSON
  useEffect(() => {
    setRatesData(RatesData); // Charger les données des cartes depuis le fichier JSON
    setLoading(false); // Arrêter le chargement une fois les données récupérées
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
      subsubcategories: ["PS4", "PS5", "Xbox One", "Xbox Series X", "Switch", "Switch Lite"],
    },
  ];

  // Gérer l'ajout/suppression des filtres sélectionnés
  const handleFilterChange = (subcategory) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(subcategory)
        ? prevFilters.filter((item) => item !== subcategory)
        : [...prevFilters, subcategory],
    );
  };

  // Filtrer les données en fonction des filtres sélectionnés
  const filteredRates = ratesData.filter((rate) => {
    // Si aucun filtre sélectionné, on affiche tout
    if (selectedFilters.length === 0) {
      return true;
    }
    // Sinon, on vérifie si l'annonce correspond à l'un des filtres sélectionnés
    return (
      selectedFilters.includes(rate.category) ||
      selectedFilters.includes(rate.subcategory)
    );
  });

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
          filterData={filterData}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          openCategory={openCategory} // Passer la catégorie ouverte
          setOpenCategory={setOpenCategory} // Gérer l'ouverture de la catégorie
        />
      </div>
      <ListRates ratesData={filteredRates} selectedFilters={selectedFilters} />{" "}
      {/* Passer les annonces ici */}
      <ScrollToTopButton />
    </div>
  );
};

export default Rate;

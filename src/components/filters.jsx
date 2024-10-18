import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Filters = ({
  filterData,
  selectedFilters,
  onFilterChange,
  openCategory,
  setOpenCategory,
}) => {
  const [openCategories, setOpenCategories] = useState({});
  const [showAllFilters, setShowAllFilters] = useState(false);

  useEffect(() => {
    if (openCategory) {
      console.log("Open category in useEffect:", openCategory);

      setOpenCategories((prev) => {
        const updatedCategories = {
          ...prev,
          [openCategory]: true, // Ouvre la catégorie passée en prop
        };
        console.log("Updated openCategories:", updatedCategories);
        return updatedCategories;
      });
    }
  }, [openCategory]);

  const toggleCategory = (category) => {
    setOpenCategories((prev) => {
      const newOpenState = !prev[category]; // Nouvelle logique pour savoir si la catégorie sera ouverte ou fermée
      setOpenCategory(newOpenState ? category : ""); // Met à jour la catégorie ouverte dans le parent
      return {
        ...prev,
        [category]: newOpenState, // Ouvre ou ferme la catégorie
      };
    });
  };

  return (
    <div className="flex w-full sm:justify-around sm:bg-gray-100 md:flex-col md:justify-between md:rounded-md md:p-4 md:shadow-md">
      {/* Affichage du bouton "Filtres" pour les petits écrans */}
      <div className="w-1/2 sm:hidden">
        <div
          className="flex cursor-pointer items-center justify-between bg-gray-200 rounded-t p-2"
          onClick={() => setShowAllFilters(!showAllFilters)} // Ouvrir/fermer tous les filtres
        >
          <h3 className="text-lg font-bold">Filtres</h3>
          <span className="text-2xl font-bold text-gray-700">
            {showAllFilters ? "-" : "+"} {/* Icone pour ouvrir/fermer */}
          </span>
        </div>

        {/* Afficher toutes les catégories lorsque "Filtres" est ouvert */}
        {showAllFilters && (
          <div className="">
            {filterData.map((filter) => (
              <div key={filter.category} className="">
                <div
                  className="flex cursor-pointer items-center justify-between gap-1 bg-gray-100 p-2"
                  onClick={() => toggleCategory(filter.category)}
                >
                  <h3 className="text-sm font-bold">{filter.category}</h3>
                  <span className="text-xl text-gray-500">
                    {openCategories[filter.category] ? "-" : "+"}
                  </span>
                </div>
                {openCategories[filter.category] && (
                  <div className="text-left">
                    {filter.subcategories.map((subcategory) => (
                      <div key={subcategory} className="ml-4 mt-2">
                        <label className="inline-flex items-start">
                          <input
                            type="checkbox"
                            value={subcategory}
                            checked={selectedFilters.includes(subcategory)}
                            onChange={(e) => onFilterChange(e.target.value)}
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
        )}
      </div>

      {/* Affichage des catégories pour les écrans plus grands */}
      <div className="hidden sm:block">
        {filterData.map((filter) => (
          <div key={filter.category} className="mb-2">
            <div
              className="flex cursor-pointer items-center justify-between gap-1 rounded bg-gray-200 p-2"
              onClick={() => toggleCategory(filter.category)}
            >
              <h3 className="text-lg font-bold">{filter.category}</h3>
              <span className="text-xl">
                {openCategories[filter.category] ? "−" : "+"}
              </span>
            </div>
            {openCategories[filter.category] && (
              <div className="ml-4 mt-2">
                {filter.subcategories.map((subcategory) => (
                  <div key={subcategory} className="ml-4 mt-2">
                    <label className="inline-flex items-start">
                      <input
                        type="checkbox"
                        value={subcategory}
                        checked={selectedFilters.includes(subcategory)}
                        onChange={(e) => onFilterChange(e.target.value)}
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
    </div>
  );
};

Filters.propTypes = {
  filterData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      subcategories: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
          PropTypes.shape({
            subcategory: PropTypes.string.isRequired,
            subSubcategories: PropTypes.arrayOf(PropTypes.string),
          }),
        ),
      ]).isRequired,
    }).isRequired,
  ).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  openCategory: PropTypes.string,
  setOpenCategory: PropTypes.func, // Correction ici pour utiliser setOpenCategory
};

export default Filters;

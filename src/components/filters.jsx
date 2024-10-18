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
    <div className="flex w-full md:border-solid md:border-[0.5px] md:border-zinc-200 md:flex-col md:justify-between md:rounded-md md:p-4 ">
      {/* Affichage du bouton "Filtres" pour les petits écrans */}
      <div className="w-[250px] sm:1/5 md:hidden">
        <div
          className="flex cursor-pointer items-center justify-between border-solid border-[1px] border-zinc-200 rounded-t p-2"
          onClick={() => setShowAllFilters(!showAllFilters)} // Ouvrir/fermer tous les filtres
        >
          <h3 className="text-lg font-bold">Filtres</h3>
          <span className="text-2xl font-bold text-gray-700">
            {showAllFilters ? "-" : "+"} {/* Icone pour ouvrir/fermer */}
          </span>
        </div>

        {/* Afficher toutes les catégories lorsque "Filtres" est ouvert */}
        {showAllFilters && (
          <div className="border-solid border-[0.5px] border-zinc-100">
            {filterData.map((filter) => (
              <div key={filter.category} className="">
                <div
                  className="flex cursor-pointer items-center justify-between border-solid border-[0.5px] border-zinc-200 p-2"
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
      <div className="hidden md:block">
        {filterData.map((filter) => (
          <div key={filter.category} className="mb-2">
            <div
              className="flex cursor-pointer items-center justify-between gap-1 rounded bg-white p-2 md:border-solid md:border-[0.5px] md:border-zinc-200"
              onClick={() => toggleCategory(filter.category)}
            >
              <h3 className="text-base font-bold text-gray-600">{filter.category}</h3>
              <span className="text-base font-semibold text-gray-600">
                {openCategories[filter.category] ? "−" : "+"}
              </span>
            </div>
            {openCategories[filter.category] && (
              <div className="ml-4 mt-2">
                {filter.subcategories.map((subcategory) => (
                  <div key={subcategory} className="text-left">
                    <label className="inline-flex items-center">
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

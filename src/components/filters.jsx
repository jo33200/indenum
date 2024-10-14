import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Filters = ({ filterData, selectedFilters, onFilterChange, openCategory, setOpenCategory }) => {
  const [openCategories, setOpenCategories] = useState({});

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
    <div className="w-auto md:w-60 mb-4 flex flex-col w-full bg-gray-100 p-4 rounded-md shadow-md">
      {filterData.map((filter) => (
        <div key={filter.category} className="mb-2">
          <div
            className="flex justify-between items-center bg-gray-200 p-2 rounded cursor-pointer"
            onClick={() => toggleCategory(filter.category)}
          >
            <h3 className="text-lg font-bold">{filter.category}</h3>
            <span className="text-xl">
              {openCategories[filter.category] ? "−" : "+"}
            </span>
          </div>

          {openCategories[filter.category] && (
            <div className="ml-4 mt-2">
              {filter.category === "Console" ? (
                filter.subcategories.map((subcat) => (
                  <div key={subcat.subcategory} className="ml-4 bg-gray-100">
                    <h4 className="text-md font-semibold">{subcat.subcategory}</h4>
                    {subcat.subSubcategories.map((subSubcat) => (
                      <div key={subSubcat} className="mt-2 ml-6">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            value={subSubcat}
                            checked={selectedFilters.includes(subSubcat)}
                            onChange={(e) => onFilterChange(e.target.value)}
                            className="form-checkbox"
                          />
                          <span className="ml-2">{subSubcat}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                filter.subcategories.map((subcategory) => (
                  <div key={subcategory} className="mt-2 ml-4">
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
                ))
              )}
            </div>
          )}
        </div>
      ))}
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
          })
        ),
      ]).isRequired,
    }).isRequired
  ).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  openCategory: PropTypes.string,
  setOpenCategory: PropTypes.func, // Correction ici pour utiliser setOpenCategory
};

export default Filters;
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Filters = ({
  filterData,
  selectedFilters,
  onFilterChange,
  openCategory,
  setOpenCategory,
}) => {
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
    <div className="mb-4 flex w-full justify-around bg-gray-100 p-1 sm:flex-col sm:justify-between sm:rounded-md sm:p-4 sm:shadow-md">
      {filterData.map((filter) => (
        <div key={filter.category} className="mb-2">
          <div
            className="flex cursor-pointer items-center justify-between gap-1 rounded sm:bg-gray-200 sm:p-2"
            onClick={() => toggleCategory(filter.category)}
          >
            <h3 className="text-lg font-bold">{filter.category}</h3>
            <span className="text-xl">
              <span className="block text-xs sm:hidden">
                {openCategories[filter.category] ? "▲" : "▼"}
              </span>
              <span className="hidden sm:block">
                {openCategories[filter.category] ? "−" : "+"}
              </span>
            </span>
          </div>

          {openCategories[filter.category] && (
            <div className="text-left">
              {filter.category === "Console"
                ? filter.subcategories.map((subcat) => (
                    <div key={subcat.subcategory} className="ml-4 bg-gray-100">
                      <h4 className="text-md font-semibold">
                        {subcat.subcategory}
                      </h4>
                      {subcat.subSubcategories.map((subSubcat) => (
                        <div key={subSubcat} className="ml-6 mt-2">
                          <label className="inline-flex items-start">
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
                : filter.subcategories.map((subcategory) => (
                    <div key={subcategory} className="ml-4 mt-2">
                      <label className="inline-flex items-center justify-start">
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

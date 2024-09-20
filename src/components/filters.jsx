import PropTypes from "prop-types";

const Filters = ({ filterData, selectedFilters, onFilterChange }) => {
    return (
      <div className="mb-4">
        {filterData.map((filter) => (
          <div key={filter.category}>
            <h3 className="text-lg font-bold">{filter.category}</h3>
  
            {/* Si le filtre a des sous-catégories à plusieurs niveaux */}
            {filter.category === "Console" ? (
              filter.subcategories.map((subcat) => (
                <div key={subcat.subcategory} className="ml-4">
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
                      value={subcategory.subcategory}
                      checked={selectedFilters.includes(subcategory.subcategory)}
                      onChange={(e) => onFilterChange(e.target.value)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{subcategory.subcategory}</span>
                  </label>
                </div>
              ))
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
        subcategories: PropTypes.arrayOf(
          PropTypes.shape({
            subcategory: PropTypes.string.isRequired,
            subSubcategories: PropTypes.arrayOf(PropTypes.string).isRequired,
          }).isRequired
        ),
      }).isRequired
    ).isRequired,
    selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };
  
  export default Filters;
  
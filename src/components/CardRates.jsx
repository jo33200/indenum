import PropTypes from "prop-types";

const Card = ({ title, description, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <span className="text-sm text-gray-500">{category}</span>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

export default Card;

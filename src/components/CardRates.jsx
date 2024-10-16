import PropTypes from "prop-types";

const Card = ({ title, description, category, price }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <span className="text-sm text-gray-500">{category}</span>
      <p className="text-sm text-gray-900">{price}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;

import PropTypes from "prop-types";

const CardAdHome = ({ ad }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <img src={ad.image} alt={ad.title} className="h-auto w-full rounded-lg" />
      <h3 className="mt-4 text-xl">{ad.title}</h3>
      <p className="text-gray-600">{ad.description}</p>
    </div>
  );
};

export default CardAdHome;

CardAdHome.propTypes = {
  ad: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

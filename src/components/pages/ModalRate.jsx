import PropTypes from "prop-types";
import images from "../../assets/images";


const ModalRate = ({ rate, image, title, onClose }) => {
  if (!rate) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose} // Ferme la modal lorsque l'utilisateur clique à l'extérieur
    >
      <div
        className="bg-white p-6 rounded-xl w-11/12 max-w-4xl flex flex-col sm:flex-row"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture lorsque l'on clique à l'intérieur de la modal
      >
        <div className="flex-1">
          <img
            src={images[image]}
            alt={title}
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between px-6 py-4">
          <h3 className="text-2xl font-bold">{rate.title}</h3>
          <p className="text-gray-700">{rate.description}</p>
          <p className="text-sm text-gray-500">{rate.category}</p>
          <p className="text-lg font-semibold">{rate.price}€</p>
          <p className="mt-4 text-sm text-gray-600">
            Garantie : Nous offrons une garantie de 6 mois sur tous nos produits.
          </p>
        </div>
      </div>
    </div>
  );
};

ModalRate.propTypes = {
  rate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired, // Fonction de fermeture de la modal
};

export default ModalRate;

import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"; // Importation de l'icône croix
import images from "../../assets/images";

const ModalRate = ({ rate, image, title, onClose }) => {
  if (!rate) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Ferme la modal lorsque l'utilisateur clique à l'extérieur
    >
      <div
        className="relative flex w-11/12 max-w-4xl flex-col rounded-xl bg-white p-6 sm:flex-row"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture lorsque l'on clique à l'intérieur de la modal
      >
        <div className="absolute right-4 top-4 z-50">
          <button
            onClick={onClose} // Ferme la modal lorsqu'on clique sur la croix
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fermer"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex-1">
          <img
            src={images[image]}
            alt={title}
            className="h-auto w-full rounded object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between px-6 py-4">
          <h3 className="text-2xl font-bold">{rate.title}</h3>
          <p className="text-gray-700">{rate.description}</p>
          <p className="text-sm text-gray-500">{rate.category}</p>
          <p className="text-lg font-semibold">{rate.price}€</p>
          <p className="mt-4 text-sm text-gray-600">
            Garantie : Nous offrons une garantie de 6 mois sur tous nos
            produits.
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

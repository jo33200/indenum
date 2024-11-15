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
      <div className="relative p-7 max-w-4xl ">
      <div className="absolute flex p-1 text-center right-0 top-0 border-4 border-white rounded-full z-50 hover:text-black">
          <button
            onClick={onClose} // Ferme la modal lorsqu'on clique sur la croix
            className="text-white hover:text-black"
            aria-label="Fermer"
          >
            <FaTimes size={18} />
          </button>
        </div>
      <div
        className=" bg-white flex gap-10 w-full  flex-col p-10 sm:flex-row items-center"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture lorsque l'on clique à l'intérieur de la modal
      >
        
        
        <section className="flex-1">
          <img
            src={images[image]}
            alt={title}
            className="h-auto border px-10 py-20 w-full object-cover"
          />
        </section>
        <section className="flex flex-1 flex-col gap-6 justify-between px-6 py-4 items-start">
          <h3 className="text-2xl font-bold">{rate.title}</h3>
          <p className="text-gray-700 text-base">{rate.description}</p>
          <p className="text-base text-gray-500">catégorie: {rate.category}</p>
          <p className="text-2xl font-bold py-2 border-2
           rounded-3xl w-full">{rate.price}€</p>
          <p className="mt-4 text-lg text-gray-600">
            <strong>Garantie : Nous offrons une garantie de 6 mois sur tous nos
            produits.</strong>
          </p>
          <p className="text-sm">Tous nos prix comprennent la pièce et la main d’oeuvre</p>
        </section>
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

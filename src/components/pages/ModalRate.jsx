import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"; // Importation de l'icône croix
import images from "../../assets/images";
import FakeScrollBar from "../ui/FakeScrollBar";

const ModalRate = ({ rate, image, title, onClose }) => {
  if (!rate) return null;
  const isDesktop = window.innerWidth >= 768;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Ferme la modal lorsque l'utilisateur clique à l'extérieur
    >
      <div className="mt-24 h-screen w-screen max-w-4xl md:relative md:flex md:max-h-[700px] md:justify-center md:p-7">
        <div className="absolute right-4 top-4 z-50 flex rounded-full border-4 border-white p-1 text-center hover:text-black md:right-0 md:top-0">
          <button
            onClick={onClose} // Ferme la modal lorsqu'on clique sur la croix
            className="text-white hover:text-black"
            aria-label="Fermer"
          >
            <FaTimes size={18} />
          </button>
        </div>
        <div
          className="flex w-full flex-col items-center rounded-md bg-white p-6 sm:flex-row md:gap-10 md:p-10"
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture lorsque l'on clique à l'intérieur de la modal
        >
          <section className="flex-1">
            <img
              src={images[image]}
              alt={title}
              className="h-auto w-full border object-cover px-10 py-20"
            />
          </section>
          <section className="flex flex-1 flex-col items-start justify-between gap-6 px-6 py-4">
            <h3 className="text-2xl font-bold">{rate.title}</h3>
            <p className="text-base text-gray-700">{rate.description}</p>
            <p className="text-base text-gray-500">
              catégorie: {rate.category}
            </p>
            <p className="w-full rounded-3xl border-2 py-2 text-2xl font-bold">
              {rate.price}€
            </p>
            <p className="mt-4 text-lg text-gray-600">
              <strong>
                Garantie : Nous offrons une garantie de 6 mois sur tous nos
                produits.
              </strong>
            </p>
            <p className="text-sm">
              Tous nos prix comprennent la pièce et la main d’oeuvre
            </p>
          </section>
        </div>
      </div>
      <FakeScrollBar visible={isDesktop} />
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

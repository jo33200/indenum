import { useState, useEffect } from 'react';

const images = [
  {
    src: "../../assets/img/Carousel1.png",
    alt: "Image 1",
  },
  {
    src: "https://via.placeholder.com/800x400?text=Image+2",
    alt: "Image 2",
  },
  {
    src: "https://via.placeholder.com/800x400?text=Image+3",
    alt: "Image 3",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour aller à une image en cliquant sur un "dot"
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change l'image toutes les 3 secondes
    return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Images */}
      <div className="w-full h-64 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          />
        ))}
      </div>

      {/* Dots de navigation */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer transition-colors ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

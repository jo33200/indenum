import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CardAdHome from "./CardAdHome";

const CarouselAd = ({ ads }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(1); // Mobile
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1
    );
  };

  // Décalage dynamique pour afficher les cartes visibles
  const visibleAds = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleAds.push(ads[(currentIndex + i) % ads.length]);
  }

  return (
    <div className="relative mx-auto w-full max-w-3xl p-4">
      {/* Bouton pour aller à l'annonce précédente */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-200 p-2 shadow-md hover:bg-gray-300 focus:outline-none"
        onClick={prevSlide}
      >
        &#8592; {/* Flèche gauche */}
      </button>

      {/* Cartes des annonces visibles */}
      <div className="flex space-x-4 overflow-hidden">
        {visibleAds.map((ad) => (
          <div key={ad.title} className={`w-full flex-1 transition-all ease-in-out`}>
            <CardAdHome ad={ad} />
          </div>
        ))}
      </div>

      {/* Bouton pour aller à l'annonce suivante */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-200 p-2 shadow-md hover:bg-gray-300 focus:outline-none"
        onClick={nextSlide}
      >
        &#8594; {/* Flèche droite */}
      </button>

      {/* Indicateurs pour chaque annonce */}
      <div className="mt-4 flex justify-center space-x-2">
        {ads.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

CarouselAd.propTypes = {
  ads: PropTypes.array.isRequired,
};

export default CarouselAd;

import { useState, useEffect } from "react";

const slogans = [
  {
    text: "Réparations rapides, résultats durables.",
    alt: "Slogan 1",
  },
  {
    text: "Réparez aujourd'hui, profitez demain.",
    alt: "Slogan 2",
  },
  {
    text: "Téléphone en panne ? Nous avons la réponse.",
    alt: "Slogan 3",
  },
  {
    text: "Plus vite réparé, plus vite connecté.",
    alt: "Slogan 4",
  },
  {
    text: "Réparez, ne remplacez pas.",
    alt: "Slogan 5",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer au slogan suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change le slogan toutes les 3 secondes
    return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage
  }, []);

  return (
    <div className="relative flex h-40 w-full items-center justify-center">
      {/* Slogans */}
      {slogans.map((slogan, index) => (
        <p
          key={index}
          className={`absolute text-center font-openSans text-gray-600 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            fontSize: "26px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          {slogan.text}
        </p>
      ))}
    </div>
  );
};

export default Carousel;

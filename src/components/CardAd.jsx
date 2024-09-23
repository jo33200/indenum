import React from "react";

// Exemple de données statiques pour les annonces
const adsData = [
  {
    title: "Manette PS4 V1 officielle",
    description: "Manette 100% fonctionnelle.",
    price: "30€",
    image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/61/98/fe/6198fe89750f8d88a1c3b8273bdbde492d3b7a86.jpg?rule=classified-1200x800-webp", // URL d'image de remplacement
    url: "https://www.leboncoin.fr/ad/consoles/2842841235", // Lien vers l'annonce (simulé)
  },
  {
    title: "Batterie Joy-Con Nintendo Switch",
    description: "Batterie compatible Joy-Con Nintendo Switch / Switch Oled <br> Produit neuf",
    price: "10€",
    image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/a8/5a/1b/a85a1bc987565f613868c55c684a50d2e710c2b5.jpg?rule=classified-1200x800-webp",
    url: "https://www.leboncoin.fr/ad/consoles/2844352853",
  },
  {
    title: "Lecteur de Carte microSD Nintendo Switch",
    description: "Votre Nintendo Switch ne reconnait plus votre carte microSD, cette pièce règlera votre problème.<br> Pièce neuve.",
    price: "10€",
    image: "https://img.leboncoin.fr/api/v1/lbcpb1/images/08/a0/b9/08a0b9ffde443a48d3a512fc9a6f3f288031d01a.jpg?rule=classified-1200x800-webp",
    url: "https://www.leboncoin.fr/ad/consoles/2829367655",
  },
];

const CardAD = ({ title, description, price, location, image, url }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="font-semibold mt-2">{price}</p>
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Voir annonce
        </a>
      </div>
    </div>
  );
};

// Composant qui affiche une liste d'annonces
const AdsList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {adsData.map((ad, index) => (
        <CardAD
          key={index}
          title={ad.title}
          description={ad.description}
          price={ad.price}
          location={ad.location}
          image={ad.image}
          url={ad.url}
        />
      ))}
    </div>
  );
};

export default AdsList;
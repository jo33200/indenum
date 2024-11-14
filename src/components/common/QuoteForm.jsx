import React, { useState } from "react";
import ButtonValid from "../ui/ButtonValid";
import emailjs from "emailjs-com";

const RequestQuote = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    brand: "",
    model: "",
    description: "",
  });

  const brandsByDeviceType = {
    smartphone: ["Apple", "Samsung", "Huawei", "Google", "Autres"],
    tablet: ["Apple", "Samsung", "Microsoft", "Lenovo", "Autres"],
    console: ["Sony", "Microsoft", "Nintendo", "Autres"],
    laptop: ["Apple", "Dell", "HP", "Asus", "Autres"],
    accessory: ["JBL", "Beats", "Anker", "Autres"],
    smartwatch: ["Apple", "Samsung", "Fitbit", "Garmin", "Autres"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });

    // Réinitialiser la marque et le modèle si la catégorie de service change
    if (name === "deviceType") {
      setContactData((prev) => ({ ...prev, brand: "", model: "" }));
    }
  };

  const sendContactEmail = () => {
    const serviceID = "service_85dzjsi";
    const templateID = "template_ysa7hnr";
    const userID = "Q-hXLrRhbwsCWFw1D";

    emailjs
      .send(serviceID, templateID, contactData, userID)
      .then(() => {
        alert("Votre message a bien été envoyé !");
        setContactData({
          name: "",
          email: "",
          phone: "",
          deviceType: "",
          brand: "",
          model: "",
          description: "",
        });
      })
      .catch((err) => console.error("Erreur d'envoi du message : ", err));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="mb-4 text-center text-3xl font-bold">Demandez un Devis</h1>
      <p className="mb-8 text-center text-gray-600">
        Remplissez le formulaire ci-dessous pour obtenir un devis rapide.
      </p>
      <form className="w-full max-w-lg rounded-lg bg-white p-8 shadow-md">
        {/* Nom */}
        <div className="mb-4">
          <label className="mb-2 block text-gray-700" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="mb-2 block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="email"
          />
        </div>

        {/* Téléphone */}
        <div className="mb-4">
          <label className="mb-2 block text-gray-700" htmlFor="phone">
            Numéro de Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={contactData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="tel"
          />
        </div>

        {/* Catégorie de Service */}
        <div className="mb-4">
          <label className="mb-2 block text-gray-700" htmlFor="deviceType">
            Catégorie de Service
          </label>
          <select
            id="deviceType"
            name="deviceType"
            value={contactData.deviceType}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez une catégorie de service</option>
            {Object.keys(brandsByDeviceType).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
            <option value="autres">Autres</option>
          </select>
        </div>

        {/* Marque */}
        {contactData.deviceType && contactData.deviceType !== "autres" && (
          <div className="mb-4">
            <label className="mb-2 block text-gray-700" htmlFor="brand">
              Marque
            </label>
            <select
              id="brand"
              name="brand"
              value={contactData.brand}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionnez une marque</option>
              {brandsByDeviceType[contactData.deviceType].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
              <option value="autres">Autres</option>
            </select>
          </div>
        )}

        {/* Modèle */}
        {contactData.brand &&
          contactData.brand !== "Autres" &&
          contactData.deviceType !== "autres" && (
            <div className="mb-4">
              <label className="mb-2 block text-gray-700" htmlFor="model">
                Modèle
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={contactData.model}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="text"
              />
            </div>
          )}

        {/* Description du Problème */}
        <div className="mb-4">
          <label className="mb-2 block text-gray-700" htmlFor="description">
            Description du Problème
          </label>
          <textarea
            id="description"
            name="description"
            value={contactData.description}
            onChange={handleChange}
            rows="4"
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <ButtonValid onClick={sendContactEmail} />
      </form>
    </div>
  );
};

export default RequestQuote;

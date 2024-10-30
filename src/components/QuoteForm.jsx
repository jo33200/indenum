import React, { useState } from 'react';
import ButtonValid from './ButtonValid';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    brand: '',
    model: '',
    description: '',
  });

  const brandsByDeviceType = {
    smartphone: ['Apple', 'Samsung', 'Huawei', 'Google', 'Autres'],
    tablet: ['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'Autres'],
    console: ['Sony', 'Microsoft', 'Nintendo', 'Autres'],
    laptop: ['Apple', 'Dell', 'HP', 'Asus', 'Autres'],
    accessory: ['JBL', 'Beats', 'Anker', 'Autres'],
    smartwatch: ['Apple', 'Samsung', 'Fitbit', 'Garmin', 'Autres'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Réinitialiser la marque et le modèle si la catégorie de service change
    if (name === 'deviceType') {
      setFormData((prev) => ({ ...prev, brand: '', model: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Logique d'envoi du formulaire ici
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Demandez un Devis</h1>
      <p className="mb-8 text-center text-gray-600">Remplissez le formulaire ci-dessous pour obtenir un devis rapide.</p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
      >
        {/* Nom */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Téléphone */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Numéro de Téléphone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        {/* Catégorie de Service */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="deviceType">Catégorie de Service</label>
          <select id="deviceType" name="deviceType" value={formData.deviceType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            <option value="">Sélectionnez une catégorie de service</option>
            {Object.keys(brandsByDeviceType).map((type) => (
              <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            ))}
            <option value="autres">Autres</option>
          </select>
        </div>

        {/* Marque */}
        {formData.deviceType && formData.deviceType !== 'autres' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="brand">Marque</label>
            <select id="brand" name="brand" value={formData.brand} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Sélectionnez une marque</option>
              {brandsByDeviceType[formData.deviceType].map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
              <option value="autres">Autres</option>
            </select>
          </div>
        )}

        {/* Modèle */}
        {formData.brand && formData.brand !== 'Autres' && formData.deviceType !== 'autres' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="model">Modèle</label>
            <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
        )}

        {/* Description du Problème */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">Description du Problème</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>

        <ButtonValid />
      </form>
    </div>
  );
};

export default RequestQuote;

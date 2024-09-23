import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the form
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white">
      <h1 className="text-2xl font-bold text-center mb-2">Service Client</h1>
      <p className="text-center text-gray-600 mb-6">
        Pour toute demande, vous pouvez nous envoyer un message
      </p>
        <form onSubmit={handleSubmit}>
            {/* Nom */}
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Votre nom</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre nom"
                required
            />
            </div>

            {/* Email */}
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Votre adresse email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre adresse email"
                required
            />
            </div>

            {/* Téléphone */}
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Votre numéro de téléphone</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre numéro de téléphone"
                required
            />
            </div>

            {/* Message */}
            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Votre message</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Écrivez votre message ici (max. 120 mots)"
                maxLength="120"
                rows="4"
                required
            />
            </div>

            {/* Bouton Envoyer */}
            <div className="flex justify-center">
            <button type="submit" className="flex items-center justify-center bg-name-orange text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaPaperPlane className="mr-2" />
                Envoyer
            </button>
            </div>
        </form>
    </div>
  );
};

export default ContactForm;
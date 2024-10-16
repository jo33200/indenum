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
    <div className="mx-auto max-w-lg p-8">
      <h2 className="mb-2 text-center text-2xl font-bold">Service Client</h2>
      <p className="mb-6 text-center text-gray-600">
        Pour toute demande, vous pouvez nous envoyer un message
      </p>
      <form onSubmit={handleSubmit}>
        {/* Nom */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold text-gray-700">
            Votre nom
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre nom"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold text-gray-700">
            Votre adresse email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre adresse email"
            required
          />
        </div>

        {/* Téléphone */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold text-gray-700">
            Votre numéro de téléphone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre numéro de téléphone"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold text-gray-700">
            Votre message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Écrivez votre message ici (max. 120 mots)"
            maxLength="120"
            rows="4"
            required
          />
        </div>

        {/* Bouton Envoyer */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center rounded-md bg-name-orange px-6 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaPaperPlane className="mr-2" />
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

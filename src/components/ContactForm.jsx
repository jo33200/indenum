import { useState } from "react";
import ButtonValid from "./ButtonValid";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const sendContactEmail = () => {
    const serviceID = 'service_85dzjsi';
    const templateID = 'template_ysa7hnr';
    const userID = 'Q-hXLrRhbwsCWFw1D';

    emailjs.send(serviceID, templateID, contactData, userID)
      .then(() => alert("Votre message a bien été envoyé !"))
      .catch((err) => console.error("Erreur d'envoi du message : ", err));
  };

  return (
    <div className="mx-auto max-w-lg p-8">
      <h2 className="mb-2 text-center text-2xl font-bold">Service Client</h2>
      <p className="mb-6 text-center text-gray-600">
        Pour toute demande, vous pouvez nous envoyer un message
      </p>
      <form >
        {/* Nom */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold text-gray-700">
            Votre nom
          </label>
          <input
            type="text"
            name="name"
            value={contactData.name}
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
            value={contactData.email}
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
            value={contactData.phone}
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
            value={contactData.message}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Écrivez votre message ici (max. 120 mots)"
            maxLength="120"
            rows="4"
            required
          />
        </div>

        <ButtonValid onClick={sendContactEmail} />
      </form>
    </div>
  );
};

export default ContactForm;

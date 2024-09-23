import ContactForm from "../../components/ContactForm";

const Contact = () => {
    return (
      <div className=" w-full h-auto flex flex-col justify-center items-center gap-10 py-5 px-1">
        <div className="text-3xl font-bold text-center">
          <a href="/">Contact</a>
        </div>
        <nav className="container w-auto h-auto">
          <ul className="text-left flex flex-col justify-center items-start gap-2">
            <li>350 avenue de la libération,<br /> 33110, Le Bouscat</li>
            <li>07 66 44 13 37</li>
            <li>indenum@outlook.com</li>
          </ul>
        </nav>
        {/* Intégration de la carte Google Maps via iframe */}
        <div className="mt-5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.73239901182293!2d-0.6080236082763149!3d44.868027578053166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d71598cbcc33%3A0xffdb52962ffa1cb8!2sINDENUM%20-%20ind%C3%A9num%20service%20de%20r%C3%A9paration%20de%20t%C3%A9l%C3%A9phones%20portables%2C%20smartphones%20et%20consoles%20de%20jeux%20vid%C3%A9o!5e0!3m2!1sfr!2sfr!4v1726826599355!5m2!1sfr!2sfr"
            width="300" 
            height="200" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          >
          </iframe>
        </div>
        <div className="w-full max-w-md mt-10">
          <ContactForm />
        </div>
      </div>
    );
};

    export default Contact;
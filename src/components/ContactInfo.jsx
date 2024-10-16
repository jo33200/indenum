import PropTypes from "prop-types";

const ContactInfo = ({ isFooter = false }) => (
  <div className={isFooter ? "" : "mx-auto flex max-w-lg flex-col gap-10 p-8"}>
    {!isFooter && (
      <h2 className="mb-2 text-center text-2xl font-bold">Contact</h2>
    )}

    <nav className="h-auto w-auto">
      <ul
        className={`flex flex-col ${isFooter ? "gap-1 items-start justify-start text-left" : "items-center justify-center gap-2 text-center"} `}
      >
        {isFooter && <li className="font-bold">Contact</li>}
        <li>
          350 avenue de la libération,
          <br /> 33110, Le Bouscat
        </li>
        <li>07 66 44 13 37</li>
        <li>indenum@outlook.com</li>
      </ul>
    </nav>
    {/* Intégration de la carte Google Maps via iframe */}
    <div className={`${isFooter ? "" : "flex justify-center"}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.73239901182293!2d-0.6080236082763149!3d44.868027578053166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d71598cbcc33%3A0xffdb52962ffa1cb8!2sINDENUM%20-%20ind%C3%A9num%20service%20de%20r%C3%A9paration%20de%20t%C3%A9l%C3%A9phones%20portables%2C%20smartphones%20et%20consoles%20de%20jeux%20vid%C3%A9o!5e0!3m2!1sfr!2sfr!4v1726826599355!5m2!1sfr!2sfr"
        className={`border-0 ${isFooter ? "h-auto w-[250px] pt-3" : "h-200 w-300 left-0 top-0 lg:h-80 lg:w-full"}`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  </div>
);

ContactInfo.propTypes = {
  isFooter: PropTypes.bool,
};

export default ContactInfo;

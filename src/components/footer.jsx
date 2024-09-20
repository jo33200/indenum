
const Footer = () => {

    return (   

        <footer className="mt-10 w-full h-auto text-white flex flex-col justify-start items-start gap-10 bg-name-orange py-5 px-1">
            
            <div className="text-3xl font-bold font-glazkrak text-left">
                <a href="/">INDÉNUM</a>
            </div>
            <nav className="w-full h-auto">
            <ul className="text-left flex flex-col justify-start items-start gap-1">
                <li className="font-bold">Services</li>
                <li>Réparation de téléphones toutes marques</li>
                <li>Réparation de tablettes toutes marques</li>
                <li>Réparation de consoles de jeux</li>
            </ul>
            </nav>
            <nav className="w-full h-auto">
            <ul className="text-left flex flex-col justify-start items-start gap-1">
                <li className="font-bold">Contact</li>
                <li>Le Bouscat,<br /> Bordeaux, Nouvelle aquitaine</li>
                <li>07 66 44 13 37</li>
                <li>indenum@outlook.com</li>
                {/* Intégration de la carte Google Maps via iframe */}
                <li className="mt-5">
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
                </li>
            </ul>
            </nav>
            <nav className="w-full ">
            <ul className="text-left flex flex-col justify-start items-start gap-1">
                <li className="font-bold">Informations</li>
                <li>Mentions légales</li>
                <li>Conditions générales de vente</li>
                <li>Politique de confidentialité</li>
            </ul>
            </nav>
            
        </footer>
    );
}

export default Footer;
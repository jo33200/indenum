import React from "react";

const Footer = () => {

    return (   

        <footer className="mt-10 w-full text-white h-auto flex-col justify-start items-start bg-name-orange pt-5">
            <div className="text-3xl font-bold font-glazkrak text-center">
                <a href="/">INDÉNUM</a>
            </div>
            <nav className="w-full mt-2">
            <ul className="flex-col justify-start items-start">
                <li>Services</li>
                <li>Réparation de téléphones toutes marques</li>
                <li>Réparation de tablettes toutes marques</li>
                <li>Réparation de consoles de jeux</li>
            </ul>
            </nav>
            <nav className="w-full mt-2">
            <ul>
                <li>Informations</li>
                <li>Mentions légales</li>
                <li>Conditions générales de vente</li>
                <li>Politique de confidentialité</li>
            </ul>
            </nav>
            <nav className="w-full mt-2">
            <ul>
                <li>Horaires</li>
                <li>Lundi - Vendredi : 9h - 18h</li>
                <li>Samedi : 9h - 12h</li>
                <li>Dimanche : Fermé</li>
            </ul>
            </nav>

        </footer>
    );
}

export default Footer;
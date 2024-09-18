import React from "react";

const Header = () => {
  return (
    
    <header className="w-full h-auto bg-gradient-to-r from-[#7A6F6F] to-[#583C3C] pt-5">
    <div className="container mx-auto flex flex-col justify-center items-center">
      {/* Logo */}
      <div className=" text-name-orange text-6xl font-bold font-glazkrak">
        <a href="/">INDÈNUM</a>
      </div>

        {/* Slogan */}
    
      <p className="text-white">Service de Réparation pour vos objets électroniques</p>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
};

export default Header;
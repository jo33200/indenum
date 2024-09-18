import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        <a href="/">MyLogo</a>
      </div>

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
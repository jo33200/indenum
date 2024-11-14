import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import ScrollTopNavigate from "./components/ui/ScrollTopNavigate";
import Loader from "./components/ui/Loader";

import Home from "./pages/home/home";
import Ad from "./pages/ad/ad";
import Quote from "./pages/quote/quote";
import Contact from "./pages/contact/contact";
import Rates from "./pages/rates/rates";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Affiche le loader lorsque la route change
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // Délai de 500ms, à ajuster si nécessaire

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="m-0 flex h-auto w-full flex-col items-center text-center">
      <ScrollTopNavigate />
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ad" element={<Ad />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {!isLoading && <Footer />}{" "}
      {/* Footer ne s'affiche qu'une fois le chargement terminé */}
    </div>
  );
}

export default App;

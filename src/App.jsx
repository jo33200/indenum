import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/home";
import Ad from "./pages/ad/ad";
import Quote from "./pages/quote/quote";
import Contact from "./pages/contact/contact";
import Rates from "./pages/rates/rates";

function App() {
  return (
    <Router>
      <div className="m-0 h-auto w-full text-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ad" element={<Ad />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

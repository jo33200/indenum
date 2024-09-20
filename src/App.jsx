
import './App.css'
import Header from './components/Header'
import Footer from './components/footer' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Ad from './pages/ad/ad'
import Quote from './pages/quote/quote'
import Contact from './pages/contact/contact'
import Rates from './pages/rates/rates'

function App() {
  

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ad" element={<Ad />} />
          <Route path="/catalog" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rates" element={<Rates />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

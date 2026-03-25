import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Services from './pages/Services'
import Quote from './pages/Quote'
import Careers from './pages/Careers'
import Tips from './pages/Tips'
import TipDetail from './pages/TipDetail'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/services/:category" element={<Services />} />
          <Route path="/quote"              element={<Quote />} />
          <Route path="/careers"            element={<Careers />} />
          <Route path="/tips"               element={<Tips />} />
          <Route path="/tips/:slug"         element={<TipDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
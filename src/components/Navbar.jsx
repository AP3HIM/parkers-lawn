import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'
import '../css/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (path) => {
    setMenuOpen(false)
    navigate(path)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-mark"><Leaf size={18} /></span>
          <span className="navbar__logo-text">Parker's Lawn &amp; Landscaping</span>
        </Link>

        <nav className="navbar__links">
          <div className="navbar__dropdown">
            <button className="navbar__link navbar__link--btn">Services ▾</button>
            <div className="navbar__dropdown-menu">
              <NavLink to="/services/lawncare"    className="navbar__dropdown-item">Lawn Care</NavLink>
              <NavLink to="/services/landscaping" className="navbar__dropdown-item">Landscaping</NavLink>
              <NavLink to="/services/hardscapes"  className="navbar__dropdown-item">Hardscapes</NavLink>
              <NavLink to="/services/specialty"   className="navbar__dropdown-item">Specialty Services</NavLink>
            </div>
          </div>
          <NavLink to="/tips"    className="navbar__link">Tips &amp; Tricks</NavLink>
          <NavLink to="/careers" className="navbar__link">Careers</NavLink>
          <button className="btn btn--primary navbar__cta" onClick={() => handleNav('/quote')}>
            Free Estimate
          </button>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} color="white" /> : <Menu size={22} color="white" />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          <NavLink to="/services/lawncare"    onClick={() => setMenuOpen(false)}>Lawn Care</NavLink>
          <NavLink to="/services/landscaping" onClick={() => setMenuOpen(false)}>Landscaping</NavLink>
          <NavLink to="/services/hardscapes"  onClick={() => setMenuOpen(false)}>Hardscapes</NavLink>
          <NavLink to="/services/specialty"   onClick={() => setMenuOpen(false)}>Specialty Services</NavLink>
          <NavLink to="/tips"                 onClick={() => setMenuOpen(false)}>Tips &amp; Tricks</NavLink>
          <NavLink to="/careers"              onClick={() => setMenuOpen(false)}>Careers</NavLink>
          <button className="btn btn--primary" onClick={() => handleNav('/quote')}>Free Estimate</button>
        </div>
      )}
    </header>
  )
}

export default Navbar
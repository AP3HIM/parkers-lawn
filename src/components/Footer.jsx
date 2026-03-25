import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Leaf, ShieldCheck, ExternalLink } from 'lucide-react'
import '../css/Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">

        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark"><Leaf size={16} /></span>
            <span>Parker's Lawn &amp; Landscaping LLC</span>
          </div>
          <p className="footer__slogan">"Perfection Begins with Parker's"</p>
          <p className="footer__desc">
            Serving Central Indiana with professional hardscaping, landscaping, and lawn care.
          </p>
          <div className="footer__license">
            <ShieldCheck size={13} />
            <span>Licensed &amp; Insured · Office of Indiana State Chemist</span>
          </div>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/lawncare">Lawn Care</Link></li>
            <li><Link to="/services/landscaping">Landscaping</Link></li>
            <li><Link to="/services/hardscapes">Hardscapes</Link></li>
            <li><Link to="/services/specialty">Specialty Services</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/tips">Tips &amp; Tricks</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/quote">Free Estimate</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+13175034648">
                <Phone size={13} /> (317) 503-4648
              </a>
            </li>
            <li>
              <a href="mailto:parkerslawnandlandscaping@myyahoo.com">
                <Mail size={13} /> parkerslawnandlandscaping@myyahoo.com
              </a>
            </li>
          </ul>
          <div className="footer__social">
            <a href="https://www.facebook.com/parkerlawnservices/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/parkerslawn/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.yelp.com/biz/parkers-lawn-and-landscaping-brownsburg" target="_blank" rel="noreferrer" aria-label="Yelp">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Parker's Lawn &amp; Landscaping LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer
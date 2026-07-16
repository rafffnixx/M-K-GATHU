import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useContext(ThemeContext);
  
  // Use different logos for light and dark mode from the logo folder
  const logoSrc = theme === 'dark' 
    ? "/images/logo/mkg-logo-white.png" 
    : "/images/logo/mkg-logo.png";

  const quickLinks = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/services', label: 'Divisions', icon: 'fas fa-th-large' },
    { path: '/portfolio', label: 'Success Stories', icon: 'fas fa-briefcase' },
    { path: '/reviews', label: 'Testimonials', icon: 'fas fa-star' },
    { path: '/about', label: 'About', icon: 'fas fa-info-circle' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  const divisions = [
    { path: '/service/financial-advisory', label: 'Financial Advisory', icon: 'fas fa-chart-pie' },
    { path: '/service/business-advisory', label: 'Business Advisory', icon: 'fas fa-handshake' },
    { path: '/service/accounting-compliance', label: 'Accounting & Compliance', icon: 'fas fa-file-invoice' },
    { path: '/service/investment-intelligence', label: 'Investment Intelligence', icon: 'fas fa-chart-line' },
    { path: '/service/digital-economy', label: 'Digital Economy Advisory', icon: 'fas fa-globe' },
    { path: '/service/corporate-training', label: 'Corporate Training', icon: 'fas fa-graduation-cap' }
  ];

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column - Logo + Company Name + Description */}
          <div className="footer-about">
            <div className="footer-logo">
              <img 
                src={logoSrc} 
                alt="M.K. Gathu Consultancy Logo" 
                className="footer-logo-image" 
              />
              <div className="footer-logo-text">
                <h3>M.K. Gathu Consultancy</h3>
                <p>Business Intelligence · Financial Advisory · Strategic Consulting</p>
              </div>
            </div>
            <p className="footer-description">
              Nairobi-based financial and business advisory firm trusted by 500+ businesses and professionals. 
              ICPAK-aligned practice with US Tax Preparer credential. Serving Kenya and worldwide.
            </p>
            <div className="social-links">
              <a href="https://wa.me/254762610912" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} onClick={handleNavClick}>
                    <i className={link.icon}></i> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions Column */}
          <div className="footer-links-col">
            <h4>Our Divisions</h4>
            <ul>
              {divisions.map((division) => (
                <li key={division.path}>
                  <Link to={division.path} onClick={handleNavClick}>
                    <i className={division.icon}></i> {division.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" onClick={handleNavClick}>
                  <i className="fas fa-arrow-right"></i> View All Divisions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul className="contact-info-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span>Westlands, Nairobi, Kenya</span>
                </div>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <a href="tel:+254762610912">+254 762 610 912</a>
                </div>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <div>
                  <a href="https://wa.me/254762610912" target="_blank" rel="noopener noreferrer">+254 762 610 912</a>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <a href="mailto:gathukamau23@gmail.com">gathukamau23@gmail.com</a>
                </div>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <div>
                  <strong>Business Hours</strong>
                  <span>Mon-Fri: 8:00AM – 5:00PM (EAT)</span>
                  <span>Sat: 9:00AM – 1:00PM</span>
                  <span>Sun: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} M.K. Gathu Consultancy. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <Link to="/terms" onClick={handleNavClick}>Terms of Service</Link>
              <span className="separator">|</span>
              <Link to="/privacy" onClick={handleNavClick}>Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="footer-developer">
          <p>
            Developed by <strong>RAFFCODES IT SOLUTIONS</strong> | 
            <a href="https://raffcodes.tech" target="_blank" rel="noopener noreferrer">
              raffcodes.tech
            </a>
          </p>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <a 
        href="https://wa.me/254762610912?text=Hello%20M.K.%20Gathu%20Consultancy%2C%20I%20need%20expert%20financial%20advice." 
        className="whatsapp-chat"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
}
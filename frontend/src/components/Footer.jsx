import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoSrc = "/images/logo-white.jpg";

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Success Stories' },
    { path: '/reviews', label: 'Testimonials' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    { path: '/service/business-startup', label: 'Business Start-Up' },
    { path: '/service/tax-compliance', label: 'Tax & KRA Compliance' },
    { path: '/service/payroll', label: 'Payroll Services' },
    { path: '/service/debt-tracking', label: 'Debt Tracking' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logoSrc} alt="M.K GATHU Logo" className="footer-logo-image" />
              <p>FINANCIAL CONSULTING • KENYA</p>
            </div>
            <p className="footer-description">
              Premier financial consulting firm based in Nairobi, Kenya, dedicated to empowering 
              businesses with clarity, control, and growth — from registration to profitability.
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
            </div>
          </div>

          {/* Rest of footer remains the same */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <i className="fas fa-chevron-right"></i> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Our Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path}>
                    <i className="fas fa-chevron-right"></i> {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services">
                  <i className="fas fa-chevron-right"></i> View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul className="contact-info-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Westlands, Nairobi, Kenya</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+254762610912">+254 762 610 912</a>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/254762610912">+254 762 610 912 (WhatsApp)</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:gathukamau23@gmail.com">gathukamau23@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-business-hours">
            <i className="fas fa-clock"></i>
            <span>Mon-Fri: 8:00AM – 5:00PM | Sat: 9AM – 1PM | Sun: Closed</span>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} M.K GATHU Financial Consulting — Professional Financial Management in Kenya. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <a 
        href="https://wa.me/254762610912?text=Hello%20M.K%20GATHU%20Consulting%2C%20I%20need%20expert%20financial%20advice." 
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
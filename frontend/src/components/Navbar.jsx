import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Logo paths - images in public folder
  const logoSrc = "/logo.png";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/services', label: 'Services', icon: 'fas fa-briefcase' },
    { path: '/portfolio', label: 'Portfolio', icon: 'fas fa-chart-line' },
    { path: '/reviews', label: 'Reviews', icon: 'fas fa-star' },
    { path: '/about', label: 'About', icon: 'fas fa-users' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavClick = (path) => {
    closeMenu();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={() => handleNavClick('/')}>
            <img 
              src={logoSrc}
              alt="M.K GATHU Financial Consulting Logo" 
              className="logo-image"
            />
            <div className="logo-text">
              <h1>M.K GATHU</h1>
              <p>FINANCIAL CONSULTING • KENYA</p>
            </div>
          </Link>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={isActive(link.path) ? 'active' : ''}
                  onClick={() => handleNavClick(link.path)}
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
            <li className="desktop-cta">
              <Link to="/contact" className="btn-outline-small" onClick={() => handleNavClick('/contact')}>
                <i className="fas fa-calendar-check"></i> Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <img src={logoSrc} alt="M.K GATHU Logo" className="mobile-logo-image" />
            <div className="mobile-logo-text">
              <h3>M.K GATHU</h3>
              <p>FINANCIAL CONSULTING • KENYA</p>
            </div>
          </div>
          <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={isActive(link.path) ? 'active' : ''}
                onClick={() => handleNavClick(link.path)}
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
                <i className="fas fa-chevron-right arrow"></i>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mobile-menu-footer">
          <Link to="/contact" className="btn-gold-mobile" onClick={() => handleNavClick('/contact')}>
            <i className="fas fa-calendar-check"></i> Free Consultation
          </Link>
          <div className="mobile-contact-info">
            <a href="tel:+254762610912">
              <i className="fas fa-phone"></i> +254 762 610 912
            </a>
            <a href="mailto:gathukamau23@gmail.com">
              <i className="fas fa-envelope"></i> Email Us
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}
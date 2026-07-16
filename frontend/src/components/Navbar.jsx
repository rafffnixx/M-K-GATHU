import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../App';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Divisions' },
    { path: '/portfolio', label: 'Success Stories' },
    { path: '/reviews', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="M.K. Gathu Consultancy" className="logo-image" />
          <div className="logo-text">
            <span className="logo-name">M.K. Gathu</span>
            <span className="logo-tagline">Consultancy</span>
          </div>
        </Link>

        {/* Theme Toggle */}
        <button 
          className="theme-toggle-nav" 
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>

        {/* Hamburger Menu Button */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="navbar-item">
              <Link 
                to={link.path} 
                className={`navbar-link ${isActive(link.path)}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar-item">
            <Link to="/contact" className="navbar-cta" onClick={closeMenu}>
              <i className="fas fa-calendar-check"></i> Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
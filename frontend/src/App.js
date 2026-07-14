import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './pages/styles.css';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import ServiceDetail from './pages/ServiceDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Theme Context for global theme management
export const ThemeContext = React.createContext();

function App() {
  // Theme state: 'light' is default
  const [theme, setTheme] = useState('light');

  // Check for saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Default to 'light' if no preference saved
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.body.classList.add('dark-mode');
    } else {
      setTheme('light');
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeContext.Provider>
  );
}

export default App;
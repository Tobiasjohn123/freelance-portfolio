// components/Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './nav.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar-kinetic ${scrolled ? 'nav-scrolled' : ''}`}>
      {/* Gradient backdrop lives in ::before */}
      <div className="nav-container">
        {/* Logo with Changa One */}
        <a href="#home" className="nav-logo" onClick={(e) => scrollToSection(e, 'home')}>
          <span className="nav-logo-dot"></span>
          Tobias Build
        </a>

        {/* Mobile Toggle */}
        <button 
          className="nav-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <a 
            href="#home" 
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            Home
            <span className="nav-underline"></span>
          </a>
          <a 
            href="#projects" 
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            Projects
            <span className="nav-underline"></span>
          </a>
          <a 
            href="#booking" 
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'booking')}
          >
            Contact
            <span className="nav-underline"></span>
          </a>

          {/* CTA Button */}
          <a 
            href="#booking" 
            className="nav-cta glow-pulse"
            onClick={(e) => scrollToSection(e, 'booking')}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
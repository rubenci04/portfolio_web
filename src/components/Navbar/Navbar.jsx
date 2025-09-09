import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
    >
      <a href="#home" className="navbar-logo">
        RUBEN ALBARRACIN
      </a>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={toggleMobileMenu}>Sobre Mí</a></li>
        <li><a href="#projects" onClick={toggleMobileMenu}>Proyectos</a></li>
        <li><a href="#contact" onClick={toggleMobileMenu}>Contacto</a></li>
      </ul>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
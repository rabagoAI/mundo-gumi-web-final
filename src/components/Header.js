import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Mundo Gumi</Link>
      </div>
      <button className="mobile-menu-toggle" onClick={handleToggleMobileMenu}>
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </button>
      <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/patrones-mundo-gumi" onClick={handleLinkClick}>Patrones IA</Link></li>
          <li><Link to="/patrones-colaboradores" onClick={handleLinkClick}>Colaboradores</Link></li>
          <li><Link to="/tutoriales" onClick={handleLinkClick}>Tutoriales</Link></li>
          <li><Link to="/comunidad" onClick={handleLinkClick}>Comunidad</Link></li>
          <li><Link to="/contacto" onClick={handleLinkClick}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
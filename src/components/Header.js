import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Mundo Gumi</Link> {/* Enlace a la página de inicio */}
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/patrones-mundo-gumi">Mis Patrones</Link></li>
          <li><Link to="/patrones-colaboradores">Colaboradores</Link></li>
          <li><Link to="/tutoriales">Tutoriales</Link></li>
          <li><Link to="/comunidad">Comunidad</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
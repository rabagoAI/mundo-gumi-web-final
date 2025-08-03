import React from 'react';
import { Link } from 'react-router-dom'; // Para el botón
import './HeroSection.css';
import heroImage from '../assets/images/hero-bg.jpg'; // Importa la imagen aquí

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Crea magia con tus manos</h1>
        <p>Patrones exclusivos generados con inteligencia artificial y la mejor comunidad para amantes del ganchillo.</p>
        <Link to="/patrones-mundo-gumi" className="cta-button">
          Explora mis patrones
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
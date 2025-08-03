import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h3>Aprende con nosotros</h3>
        <p>Descubre tutoriales básicos y avanzados para dominar el arte del amigurumi.</p>
        <Link to="/tutoriales" className="cta-button">Ver tutoriales</Link>
      </div>
      <div className="cta-card">
        <h3>Conoce a otros creadores</h3>
        <p>Explora patrones de diseñadores talentosos de todo el mundo.</p>
        <Link to="/patrones-colaboradores" className="cta-button">Ver colaboradores</Link>
      </div>
    </section>
  );
}

export default CTASection;
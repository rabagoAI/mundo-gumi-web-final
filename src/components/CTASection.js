// src/components/CTASection.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h3>Entrevistas</h3>
        <p>Conoce a los creadores de manera más personal.</p>
        <Link to="/entrevistas" className="cta-button">Ver tutoriales</Link>
      </div>
      <div className="cta-card">
        <h3>¿Necesitas ayuda?</h3>
        <p>Ponte en contacto con nosotros para cualquier duda o colaboración.</p>
        <Link to="/contacto" className="cta-button">Contáctanos</Link>
      </div>
    </section>
  );
}

export default CTASection;
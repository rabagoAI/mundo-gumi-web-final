import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityShowcase.css';

function CommunityShowcase() {
  return (
    <section className="community-showcase">
      <h2>Muestra de la comunidad</h2>
      <p>
        En este espacio celebramos el talento y la creatividad de nuestra comunidad de **creadores de amigurumi**. Aquí encontrarás patrones únicos y originales que te inspirarán a crear tu próximo proyecto de crochet. Descubre diseños increíbles como el **pollito graduación** de nuestra colaboradora **salmarina.esp** y muchos más.
      </p>
      
      <div className="community-buttons">
        <Link to="/tutoriales" className="btn-aprende">
          Aprende con nosotros
        </Link>
        <Link to="/patrones-colaboradores" className="btn-creadores">
          Conoce a otros creadores
        </Link>
      </div>
    </section>
  );
}

export default CommunityShowcase;
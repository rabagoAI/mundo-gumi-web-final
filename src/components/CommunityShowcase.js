import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityShowcase.css';

// Datos de ejemplo para las creaciones de la comunidad
const communityCreations = [
  { id: 1, image: 'https://via.placeholder.com/250x250.png?text=Creacion+1' },
  { id: 2, image: 'https://via.placeholder.com/250x250.png?text=Creacion+2' },
  { id: 3, image: 'https://via.placeholder.com/250x250.png?text=Creacion+3' },
  { id: 4, image: 'https://via.placeholder.com/250x250.png?text=Creacion+4' },
];

function CommunityShowcase() {
  return (
    <section className="community-showcase">
      <h2>Inspiración de nuestra comunidad</h2>
      <div className="creations-grid">
        {communityCreations.map(creation => (
          <div key={creation.id} className="creation-card">
            <img src={creation.image} alt="Creación de la comunidad" />
          </div>
        ))}
      </div>
      <Link to="/comunidad" className="cta-link">Ver más creaciones</Link>
    </section>
  );
}

export default CommunityShowcase;
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPatterns.css';
import pikachu from '../assets/images/pikachu.png';
import luffy from '../assets/images/luffy.png'
import miercolesAddams from '../assets/images/miercoles-adams.png'

const patterns = [
  
  { id: 'pikachu', name: 'Pikachu', image: pikachu },
  { id: 'luffy', name: 'Luffy', image: luffy },
  { id: 'miercoles-addams', name: 'Miércoles Addams', image: miercolesAddams },
];

function FeaturedPatterns() {
  return (
    <section className="featured-patterns">
      <h2>Nuestras últimas creaciones</h2>
      <div className="patterns-grid">
        {patterns.map(pattern => (
          <div key={pattern.id} className="pattern-card">
            <img src={pattern.image} alt={pattern.name} />
            <h3>{pattern.name}</h3>
            <Link to={`/patrones/${pattern.id}`} className="pattern-link">Ver patrón</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPatterns;
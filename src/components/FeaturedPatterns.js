import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPatterns.css';
import miercolesAddams from '../assets/images/miercoles-adams.png';
import pikachu from '../assets/images/pikachu.png';
import stitch from '../assets/images/stitch.png';
import koala from '../assets/images/koala.png';


const patterns = [
  
  { id: 'koala', name: 'Koala', image: koala },
  { id: 'pikachu', name: 'Pikachu', image: pikachu },
  { id: 'stitch', name: 'Stich', image: stitch },

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
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPatterns.css';
import koala from '../assets/images/koala.png';
import superman from '../assets/images/superman.png';
import alienigena from '../assets/images/alienigena.png';


const patterns = [
  
  { id: 'alienigena', name: 'Alienígena', image: alienigena },
  { id: 'superman-amigurumi', name: 'Superman', image: superman},
  { id: 'koala', name: 'Koala', image: koala },
 

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
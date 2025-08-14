import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPatterns.css';
import alienigena from '../assets/images/alienigena.png';
import ositoKawaii from '../assets/images/osito-kawaii.png';
import lilo from '../assets/images/lilo.png';
import pinguino from '../assets/images/pinguino.png';


const patterns = [
  
  { id: 'ositoKawaii', name: 'Osito Kawaii Amarillo', image: ositoKawaii },
  { id: 'lilo', name: 'Lilo', image: lilo},
  { id: 'pinguino', name: 'Pinguino', image: pinguino },
  
 

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
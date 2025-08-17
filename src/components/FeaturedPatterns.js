import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPatterns.css';
import ositoKawaii from '../assets/images/osito-kawaii.png';
import lilo from '../assets/images/lilo.png';
import pinguino from '../assets/images/pinguino.png';

import vaquita from '../assets/images/vaquita-tierna.jpeg';
import gnomo from '../assets/images/gnomo.png';
import muneca from '../assets/images/muneca-gorro.png';



const patterns = [
  
  { id: 'vaquita-tierna', name: 'Vaquita Tierna', image: vaquita },
  { id: 'gnomo-magico', name: 'Gnomo Amigurumi', image: gnomo},
  { id: 'muneca-gorro', name: 'Muñequita con Gorro', image: muneca },
  
 

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
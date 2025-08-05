import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPatterns.css';
import bebeDragonImage from '../assets/images/bebe-dragon.png';
import perritoKawaiImage from '../assets/images/perrito-kawai.png';
import conejitoSaltarinImage from '../assets/images/conejito-saltarin.png';
import luffy from '../assets/images/luffy.png'

const patterns = [
  { id: 'bebe-dragon', name: 'Bebé Dragón', image: bebeDragonImage },
  { id: 'perrito-kawai', name: 'Perrito Kawai', image: perritoKawaiImage }, // Corregido el nombre y la imagen
  { id: 'conejito-saltarin', name: 'Conejito Saltarin', image: conejitoSaltarinImage },
  { id: 'luffy', name: 'Luffy', image: luffy },
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
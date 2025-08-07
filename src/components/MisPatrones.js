import React from 'react';
import { Link } from 'react-router-dom';
import bebeDragonImage from '../assets/images/bebe-dragon.png'; // Importa la imagen real
import perritoKawai from '../assets/images/perrito-kawai.png';
import conejitoSaltarin from '../assets/images/conejito-saltarin.png'
import luffy from '../assets/images/luffy.png'
import miercolesAddams from '../assets/images/miercoles-adams.png'
import pikachu from '../assets/images/pikachu.png'
import stitch from '../assets/images/stitch.png'

// Creamos la lista de patrones aquí. Podrías moverla a un archivo de datos.
const patterns = [
  { id: 'bebe-dragon', name: 'Bebé Dragón', image: bebeDragonImage, level: 'Intermedio' },
  { id: 'perrito-kawai', name: 'Perrito Kawai', image: perritoKawai, level: 'Fácil' },
  { id: 'conejito-saltarin', name: 'Conejito Saltarin', image: conejitoSaltarin, level: 'Fácil' },
  { id: 'luffy', name: 'Luffy', image: luffy, level: 'Avanzado' },
  { id: 'miercoles-addams', name: 'Miércoles Addams', image: miercolesAddams, level: 'Intermedio' },
  { id: 'pikachu', name: 'Pikachu', image: pikachu, level: 'Intermedio' },
  { id: 'stitch', name: 'Stitch', image: stitch, level: 'Avanzado' },
];

function MisPatrones() {
  return (
    <section className="mis-patrones-page">
      <h1>Mis Patrones</h1>
      <div className="patterns-grid">
        {patterns.map(pattern => (
          <div key={pattern.id} className="pattern-card">
            <Link to={`/patrones/${pattern.id}`}>
              <img src={pattern.image} alt={pattern.name} />
              <h3>{pattern.name}</h3>
            </Link>
            <p>Nivel: {pattern.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MisPatrones;
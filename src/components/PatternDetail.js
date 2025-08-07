import React from 'react';
import { useParams } from 'react-router-dom';
import bebeDragonImage from '../assets/images/bebe-dragon-2.png';
import perritoKawaiImage from '../assets/images/perrito-kawai-2.png';
import conejitoSaltarin from '../assets/images/conejito-saltarin-2.png'
import luffyChibi from '../assets/images/luffy-2.png';
import miercolesAddamsImage from '../assets/images/miercoles-adams-2.png';
import pikachuImage from '../assets/images/pikachu-2.png';

// Datos completos de los patrones (puedes añadir más detalles aquí)
const patterns = [
  { 
    id: 'bebe-dragon', 
    name: 'Bebé Dragón', 
    image: bebeDragonImage, 
    level: 'Intermedio',
    description: 'Un adorable bebé dragón amigurumi, ideal para regalar. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color verde claro', 'Hilo de color verde oscuro', 'Ojos de seguridad', 'Relleno de fibra', 'Aguja de ganchillo 3.0mm'],
  },

  { 
    id: 'perrito-kawai', 
    name: 'Perrito Kawai', 
    image: perritoKawaiImage, 
    level: 'Fácil',
    description: 'Un adorable perrito estilo kawai. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color beige ', 'Hilo de color negro', 'Ojos de seguridad o hilo negro para bordar', 'Relleno de fibra', 'Aguja de ganchillo 3.0mm'],
  },

  { 
    id: 'conejito-saltarin', 
    name: 'Conejito Saltarín', 
    image: conejitoSaltarin, 
    level: 'Fácil',
    description: 'Un adorable conejito amigurumi. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color beige o blanco', 'Hilo de color negro', 'Ojos de seguridad', 'Relleno de fibra', 'Aguja de ganchillo de 2.5 mm o 3.0mm'],
  },

  {
  id: 'luffy',
  name: 'Luffy Chibi',
  image: luffyChibi,
  level: 'Avanzado',
  description: 'Amigurumi del icónico personaje Luffy de One Piece en versión chibi. Requiere experiencia en cambios de color, bordado de detalles y ensamblaje de múltiples piezas.',
  materials: [
    'Hilo de algodón en color piel, rojo, azul, amarillo, negro y blanco',
    'Ojos de seguridad (8-10 mm)',
    'Relleno de fibra',
    'Aguja de ganchillo 2.5 mm o 3.0 mm',
    'Aguja lanera para coser',
    'Marcador de vueltas',
    'Tijeras'
  ]
},

{
  id: 'miercoles-addams',
  name: 'Miércoles Addams',
  image: miercolesAddamsImage,
  level: 'Intermedio',
  description: 'Amigurumi inspirado en Miércoles Addams en versión chibi. Ideal para fans de la serie. Utiliza ojos de fieltro y requiere ensamblaje de varias piezas.',
  materials: [
    'Hilo de color negro',
    'Hilo de color blanco',
    'Hilo color piel',
    'Fieltro blanco y negro para los ojos',
    'Relleno de fibra',
    'Aguja de ganchillo 2.5 mm o 3.0 mm',
    'Pegamento textil o silicona caliente',
    'Aguja lanera',
    'Tijeras',
    'Marcador de vueltas'
  ]
},

{
  id: 'pikachu',
  name: 'Pikachu',
  image: pikachuImage,
  level: 'Intermedio',
  description: 'Un adorable Pikachu tejido a crochet con su clásica cola en forma de rayo y mejillas rojas. Ideal para fans de Pokémon.',
  materials: [
    'Hilo de color amarillo',
    'Hilo de color negro',
    'Hilo de color rojo',
    'Hilo de color marrón claro y oscuro',
    'Ojos de seguridad de 10-12 mm',
    'Relleno de fibra sintética',
    'Aguja de ganchillo 2.5 mm o 3.0 mm',
    'Aguja lanera',
    'Fieltro blanco (opcional)'
  ]
}





  // ... otros patrones aquí
];

function PatternDetail() {
  const { id } = useParams(); // Obtenemos el ID de la URL
  const pattern = patterns.find(p => p.id === id); // Buscamos el patrón por ID

  if (!pattern) {
    return <h2>Patrón no encontrado.</h2>; // Mensaje si el patrón no existe
  }

  return (
    <section className="pattern-detail-page">
      <div className="pattern-header">
        <img src={pattern.image} alt={pattern.name} className="pattern-detail-image" />
        <div className="pattern-info">
          <h1>{pattern.name}</h1>
          <p><strong>Nivel:</strong> {pattern.level}</p>
          <p>{pattern.description}</p>
          <button className="download-button">Comprar Patrón (PDF)</button>
        </div>
      </div>
      <div className="pattern-materials">
        <h3>Materiales necesarios</h3>
        <ul>
          {pattern.materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PatternDetail;
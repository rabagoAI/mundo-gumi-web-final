import React from 'react';
import { useParams } from 'react-router-dom';
import bebeDragonImage from '../assets/images/bebe-dragon-2.png';
import perritoKawaiImage from '../assets/images/perrito-kawai-2.png';
import conejitoSaltarin from '../assets/images/conejito-saltarin-2.png';
import luffyChibi from '../assets/images/luffy-2.png';
import miercolesAddamsImage from '../assets/images/miercoles-adams-2.png';
import pikachuImage from '../assets/images/pikachu-2.png';
import stitchImage from '../assets/images/stitch-2.png';
import koalaImage from '../assets/images/koala-2.png';

// Datos completos de los patrones (puedes añadir más detalles aquí)
const patterns = [
  { 
    id: 'bebe-dragon', 
    name: 'Bebé Dragón', 
    image: bebeDragonImage, 
    level: 'Intermedio',
    description: 'Un adorable bebé dragón amigurumi, ideal para regalar. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color verde claro', 'Hilo de color verde oscuro', 'Ojos de seguridad', 'Relleno de fibra', 'Aguja de ganchillo 3.0mm'],
    pdfUrl: 'url-a-tu-pdf-intermedio-1.pdf', // Agrega un campo para el URL del PDF
  },
  { 
    id: 'perrito-kawai', 
    name: 'Perrito Kawai', 
    image: perritoKawaiImage, 
    level: 'Fácil',
    description: 'Un adorable perrito estilo kawai. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color beige ', 'Hilo de color negro', 'Ojos de seguridad o hilo negro para bordar', 'Relleno de fibra', 'Aguja de ganchillo 3.0mm'],
    pdfUrl: 'perrito-kawai.pdf', // Nombre del PDF para el patrón gratuito
  },
  { 
    id: 'conejito-saltarin', 
    name: 'Conejito Saltarín', 
    image: conejitoSaltarin, 
    level: 'Fácil',
    description: 'Un adorable conejito amigurumi. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color beige o blanco', 'Hilo de color negro', 'Ojos de seguridad', 'Relleno de fibra', 'Aguja de ganchillo de 2.5 mm o 3.0mm'],
    pdfUrl: 'conejito-saltarin.pdf', // Nombre del PDF para el patrón gratuito
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
    ],
    pdfUrl: 'url-a-tu-pdf-avanzado-1.pdf', // Agrega un campo para el URL del PDF
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
    ],
    pdfUrl: 'url-a-tu-pdf-intermedio-2.pdf', // Agrega un campo para el URL del PDF
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
    ],
    pdfUrl: 'url-a-tu-pdf-intermedio-3.pdf', // Agrega un campo para el URL del PDF
  },

  {
  id: 'stitch',
  name: 'Stitch',
  image: stitchImage,
  level: 'Avanzado',
  description: 'Una versión detallada del personaje Stitch en amigurumi. Requiere experiencia previa y buen control del ensamblaje de piezas grandes.',
  materials: [
    'Hilo azul oscuro',
    'Hilo azul claro',
    'Hilo lila',
    'Hilo negro y blanco (bordado)',
    'Relleno de fibra',
    'Aguja de ganchillo 2.5mm o 3.0mm',
    'Aguja lanera',
    'Fieltro (opcional para ojos y detalles)'
  ],
   pdfUrl: 'url-a-tu-pdf-avanzado-2.pdf',
},

{
  id: 'koala',
  name: 'Koala',
  image: koalaImage,
  level: 'Intermedio',
  description: 'Un tierno koala tejido a crochet con detalles en orejas y hocico. Ideal para quienes ya dominan las técnicas básicas y quieren practicar el ensamblaje de piezas pequeñas.',
  materials: [
    'Hilo de algodón gris',
    'Hilo de algodón blanco',
    'Hilo negro (bordado de nariz y ojos si no se usan de seguridad)',
    'Relleno de fibra sintética',
    'Aguja de ganchillo 3.0mm',
    'Aguja lanera',
    'Ojos de seguridad de 10 mm'
  ],
  pdfUrl: 'url-a-tu-pdf-intermedio-4.pdf',
}


];

function PatternDetail() {
  const { id } = useParams();
  const pattern = patterns.find(p => p.id === id);

  if (!pattern) {
    return <h2>Patrón no encontrado.</h2>;
  }

  return (
    <section className="pattern-detail-page">
      <div className="pattern-header">
        <img src={pattern.image} alt={pattern.name} className="pattern-detail-image" />
        <div className="pattern-info">
          <h1>{pattern.name}</h1>
          <p><strong>Nivel:</strong> {pattern.level}</p>
          <p>{pattern.description}</p>
          {pattern.level === 'Fácil' ? (
            <a href={`/pdfs/${pattern.pdfUrl}`} download className="download-button">
              Descargar Patrón (PDF)
            </a>
          ) : (
            <a href={pattern.pdfUrl} className="download-button">
              Comprar Patrón (PDF)
            </a>
          )}
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
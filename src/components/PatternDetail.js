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
import supermanImage from '../assets/images/superman-2.png';
import alienigenaImage from '../assets/images/alienigena-2.png';
import ositoKawaii from '../assets/images/osito-kawaii-2.png';
import lilo from '../assets/images/lilo-2.png';
import pinguino from '../assets/images/pinguino-2.png';

// Datos completos de los patrones
const patterns = [
  {
    id: 'bebe-dragon',
    name: 'Bebé Dragón',
    image: bebeDragonImage,
    level: 'Intermedio',
    description: 'Un adorable bebé dragón amigurumi, ideal para regalar. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color verde claro', 'Hilo de color verde oscuro', 'Ojos de seguridad', 'Relleno de fibra', 'Aguja de ganchillo 3.0mm'],
    pdfUrl: 'bebe-dragon.pdf',
  },
  {
    id: 'perrito-kawai',
    name: 'Perrito Kawai',
    image: perritoKawaiImage,
    level: 'Fácil',
    description: 'Un adorable perrito estilo kawai. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color beige ', 'Hilo de color negro', 'Ojos de seguridad o hilo negro para bordar', 'Relleno de fibra', 'Aguja de ganchillo 3.0mm'],
    pdfUrl: 'perrito-kawai.pdf',
  },
  {
    id: 'conejito-saltarin',
    name: 'Conejito Saltarín',
    image: conejitoSaltarin,
    level: 'Fácil',
    description: 'Un adorable conejito amigurumi. Requiere puntos básicos y algunas técnicas de unión.',
    materials: ['Hilo de color beige o blanco', 'Hilo de color negro', 'Ojos de seguridad', 'Relleno de fibra', 'Aguja de ganchillo de 2.5 mm o 3.0mm'],
    pdfUrl: 'conejito-saltarin.pdf',
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
    pdfUrl: 'luffy.pdf',
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
    pdfUrl: 'miercoles-addams.pdf',
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
    pdfUrl: 'pikachu.pdf',
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
    pdfUrl: 'stitch.pdf',
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
    pdfUrl: 'koala.pdf',
  },
  {
    id: 'superman-amigurumi',
    name: 'Superman',
    image: supermanImage,
    level: 'Intermedio',
    description: 'Amigurumi de Superman con capa y emblema en el pecho. Requiere ensamblaje de piezas, cambios de color y algo de bordado para el emblema.',
    materials: [
      'Hilo color piel (para la cabeza)',
      'Hilo negro para el cabello',
      'Hilo azul (traje)',
      'Hilo rojo (capa y botas)',
      'Hilo amarillo (cinturón / fondo del emblema)',
      'Ojos de seguridad 8-10 mm o fieltro',
      'Relleno de fibra sintética',
      'Aguja de ganchillo 2.5 mm o 3.0 mm',
      'Aguja lanera y tijeras',
      'Fieltro rojo/amarillo (opcional para el emblema)'
    ],
    pdfUrl: 'superman.pdf',
  },
  {
    id: 'alienigena',
    name: 'Alienígena',
    image: alienigenaImage,
    level: 'Intermedio',
    description: 'Amigurumi de alienígena verde con antenas, orejas grandes y cuerpo en dos colores. Requiere cambios de color, ensamblaje de piezas y colocación de ojos de seguridad.',
    materials: [
      'Hilo verde (cabeza, antenas, orejas, brazos, piernas)',
      'Hilo azul (cintura y parte inferior del cuerpo)',
      'Hilo negro (boca y detalles bordados)',
      'Hilo blanco (parte blanca de los ojos)',
      'Ojos de seguridad grandes (12-14 mm)',
      'Relleno de fibra sintética',
      'Aguja de ganchillo 2.5 mm o 3.0 mm',
      'Aguja lanera y tijeras'
    ],
    pdfUrl: 'alienigena.pdf',
  },
  {
    id: 'osito-kawaii',
    name: 'Osito Kawaii Amarillo',
    image: ositoKawaii,
    level: 'Fácil',
    description: 'Amigurumi de osito kawaii en color amarillo con detalles en blanco y rosa. Ideal para principiantes, ya que utiliza puntos básicos y pocas piezas para ensamblar.',
    materials: [
      'Hilo de algodón amarillo, blanco y rosa claro',
      'Ojos de seguridad (8 mm)',
      'Relleno de fibra',
      'Aguja de ganchillo 2.5 mm o 3.0 mm',
      'Aguja lanera para coser',
      'Marcador de vueltas',
      'Tijeras'
    ],
    pdfUrl: 'osito-kawaii.pdf',
  },
  {
    id: 'lilo',
    name: 'Lilo',
    image: lilo,
    level: 'Intermedio',
    description: 'Amigurumi inspirado en Lilo, con vestido multicolor, cabello con coletas y flor en el lateral. Ideal para practicar cambios de color y montaje de piezas.',
    materials: [
      'Hilo de algodón color piel, negro, rojo, verde, amarillo y turquesa',
      'Hilo rosa para la flor',
      'Ojos de seguridad de 12 mm o fieltro marrón/blanco/negro',
      'Relleno de fibra sintética',
      'Aguja de ganchillo 2.5 mm o 3.0 mm',
      'Aguja lanera y tijeras',
      'Marcador de vueltas',
      'Pegamento textil (opcional)'
    ],
    pdfUrl: 'lilo.pdf',
  },

  {
    id: 'pinguino',
    name: 'Pinguino',
    image: pinguino,
    level: 'Fácil',
    description: 'Amigurumi de pingüino kawaii con cuerpo negro y blanco, pico y patitas naranjas, y opción de mejillas rosas. Ideal para principiantes, con formas sencillas y piezas fáciles de ensamblar.',
    materials: [
      'Hilo de algodón negro, blanco, naranja y rosa (opcional)',
      'Ojos de seguridad (10-12 mm)',
      'Relleno de fibra sintética',
      'Aguja de ganchillo 2.5 mm o 3.0 mm',
      'Aguja lanera para coser',
      'Marcador de vueltas',
      'Tijeras'
    ],
    pdfUrl: 'pinguino.pdf',
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
          <a href={`/pdfs/${pattern.pdfUrl}`} download className="download-button">
            Descargar Patrón (PDF)
          </a>
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
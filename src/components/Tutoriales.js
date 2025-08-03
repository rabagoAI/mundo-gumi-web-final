import React from 'react';
import './Tutoriales.css'; // Importamos el archivo CSS

// Datos de ejemplo para los tutoriales
const tutorials = [
  { 
    id: 1, 
    title: 'Punto Bajo: El Básico', 
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Tutorial+Punto+Bajo', 
    description: 'Aprende el punto bajo, la base de todos los amigurumis.',
    link: 'https://www.youtube.com/watch?v=tu_enlace_a_youtube'
  },
  { 
    id: 2, 
    title: 'Círculo Mágico: Sin secretos', 
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Tutorial+Circulo+Magico', 
    description: 'Domina el círculo mágico para empezar tus proyectos sin fallos.',
    link: 'https://www.youtube.com/watch?v=tu_otro_enlace_a_youtube'
  },
  { 
    id: 3, 
    title: 'Cambio de Color Invisible', 
    thumbnail: 'https://via.placeholder.com/300x200.png?text=Tutorial+Cambio+Color', 
    description: 'Técnica avanzada para cambiar de color sin que se note la unión.',
    link: 'https://www.youtube.com/watch?v=tu_tercer_enlace_a_youtube'
  },
];

function Tutoriales() {
  return (
    <section className="tutoriales-page">
      <h1>Tutoriales de Ganchillo</h1>
      <p>Aprende las técnicas básicas y avanzadas para crear amigurumis perfectos.</p>
      <div className="tutoriales-grid">
        {tutorials.map(tutorial => (
          <div key={tutorial.id} className="tutorial-card">
            <img src={tutorial.thumbnail} alt={tutorial.title} />
            <div className="card-content">
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className="tutorial-link">
                Ver tutorial
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tutoriales;
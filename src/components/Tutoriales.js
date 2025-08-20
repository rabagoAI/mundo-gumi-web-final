import React from 'react';
import './Tutoriales.css'; // Importamos el archivo CSS

// Datos de ejemplo para los tutoriales
const tutorials = [
  

  { 
    id: 1, 
    title: 'Aprende el anillo mágico desde cero', 
    thumbnail: 'https://img.youtube.com/vi/YwZJ8Qf_jgA/mqdefault.jpg', 
    description: 'Domina el cpunto bajo o medio punto; lo más básico para que te inicies en esta bonita técnica. ',
    link: 'https://www.youtube.com/watch?v=YwZJ8Qf_jgA'
  },

  { 
    id: 2, 
    title: 'Punto bajo y vueltas iniciales', 
    thumbnail: 'https://img.youtube.com/vi/QqKZLDk-4OY/mqdefault.jpg', 
    description: 'Domina el círculo mágico para empezar tus proyectos sin fallos.',
    link: 'https://www.youtube.com/watch?v=QqKZLDk-4OY'
  },

  { 
    id: 3, 
    title: 'Ballenita Amigurumi Blue Bubalu', 
    thumbnail: 'https://img.youtube.com/vi/EYnF3y1TGKY/mqdefault.jpg', 
    description: 'Domina el círculo mágico para empezar tus proyectos sin fallos.',
    link: 'https://youtu.be/EYnF3y1TGKY?si=-5GICk0qR5DWX-Q1'
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
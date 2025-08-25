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
  
  { 
    id: 4, 
    title: 'Capibara con mochila', 
    thumbnail: 'https://img.youtube.com/vi/1GxbBTYDYWk/mqdefault.jpg', 
    description: 'Realicemos a este lindo Capybara con Mochila.',
    link: 'https://www.youtube.com/watch?v=1GxbBTYDYWk'
  },

  { 
    id: 5, 
    title: 'Cinnamoroll Amigurumi Llavero', 
    thumbnail: 'https://img.youtube.com/vi/ZL4cT0tfJHg/mqdefault.jpg', 
    description: 'En este tutorial vas a aprender a realizar este hermoso llaverito de Cinnamoroll.',
    link: 'https://www.youtube.com/watch?v=ZL4cT0tfJHg'
  },

  { 
    id: 6, 
    title: 'Jirafa a Crochet', 
    thumbnail: 'https://img.youtube.com/vi/uIyEbGoCKPQ/mqdefault.jpg', 
    description: '🦒Fácil de hacer, perfecta para tu colección o para regalar.',
    link: 'https://www.youtube.com/watch?v=uIyEbGoCKPQ'
  },
  
  
  { 
    id: 7, 
    title: 'Llavero cocodrilo', 
    thumbnail: 'https://img.youtube.com/vi/Ph2BTTouMz4/mqdefault.jpg', 
    description: 'Este amigurumi cocodrilo en miniatura es súper fácil de tejer y queda precioso.',
    link: 'https://www.youtube.com/watch?v=Ph2BTTouMz4'
  },

  { 
    id: 8, 
    title: 'Merlina tutorial amigurumi crochet', 
    thumbnail: 'https://img.youtube.com/vi/sMhHOpMaZyA/mqdefault.jpg', 
    description: 'Sean bienvenidos a estes precioso y terrorífico video tutorial de Merlina',
    link: 'https://www.youtube.com/watch?v=sMhHOpMaZyA'
  },

  { 
    id: 9, 
    title: 'Cómo tejer un Mini Kirby a crochet', 
    thumbnail: 'https://img.youtube.com/vi/we_GpjaHQUs/mqdefault.jpg', 
    description: 'Es pequeñito, esponjoso y muy adorable💕',
    link: 'https://www.youtube.com/watch?v=we_GpjaHQUs'
  },

  { 
    id: 10, 
    title: 'Lindos llavero a crochet/ llavero amigurumi de oso y conejita a crochet patrón gratis', 
    thumbnail: 'https://img.youtube.com/vi/BMd6xIGMbsc/mqdefault.jpg', 
    description: 'Teje estos lindos y adorables llaveros amigurumi',
    link: 'https://www.youtube.com/watch?v=BMd6xIGMbsc'
  },


  { 
    id: 11, 
    title: 'Cómo tejer a Snoopy en crochet | Amigurumi paso a paso fácil', 
    thumbnail: 'https://img.youtube.com/vi/PB0qIqc_OJI/mqdefault.jpg', 
    description: '¿Quieres tejer a Snoopy, el perrito más famoso de Peanuts? 🐾',
    link: 'https://www.youtube.com/watch?v=PB0qIqc_OJI'
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
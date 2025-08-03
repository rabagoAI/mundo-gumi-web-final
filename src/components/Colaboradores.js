import React from 'react';
import './Colaboradores.css'; // Importamos el archivo CSS

// Datos de ejemplo para los patrones de colaboradores
const collaborators = [
  { 
    id: 1, 
    name: 'Unicornio Mágico', 
    image: 'https://via.placeholder.com/300x300.png?text=Unicornio', 
    creator: 'Creadora A',
    link: 'https://www.enlace-de-afiliado.com/patron-unicornio'
  },
  { 
    id: 2, 
    name: 'Gatito Aventurero', 
    image: 'https://via.placeholder.com/300x300.png?text=Gatito', 
    creator: 'Creadora B',
    link: 'https://www.enlace-de-afiliado.com/patron-gatito'
  },
  { 
    id: 3, 
    name: 'Zorrito Tierno', 
    image: 'https://via.placeholder.com/300x300.png?text=Zorrito', 
    creator: 'Creadora C',
    link: 'https://www.enlace-de-afiliado.com/patron-zorrito'
  },
];

function Colaboradores() {
  return (
    <section className="colaboradores-page">
      <h1>Patrones de Colaboradores</h1>
      <p>Explora increíbles creaciones de diseñadores talentosos de todo el mundo.</p>
      <div className="colaboradores-grid">
        {collaborators.map(collaborator => (
          <div key={collaborator.id} className="collaborator-card">
            <img src={collaborator.image} alt={collaborator.name} />
            <h3>{collaborator.name}</h3>
            <p className="creator-name">por {collaborator.creator}</p>
            <a href={collaborator.link} target="_blank" rel="noopener noreferrer" className="collaborator-link">
              Comprar en su tienda
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Colaboradores;
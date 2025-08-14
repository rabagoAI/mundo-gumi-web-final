// src/pages/RecursosPage.js
import React from 'react';
import './RecursosPage.css';

// Aquí defines los datos de los productos que vas a recomendar
const recommendedProducts = [
  {
    category: 'Lanas y Hilos',
    items: [
      {
        name: 'Ovillos de 30 para amigurumi',
        imageUrl: 'https://m.media-amazon.com/images/I/81KazRsUyVL._AC_SX425_.jpg',
        description: 'Está hecho de 100% acrílico, que tiene propiedades similares a la lana. El vellón de punto es suave y cálido, menos bolitas, resistente al desgarro y fácil de limpiar. Los colores son brillantes y ricos, hay 30 colores de ganchillo para elegir y el precio es asequible',
        amazonLink: 'https://amzn.to/4lsWsmD' // ¡Pega aquí tu enlace de afiliado!
      },
      // Puedes añadir más lanas aquí como otro objeto
      {
        name: '10 miniovillos en diferentes colores',
        imageUrl: 'https://m.media-amazon.com/images/I/71Z0uh3dXDL._AC_SX679_.jpg',
        description: 'Suave y fácil de cuidar: el algodón certificado OEKO-TEX es agradablemente suave, duradero y se puede lavar fácilmente a 40 °C en un ciclo suave',
        amazonLink: 'https://amzn.to/45tYWv6'
      }
    ]
  },
  // ... (otras categorías como Ganchos, Kits, etc.)
];

function RecursosPage() {
  // ... (el resto del código es el mismo)
  return (
    <div className="recursos-page">
      <h1>Recursos y Herramientas Recomendadas</h1>
      <p>
        Aquí encontrarás una selección de mis materiales favoritos y las herramientas esenciales para tejer amigurumis.
      </p>

      {recommendedProducts.map((categoryGroup, index) => (
        <div key={index} className="category-section">
          <h2>{categoryGroup.category}</h2>
          <div className="product-list">
            {categoryGroup.items.map((product, prodIndex) => (
              <div key={prodIndex} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="buy-button">
                  Ver en Amazon
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecursosPage;
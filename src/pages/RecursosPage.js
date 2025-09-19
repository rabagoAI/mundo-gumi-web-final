// src/pages/RecursosPage.js
import React from 'react';
import './RecursosPage.css';

// Aquí defines los datos de los productos que vas a recomendar
const recommendedProducts = [
  {
    category: 'Lanas y Materiales',
    items: [
      
      // Puedes añadir más lanas aquí como otro objeto

      {
        name: 'Perlé - hilo algodón mercerizado, muy suave, hilo de tejer, hilo de ganchillo (50 gr/ovillo ; 12 colores)',
        imageUrl: 'https://m.media-amazon.com/images/I/71GNmVzWtWL._AC_SX679_.jpg',
        description: 'Experimenta la suavidad del hilo de algodón Perlé mercerizado de Lidia Crochet Tricot.',
        amazonLink: 'https://amzn.to/4nCj5qf' // ¡Pega aquí tu enlace de afiliado!
      },

      {
        name: '100 ojos de seguridad para animales de ganchillo, 6/8/9/10/12 mm',
        imageUrl: 'https://m.media-amazon.com/images/I/71ioTQ7OPBL._AC_SX679_.jpg',
        description: 'Juego de ojos Amigurumi: recibirás 100 piezas de ojos de seguridad, 100 arandelas y 1 caja de almacenamiento. ',
        amazonLink: 'https://amzn.to/4grhkcY'
      },


      {
        name: '10 miniovillos en diferentes colores',
        imageUrl: 'https://m.media-amazon.com/images/I/71Z0uh3dXDL._AC_SX679_.jpg',
        description: 'Suave y fácil de cuidar: el algodón certificado OEKO-TEX es agradablemente suave, duradero y se puede lavar fácilmente a 40 °C en un ciclo suave',
        amazonLink: 'https://amzn.to/45tYWv6'
      },

      
      {
        name: 'Hilo para Tejer a Crochet, ilauke 20 * 30g Ovillo de Lana con 2 Ganchos de Ganchillo, 2 Agujas, 8 Marcadores y Bolsos Verdes, Lana Acrílico Multicolor',
        imageUrl: 'https://m.media-amazon.com/images/I/71oGgvUA4mL._AC_SX679_.jpg',
        description: 'Lana para tejer ilauke está hecho de resina acrílica muy suave, cálida y duradera. 20pcs hilos acrílicos de diferentes colores, cada bola pesa aproximadamente 30g 4 capas, de brillantes a oscuros, para múltiples proyectos o que requieren varios hilos ultrasuaves.',
        amazonLink: 'https://amzn.to/41LmgTZ'
      },

      {
        name: 'Gründl Amigurumi Kit de Ganchillos',
        imageUrl: 'https://m.media-amazon.com/images/I/81EpMGohUHL._AC_SX679_.jpg',
        description: 'HECHO PARA AMIGURUMI: Los coloridos mini ovillos con una tirada de 10 g/23 m (tamaño de aguja: 3-4) son perfectos para amigurumi de calceta o ganchillo.',
        amazonLink: 'https://amzn.to/45zjWR3'
      },

      {
        name: 'Hilo de tejer - 42 piezas Hilo de algodón.2 Agujas de Ganchillo para patrones, proyectos y apliques',
        imageUrl: 'https://m.media-amazon.com/images/I/91FAc-EegzL._AC_SX679_.jpg',
        description: '42 COLORIDOS OVILLOS CROCHET: Este set tiene 42 bolas de hilo con colores surtidos. Cada madeja de hilos para crochet está hecha de algodón, pesa 10 gramos y tiene un largo de 60 metros.',
        amazonLink: 'https://amzn.to/4oK2hig'
      },

      {
        name: 'Algodón de Relleno, altam.frisado, Copos, 100% poliéster, Blanco, 500 g',
        imageUrl: 'https://m.media-amazon.com/images/I/71B75gg5tqL._AC_SY879_.jpg',
        description: 'Relleno de algodón, ideal para rellenar peluches, almohadas, cojines, almohadones de todo tipo y para otras manualidades',
        amazonLink: 'https://amzn.to/4fL6nTk'
      },

      {
        name: '14 PCS Agujas de Ganchillos Kit de Ganchillos Accesorios con Bolsa Kit Conjunto de Ganchillo',
        imageUrl: 'https://m.media-amazon.com/images/I/71swvIeA9aL._AC_SX425_.jpg',
        description: 'Las agujas de punto de ganchillo son un regalo ideal para madres, niños, niñas, estudiantes universitarios, principiantes, etc. El kit de costura es perfecto para hombres y mujeres, el mejor regalo para familiares y amigos.',
        amazonLink: 'https://amzn.to/47b94vm'
      },

      {
        name: 'Coopay Agujas de Ganchillo, 9 piezas de Ganchillo Negro Clásico con Gancho de Aluminio Dorado',
        imageUrl: 'https://m.media-amazon.com/images/I/71rZcJtdoLS._AC_SX679_.jpg',
        description: 'MANGO ERGONÓMICO FABRICADO EN SÍLICE SUAVE: el mango de ganchillo negro está hecho de silicona blanda. La parte plana del agarre para el pulgar tiene un diseño ergonómico y es fácil de agarrar.',
        amazonLink: 'https://amzn.to/4lNtKNs'
      },

      {
        name: 'AUAUY Hilo Que Brilla en la Oscuridad, 2 Rollos de Hilo Luminoso',
        imageUrl: 'https://m.media-amazon.com/images/I/710-tHRyC1L._AC_SX425_.jpg',
        description: '🧶 【BRILLA EN LA OSCURIDAD】 El hilo que brilla en la oscuridad es conveniente y fácil de usar, y el efecto brillante se basa en la luz ultravioleta. Simplemente colóquelo bajo la luz del sol antes de usarlo, deje que absorba completamente la luz, de modo que pueda ser más brillante por la noche, lo que permite que sus manualidades de costura y tejido sean más llamativas.',
        amazonLink: 'https://amzn.to/3JRbPIg'
      },

      {
        name: '8 ovillos de hilo de ganchillo grueso para principiantes',
        imageUrl: 'https://m.media-amazon.com/images/I/81r9n0VjFcL._AC_SX679_.jpg',
        description: 'Disponible en 8 colores diferentes: morado claro, amarillo claro, caqui, beige, verde sauce, rosa begonia, rosa cereza, azul aguamarina.',
        amazonLink: 'https://amzn.to/47uqIKz'
      },

      
      


    ]
  },

  {
    category: 'Kit Amigurumis',
    items: [
      {
        name: 'Kit de ganchillo para principiantes proporciona todo lo necesario para tejer',
        imageUrl: 'https://m.media-amazon.com/images/I/71JCIDP+uNL._AC_SX679_.jpg',
        description: 'Nuestro kit crochet principiantes viene con tutoriales en vídeo fáciles de seguir paso a paso, incluyendo cómo leer el manual',
        amazonLink: 'https://amzn.to/3Uslfwa'
      },
      
      {
        name: 'Juego de Animales de Ganchillo para Principiantes',
        imageUrl: 'https://m.media-amazon.com/images/I/71uGXqDjdvL._AC_SX679_.jpg',
        description: 'Siga fácilmente las instrucciones a todo color y los videotutoriales paso a paso para hacer lindos hámsteres, medusas y ranas.',
        amazonLink: 'https://amzn.to/3Jh3P3f'
      },

      {
        name: 'Kits de crochet para niños y adultos con tutoriales en video paso a paso',
        imageUrl: 'https://m.media-amazon.com/images/I/71iqtuyt-LL._AC_SX679_.jpg',
        description: 'Incluye los kits de crochet: 3 kits de crochet con lindos animales (Conejo, Pingüino y Pollito) para principiantes.',
        amazonLink: 'https://amzn.to/45Mticl'
      },

      {
        name: 'Kit de Manualidades para Adultos y adolescentes: Kit de crochet y Ganchillo Fácil para Crear Amigurumi - Ideal Principiantes.',
        imageUrl: 'https://m.media-amazon.com/images/I/81Dcmrdi3pL._AC_SX679_.jpg',
        description: 'Este kit crochet principiantes incluye lanas para crochet de colores vibrantes y un hilo crochet suave donde podrás realizar 6 figuaras.',
        amazonLink: 'https://amzn.to/4nkpdDy'
      },


      

    ]
  },



  {
    category: 'Libros Amigurumis',
    items: [
      {
        name: 'Simpáticos Muñecos De Ganchillo Minis Amigurumis',
        imageUrl: 'https://m.media-amazon.com/images/I/91TAHvWCVYL._SY385_.jpg',
        description: 'Nuevos y sorprendentes minis Amigurumi de ganchillo Aviones, casitas, peces globo y dulces fresas, monstruos con tres ojos y naves espaciales.',
        amazonLink: 'https://amzn.to/47izj35'
      },
      
      {
        name: 'La banda de Pica Pau. 20 divertidos amigurumis',
        imageUrl: 'https://m.media-amazon.com/images/I/71Ag1QDVtnL._SY342_.jpg',
        description: 'Siga fácilmente las instrucciones a todo color y los videotutoriales paso a paso para hacer lindos hámsteres, medusas y ranas.',
        amazonLink: 'https://amzn.to/4lz3qGR'
      },

      {
        name: 'La banda de Pica Pau 2',
        imageUrl: 'https://m.media-amazon.com/images/I/71lV6W+CNXL._SY342_.jpg',
        description: '¡La banda de muñecos de crochet más famosa del mundo ataca de nuevo! Disfruta de los nuevos integrantes creados por la diseñadora Yan Schenkel y de sus sencillas y maravillosas historias. ',
        amazonLink: 'https://amzn.to/3V3Cx2L'
      },


      {
        name: 'Mascotas de ganchillo. Animales de ganchillo tiernos, simpáticos e imaginativos',
        imageUrl: 'https://m.media-amazon.com/images/I/612Jfj8VHIL._SY385_.jpg',
        description: '¡Prepárate para divertirte con un rinoceronte suave, un elefante nostálgico que sabe cómo colarse en la cocina y un tigre caballeroso...!',
        amazonLink: 'https://amzn.to/47uP5b0'
      },

      {
        name: 'Amigurumi De La Prehistoria: 14 proyectos de dinosaurios, mamuts, cavernícolas y otros muñecos de ganchillo',
        imageUrl: 'https://m.media-amazon.com/images/I/91zNksJuLUL._SY385_.jpg',
        description: 'Principiantes y expertos tejedores de ganchillo podrán crear estos sorprendentes Amigurumi. ',
        amazonLink: 'https://amzn.to/423AnnY'
      },

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
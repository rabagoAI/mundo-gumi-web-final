import React from 'react';
import './Tutoriales.css'; // Importamos el archivo CSS

// Datos de ejemplo para los tutoriales
const tutorials = [

  { 
    id: 39, 
    title: 'Perro Salchicha a Crochet 🦴 Tutorial paso a paso - Amigurumi - Patrón Gratis 🤎', 
    thumbnail: 'https://img.youtube.com/vi/HhU5skomyM8/mqdefault.jpg', 
    description: '❤️ En este tutorial de crochet vamos a tejer un mini perro salchicha paso a paso 🐾 Ideal para regalar y decorar 🐕 ¡Es super tierno y rápido de hacer! 🐶✨. Si quieres el patrón escrito entra a la tienda de Etsy en la descripción',
    link: 'https://www.youtube.com/watch?v=HhU5skomyM8'
  },


  { 
    id: 38, 
    title: 'LOBO FEROZ Patrón en Video Español e Ingles- Amigurumi Tutorial', 
    thumbnail: 'https://img.youtube.com/vi/QxeH04N4Kks/mqdefault.jpg', 
    description: 'Aprende a tejer este precioso lobo feroz amigurumi con nuestro tutorial paso a paso.',
    link: 'https://www.youtube.com/watch?v=QxeH04N4Kks'
  },

  { 
    id: 37, 
    title: 'Dinosaurio amigurumi - paso a paso', 
    thumbnail: 'https://img.youtube.com/vi/2hcCm0zHyCI/mqdefault.jpg', 
    description: 'Aprende a tejer este adorable dinosaurio amigurumi con nuestro tutorial paso a paso. ¡Perfecto para principiantes y amantes del crochet!',
    link: 'https://www.youtube.com/watch?v=2hcCm0zHyCI'
  },

  
  { 
    id: 35, 
    title: '🧜‍♀️ Sirena Amigurumi en Lana Chenille 💕', 
    thumbnail: 'https://img.youtube.com/vi/DgjOJ_w-OYA/mqdefault.jpg', 
    description: '✨🧜‍♀️ Hoy tejemos una Sirena Amigurumi en lana chenille (plush), un proyecto suavecito y adorable que puedes adaptar al tamaño que prefieras',
    link: 'https://www.youtube.com/watch?v=DgjOJ_w-OYA'
  },

  { 
    id: 34, 
    title: '🎃Espantapájaros mini a crochet | Amigurumi colección de Halloween', 
    thumbnail: 'https://img.youtube.com/vi/MxIW-0GOy28/mqdefault.jpg', 
    description: '✨¡Hola!  Bienvenid@s a Patoys, en este video aprenderás a tejer un espantapájaros mini a crochet 👻🧶',
    link: 'https://www.youtube.com/watch?v=MxIW-0GOy28'
  },

  { 
    id: 32, 
    title: 'Rosita Fresita Amigurumi Tutorial Paso a Paso 🌸', 
    thumbnail: 'https://img.youtube.com/vi/dXYly87s4bo/mqdefault.jpg', 
    description: 'Espero que este video te sea útil y te anime a crear tu propia muñequita 💕',
    link: 'https://www.youtube.com/watch?v=dXYly87s4bo'
  },


  { 
    id: 33, 
    title: '🧙‍♀️ BAMBOLA BRUJITA AMIGURUMI A CROCHET ', 
    thumbnail: 'https://img.youtube.com/vi/s4kaqKnhAvg/mqdefault.jpg', 
    description: 'Bienvenidos a este su canal, donde aprenderan a tejer y crear amigurumis a crochet desde cero.',
    link: 'https://www.youtube.com/watch?v=s4kaqKnhAvg'
  },

  { 
    id: 25, 
    title: 'Pollito con girasol amigurumi | Tejidos Joss |', 
    thumbnail: 'https://img.youtube.com/vi/LTuwZGmKTzs/mqdefault.jpg', 
    description: 'Hola a todos 😊 hoy vamos hacer un pollito con girasol amigurumi',
    link: 'https://www.youtube.com/watch?v=LTuwZGmKTzs'
  },
  
  { 
    id: 26, 
    title: 'Dinosaurio / Crochet / Paso a Paso / Amigurumi / Brontosaurio', 
    thumbnail: 'https://img.youtube.com/vi/u8SSA0Bn5NE/mqdefault.jpg', 
    description: 'En el video de hoy realizaremos este lindo Dino!Espero que les guste y que disfruten el video que esta hecho con ♥️',
    link: 'https://www.youtube.com/watch?v=u8SSA0Bn5NE'
  },

  { 
    id: 27, 
    title: 'Rayo McQueen y Sally a crochet 🚗', 
    thumbnail: 'https://img.youtube.com/vi/VH1LVmhg8PM/mqdefault.jpg', 
    description: 'Aprende a tejer a Rayo McQueen y Sally en crochet con este tutorial paso a paso. 🧵✨',
    link: 'https://www.youtube.com/watch?v=VH1LVmhg8PM'
  },

  { 
    id: 28, 
    title: 'TOKITO MUICHIRO AMIGURUMI  / KIMETSU NO YAIBA / Parte 1 de 3', 
    thumbnail: 'https://img.youtube.com/vi/Jnf9cpVIq-s/mqdefault.jpg', 
    description: 'En este tutorial vamos a comenzar a  realizar a TOKITO MUICHIRO el Pilar de la NIEBLA, personaje del anime Kimetsu no Yaiba realizado a crochet con la técnica de Amigurumi.',
    link: 'https://www.youtube.com/watch?v=Jnf9cpVIq-s'
  },

  { 
    id: 29, 
    title: 'TOKITO MUICHIRO AMIGURUMI  / KIMETSU NO YAIBA / Parte 2 de 3', 
    thumbnail: 'https://img.youtube.com/vi/xHg4P3fXBdA/mqdefault.jpg', 
    description: 'En este  video continuamos tejiendo a  TOKITO MUICHIRO el Pilar de la NIEBLA.',
    link: 'https://www.youtube.com/watch?v=xHg4P3fXBdA'
  },

  { 
    id: 30, 
    title: 'TOKITO MUICHIRO AMIGURUMI  / KIMETSU NO YAIBA / Parte 3 de 3', 
    thumbnail: 'https://img.youtube.com/vi/NjX7GkmiL4g/mqdefault.jpg', 
    description: 'En este tutorial terminaremos de tejer a TOKITO MUICHIRO.',
    link: 'https://www.youtube.com/watch?v=NjX7GkmiL4g'
  },


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

  { 
    id: 12, 
    title: 'Rumi Kpop Demon Hunters Amigurumi | CatalinArte Tejidos', 
    thumbnail: 'https://img.youtube.com/vi/S9i4Np3TCX8/mqdefault.jpg', 
    description: 'Holiiiis hoy empezamos los tutoriales de las Huntrix a pedido de ustedes :) y la primera es Rumi obviiiiio',
    link: 'https://www.youtube.com/watch?v=S9i4Np3TCX8'
  },

  { 
    id: 13, 
    title: 'ZOEY Huntrix Tutorial Amigurumi | Parte1 | Aligurumy', 
    thumbnail: 'https://img.youtube.com/vi/MtsVzJtDT1I/mqdefault.jpg', 
    description: '💫Me alegra mucho poder enseñarles a tejer a Zoey de la pelicula de K-pop Demon Hunters en version Amigurumi💫',
    link: 'https://www.youtube.com/watch?v=MtsVzJtDT1I'
  },

  { 
    id: 14, 
    title: 'ZOEY Huntrix Tutorial Amigurumi | Parte2 | Aligurumy', 
    thumbnail: 'https://img.youtube.com/vi/KlsrkMHN2W8/mqdefault.jpg', 
    description: 'En esta Segunda parte aprenderás hacer los Detalles de los Ojos y el Cabello🔥',
    link: 'https://www.youtube.com/watch?v=KlsrkMHN2W8'
  },

  { 
    id: 15, 
    title: 'RENGOKU Tutorial Amigurumi | Parte1 | Aligurumy', 
    thumbnail: 'https://img.youtube.com/vi/8A0Sh1DF0Zc/mqdefault.jpg', 
    description: '💫Me alegra mucho poder enseñarles a tejer a Rengoku del anime de Kimetsu No Yaiba en version Amigurumi💫',
    link: 'https://www.youtube.com/watch?v=8A0Sh1DF0Zc'
  },

  { 
    id: 15, 
    title: 'RENGOKU Tutorial Amigurumi | Parte2 | Aligurumy', 
    thumbnail: 'https://img.youtube.com/vi/dLHEo3lYnUo/mqdefault.jpg', 
    description: 'En esta Segunda parte aprenderás hacer los Detalles de los Ojos y el Cabello🔥',
    link: 'https://www.youtube.com/watch?v=dLHEo3lYnUo'
  },

  { 
    id: 16, 
    title: 'Cómo tejer un labubu | Amigurumi Tutorial Paso a Paso', 
    thumbnail: 'https://img.youtube.com/vi/NJ2FjWcwP_8/mqdefault.jpg', 
    description: 'Te enseño a tejer un hermoso Labubu para Halloween. Mide 15 cm y el resultado te encantará 🧡🎃',
    link: 'https://www.youtube.com/watch?v=NJ2FjWcwP_8'
  },

  { 
    id: 17, 
    title: 'BAMBOLA MUÑEQUITA LELE MEXICANA AMIGURUMI / TEJIDA FACIL / TUTORIAL PASO A PASO', 
    thumbnail: 'https://img.youtube.com/vi/bJ-PjPff5mc/mqdefault.jpg', 
    description: 'Aprende a tejer una lina Bambola de muñeca Lele mexicana.',
    link: 'https://www.youtube.com/watch?v=bJ-PjPff5mc'
  },

  { 
    id: 18, 
    title: 'Capuchino asesino amigurumi', 
    thumbnail: 'https://img.youtube.com/vi/kgAmG1rxKTo/mqdefault.jpg', 
    description: 'Aprende a tejer este bonito amigurumi de la colección de memes italianos.',
    link: 'https://www.youtube.com/watch?v=kgAmG1rxKTo'
  },

  { 
    id: 19, 
    title: 'Llavero Gatito 🐈|Tejido a Crochet Súper Fácil y Rápido', 
    thumbnail: 'https://img.youtube.com/vi/ygIJ7-Jjszw/mqdefault.jpg', 
    description: 'Holaaa soy Ari y te enseño a tejer este hermoso llavero de gatito muy fácil y rápido de hacer 🐈🧶',
    link: 'https://www.youtube.com/watch?v=ygIJ7-Jjszw'
  },

  { 
    id: 20, 
    title: 'BRUJITA HALLOWEEN. Amigurumi 🎃👻. Tutorial Paso a Paso.🧙‍♀️🧹Emmalu', 
    thumbnail: 'https://img.youtube.com/vi/TznWRzG5OqY/mqdefault.jpg', 
    description: 'En este tutorial te enseño paso a paso como tejer una linda brujita a crochet. Ideal para decorar Halloween.',
    link: 'https://www.youtube.com/watch?v=TznWRzG5OqY'
  },

  { 
    id: 21, 
    title: '✨️Como hacer llavero hamburguesa en crochet | DIY Amigurumi fácil 🍔', 
    thumbnail: 'https://img.youtube.com/vi/mUmXEVn2xpk/mqdefault.jpg', 
    description: 'Es un proyecto divertido y perfecto para regalar o decorar tus llaves, mochila o estuche.',
    link: 'https://www.youtube.com/watch?v=mUmXEVn2xpk'
  },

    { 
    id: 22, 
    title: 'Lilo Hawaiana Amigurumi 🌺 Tutorial Paso a Paso', 
    thumbnail: 'https://img.youtube.com/vi/AgrJU0cQBHM/mqdefault.jpg', 
    description: 'Holis massirañitas en este Tutorial les enseñaré a tejer a Lilo en su versión hawaiana 🌺 espero les sea útil este video 🍄',
    link: 'https://www.youtube.com/watch?v=AgrJU0cQBHM'
  },

  { 
    id: 23, 
    title: 'Corazón tierno con ojos grandes | Cute Heart Crochet | Amigurumi Tutorial | Matti Handcraft', 
    thumbnail: 'https://img.youtube.com/vi/dfqJS04R2OE/mqdefault.jpg', 
    description: '🌸 ¡Hola! Bienvenid@ a Matti Handcrafts 🌸. Es perfecto para regalar en San Valentín, aniversarios o como detalle especial hecho a mano.',
    link: 'https://www.youtube.com/watch?v=dfqJS04R2OE'
  },

  { 
    id: 24, 
    title: '🧛🏻‍♂️Vampiro Amigurumi a Crochet 👉🏻Paso a Paso Fácil para Halloween', 
    thumbnail: 'https://img.youtube.com/vi/uAqLS0M8OgM/mqdefault.jpg', 
    description: '🎃 ¡Bienvenidos a Patoys! 🎃. En este tutorial aprenderás a tejer un Vampiro Amigurumi a crochet, ideal para decorar en Halloween o regalar como detalle especial.',
    link: 'https://www.youtube.com/watch?v=uAqLS0M8OgM'
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
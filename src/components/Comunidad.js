import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'; // Importamos la base de datos
import './Comunidad.css'; 
import CommunityForm from './CommunityForm'; 

function Comunidad() {
  const [communityCreations, setCommunityCreations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "fotosComunidad"));
        const creationsArray = [];
        querySnapshot.forEach((doc) => {
          creationsArray.push({ id: doc.id, ...doc.data() });
        });
        setCommunityCreations(creationsArray);
      } catch (error) {
        console.error("Error al obtener los documentos: ", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCreations();
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  return (
    <section className="comunidad-page">
      <div className="community-header">
        <h1>Mundo Gumi en Comunidad</h1>
        <p>Mira lo que nuestra increíble comunidad está creando con sus manos.</p>
      </div>

      {loading ? (
        <p className="loading-message">Cargando fotos...</p>
      ) : communityCreations.length > 0 ? (
        <div className="community-creations-grid">
          {communityCreations.map(creation => (
            <div key={creation.id} className="creation-card">
              <img src={creation.imageUrl} alt="Creación de la comunidad" />
              <p>Por: {creation.creatorName}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-photos-message">¡Sé el primero en compartir tu creación!</p>
      )}

      <CommunityForm />

      <div className="cta-facebook">
        <h2>¡Únete a nuestra comunidad en Facebook!</h2>
        <p>Comparte tus creaciones, haz preguntas y conoce a otros apasionados del ganchillo.</p>
        <a href="https://www.facebook.com/mundoGumi?locale=es_ES" target="_blank" rel="noopener noreferrer" className="facebook-button">
          Ir a Facebook
        </a>
      </div>
    </section>
  );
}

export default Comunidad;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './EntrevistaIndividual.css';

function EntrevistaIndividual() {
  const { id } = useParams(); // Obtiene el ID de la entrevista de la URL
  const [entrevista, setEntrevista] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEntrevista = async () => {
      if (!id) {
        setError('No se proporcionó un ID de entrevista.');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'entrevistas', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setEntrevista(docSnap.data());
        } else {
          setError('No se encontró la entrevista.');
        }
      } catch (e) {
        setError('Error al cargar la entrevista.');
        console.error("Error al obtener la entrevista: ", e);
      } finally {
        setLoading(false);
      }
    };

    getEntrevista();
  }, [id]); // El efecto se ejecuta cada vez que el ID de la URL cambia

  if (loading) {
    return <div className="entrevista-cargando">Cargando entrevista...</div>;
  }

  if (error) {
    return <div className="entrevista-error">{error}</div>;
  }

  if (!entrevista) {
    return <div className="entrevista-error">La entrevista no está disponible.</div>;
  }
  
  // Aquí puedes renderizar el contenido completo de la entrevista
  return (
    <section className="entrevista-individual-page">
      <img src={entrevista.fotoUrl} alt={entrevista.nombreCreador} className="entrevista-individual-image" />
      <h1>Entrevista a {entrevista.nombreCreador}</h1>
      <div className="entrevista-content">
        <p className="entrevista-pregunta">¿Cuándo y cómo descubriste el mundo del amigurumi?</p>
        <p className="entrevista-respuesta">{entrevista.respuesta1}</p>

        <p className="entrevista-pregunta">¿Recuerdas cuál fue tu primera creación?</p>
        <p className="entrevista-respuesta">{entrevista.respuesta2}</p>
        
        {/* Añade el resto de preguntas y respuestas aquí */}
        <p className="entrevista-pregunta">¿Qué te impulsó a empezar a compartir tus creaciones y patrones con la comunidad?</p>
        <p className="entrevista-respuesta">{entrevista.respuesta3}</p>
        
        <p className="entrevista-pregunta">¿Qué tipo de proyectos disfrutas más tejiendo?</p>
        <p className="entrevista-respuesta">{entrevista.respuesta4}</p>
        
        <p className="entrevista-pregunta">¿Cuál es tu material o tipo de hilo favorito para trabajar?</p>
        <p className="entrevista-respuesta">{entrevista.respuesta5}</p>
        
        <p className="entrevista-pregunta">¿Qué es lo que más valoras de la comunidad de creadores de amigurumi?</p>
        <p className="entrevista-respuesta">{entrevista.respuesta6}</p>
        
        <p className="entrevista-pregunta">¿Tienes algún sueño o meta con tus creaciones a largo plazo?</p>
        <p className="entrevista-respuesta">{entrevista.respuesta7}</p>

        {entrevista.socialMediaLink && (
            <a href={entrevista.socialMediaLink} target="_blank" rel="noopener noreferrer" className="btn-social-media">
                Visita mi perfil
            </a>
        )}
      </div>
    </section>
  );
}

export default EntrevistaIndividual;
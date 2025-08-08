import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './Colaboradores.css';

function Colaboradores() {
  const [colaboradores, setColaboradores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Conectarse a la colección 'colaboradores' de Firestore
    const unsub = onSnapshot(collection(db, 'colaboradores'), (snapshot) => {
      const colaboradoresData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setColaboradores(colaboradoresData);
      setLoading(false);
    });

    // Limpiar la conexión cuando el componente se desmonte
    return () => unsub();
  }, []);

  if (loading) {
    return <h2>Cargando colaboradores...</h2>;
  }

  return (
    <section className="colaboradores-page">
      <h1>Nuestros Colaboradores</h1>
      <p>
        Un espacio dedicado a los talentosos creadores de la comunidad amigurumi.
        ¡Haz clic para ver sus perfiles!
      </p>
      <div className="colaboradores-grid">
        {colaboradores.map(colaborador => (
          <div key={colaborador.id} className="colaborador-card">
            <a href={colaborador.socialMediaLink} target="_blank" rel="noopener noreferrer">
              <img src={colaborador.imageUrl} alt={colaborador.name} className="colaborador-image" />
              <div className="colaborador-info">
                <h3>{colaborador.patternName}</h3>
                <p>Por: {colaborador.name}</p>
              </div>
            </a>
          </div>
        ))}
        {colaboradores.length === 0 && (
          <p>Todavía no hay colaboradores. ¡Pronto verás patrones increíbles aquí!</p>
        )}
      </div>
    </section>
  );
}

export default Colaboradores;
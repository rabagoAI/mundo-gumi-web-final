import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './Colaboradores.css';

function Colaboradores() {
  const [colaboradores, setColaboradores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'colaboradores'), (snapshot) => {
      const colaboradoresData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setColaboradores(colaboradoresData);
      setLoading(false);
    });

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
      </p>
      <div className="colaboradores-grid">
        {colaboradores.map(colaborador => (
          <div key={colaborador.id} className="colaborador-card">
            <img src={colaborador.imageUrl} alt={colaborador.patternName} className="colaborador-image" />
            <div className="colaborador-info">
              <a href={colaborador.patternLink} target="_blank" rel="noopener noreferrer" className="pattern-link-button">
                {colaborador.patternName}
              </a>
              <p>
                Por: <a href={colaborador.socialMediaLink} target="_blank" rel="noopener noreferrer" className="creator-link-button">
                        {colaborador.name}
                     </a>
              </p>
            </div>
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
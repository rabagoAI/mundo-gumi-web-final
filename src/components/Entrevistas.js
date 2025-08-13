// src/components/Entrevistas.js

import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import './Entrevistas.css';

function Entrevistas() {
  const [entrevistas, setEntrevistas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'entrevistas'), (snapshot) => {
      const entrevistasData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEntrevistas(entrevistasData);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) {
    return <h2>Cargando entrevistas...</h2>;
  }

  return (
    <section className="entrevistas-page">
      <h1>Entrevistas a Creadores</h1>
      <p>
        Descubre las historias detrás de los talentosos creadores de nuestra comunidad.
      </p>
      <div className="entrevistas-grid">
        {entrevistas.length > 0 ? (
          entrevistas.map(entrevista => (
            <div key={entrevista.id} className="entrevista-card">
              <img src={entrevista.fotoUrl} alt={entrevista.nombreCreador} className="entrevista-image" />
              <h3>{entrevista.nombreCreador}</h3>
              <p className="entrevista-descripcion">
                {entrevista.descripcionCorta}
              </p>
              <Link to={`/entrevistas/${entrevista.id}`} className="btn-ver-entrevista">
                Ver entrevista completa
              </Link>
            </div>
          ))
        ) : (
          <p>Todavía no hay entrevistas. ¡Pronto subiremos las historias de nuestros creadores!</p>
        )}
      </div>
    </section>
  );
}

export default Entrevistas;
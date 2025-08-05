import React, { useState, useEffect } from 'react';
import './CommunityShowcase.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function CommunityShowcase() {
  const [communityPhotos, setCommunityPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCommunityPhotos = async () => {
      setLoading(true);
      const comunidadRef = collection(db, "comunidad");
      const comunidadSnapshot = await getDocs(comunidadRef);
      const photosList = comunidadSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCommunityPhotos(photosList);
      setLoading(false);
    };
    getCommunityPhotos();
  }, []);

  if (loading) {
    return <div className="community-showcase-container">Cargando fotos de la comunidad...</div>;
  }

  return (
    <section className="community-showcase-container">
      <h2>Muestra de la Comunidad</h2>
      <div className="community-showcase-grid">
        {communityPhotos.map((photo) => (
          <div key={photo.id} className="community-card">
            <img src={photo.imageURL} alt={photo.name} />
            <p>{photo.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityShowcase;
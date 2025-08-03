import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import './CommunityForm.css';

function CommunityForm() {
  const [formData, setFormData] = useState({
    creatorName: '',
    imageUrl: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      await addDoc(collection(db, "fotosComunidad"), {
        ...formData,
        timestamp: new Date()
      });
      setStatus('¡Gracias por compartir tu creación!');
      setFormData({ creatorName: '', imageUrl: '' });
    } catch (error) {
      console.error("Error al enviar la foto: ", error);
      setStatus('Error al enviar la foto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="community-form-container">
      <h3>¡Comparte tu creación!</h3>
      <p>Envíanos el enlace a tu foto (de tu Instagram, Facebook, etc.) y la publicaremos en la web.</p>
      <form className="community-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="creatorName">Tu nombre o alias:</label>
          <input
            type="text"
            id="creatorName"
            name="creatorName"
            value={formData.creatorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Enlace de la foto (URL):</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={status === 'Enviando...'}>
          {status === 'Enviando...' ? 'Enviando...' : 'Enviar foto'}
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default CommunityForm;
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase'; // Importamos la base de datos de Firebase
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
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
      await addDoc(collection(db, "mensajes"), {
        ...formData,
        timestamp: new Date()
      });
      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
      setStatus('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section className="contacto-page">
      <h1>Contacto</h1>
      <p>¿Tienes alguna pregunta, sugerencia o simplemente quieres saludar? ¡Escríbenos!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={status === 'Enviando...'}>
          {status === 'Enviando...' ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default Contacto;
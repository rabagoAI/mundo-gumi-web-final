import React from 'react';
import './Footer.css'; // Importa el archivo CSS

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Mundo Gumi</h3>
          <p>Tu portal de patrones y tutoriales de amigurumis.</p>
        </div>
        <div className="footer-section links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/politica-de-privacidad">Política de privacidad</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Síguenos</h3>
          <a href="https://www.facebook.com/mundogumi" target="_blank" rel="noopener noreferrer">Facebook</a>
          {/* Aquí podrías añadir enlaces a otras redes sociales */}
        </div>
      </div>
      {/* Esta es la nueva sección para el aviso de afiliación */}
      <div className="footer-bottom">
        <p className="afiliacion-aviso">
          En nuestra web participamos en el Programa de Afiliados de Amazon.es, un programa de publicidad de afiliados diseñado para proporcionar a los sitios web un medio para obtener comisiones por publicidad, mediante la publicidad y la inclusión de enlaces a Amazon.es. Esto significa que, al hacer clic en los enlaces a productos de Amazon en nuestra web y realizar una compra, nosotros recibiremos una pequeña comisión. El precio de los productos no se ve afectado en absoluto por esta comisión. Utilizamos estos ingresos para mantener el sitio web y seguir creando contenido gratuito y de calidad.
        </p>
        &copy; {currentYear} Mundo Gumi. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
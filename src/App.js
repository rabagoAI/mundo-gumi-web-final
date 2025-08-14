import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes principales de la aplicación
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

// Importa los componentes de las páginas
import Home from './components/Home';
import PatronesIA from './components/PatronesIA';
import Colaboradores from './components/Colaboradores';
import Tutoriales from './components/Tutoriales';
import Comunidad from './components/Comunidad';
import PatternDetail from './components/PatternDetail'; 
import Contacto from './components/Contacto';
import Entrevistas from './components/Entrevistas';
import EntrevistaIndividual from './components/EntrevistaIndividual'; // <-- Importa este nuevo componente
import PrivacyPolicy from './pages/PrivacyPolicy';
import RecursosPage from './pages/RecursosPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patrones-mundo-gumi" element={<PatronesIA />} />
            <Route path="/patrones-colaboradores" element={<Colaboradores />} />
            <Route path="/tutoriales" element={<Tutoriales />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/patrones/:id" element={<PatternDetail />} /> {/* Ruta dinámica */}
            <Route path="/contacto" element={<Contacto />} /> {/* Ruta para Contacto */}
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/entrevistas" element={<Entrevistas />} />
            <Route path="/entrevistas/:id" element={<EntrevistaIndividual />} /> {/* <-- NUEVA RUTA DINÁMICA */}
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/recursos" element={<RecursosPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
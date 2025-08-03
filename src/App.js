import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes principales de la aplicación
import Header from './components/Header';
import Footer from './components/Footer';

// Importa los componentes de las páginas
import Home from './components/Home';
import MisPatrones from './components/MisPatrones';
import Colaboradores from './components/Colaboradores';
import Tutoriales from './components/Tutoriales';
import Comunidad from './components/Comunidad';
import PatternDetail from './components/PatternDetail'; 
import Contacto from './components/Contacto';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patrones-mundo-gumi" element={<MisPatrones />} />
            <Route path="/patrones-colaboradores" element={<Colaboradores />} />
            <Route path="/tutoriales" element={<Tutoriales />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/patrones/:id" element={<PatternDetail />} /> {/* Ruta dinámica */}
            <Route path="/contacto" element={<Contacto />} /> {/* Ruta para Contacto */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
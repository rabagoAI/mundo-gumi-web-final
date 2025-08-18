import React from 'react';
import HeroSection from './HeroSection'; // Importa el nuevo componente
import FeaturedPatterns from './FeaturedPatterns';
import CommunityShowcase from './CommunityShowcase';
import CTASection from './CTASection';

function Home() {
  return (
    <div>
      {/* Sección 1: Hero Section */}
       <HeroSection />

      {/* Sección 2: Patrones destacados */}
      {/* <FeaturedPatterns /> */} {/* <-- Hemos comentado esta línea */}

      {/* Sección 3: Comunidad */}
      <CommunityShowcase />

      {/* Sección 4: CTA */}
      <CTASection />
    </div>
  );
}

export default Home;
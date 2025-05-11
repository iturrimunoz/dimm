import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingDoctorButton from './components/FloatingDoctorButton';
import Inicio from './pages/Inicio';
import Diagnostico from './pages/Diagnostico';
import Testimonios from './pages/Testimonios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="App">
      <Header className={scrolled ? 'scrolled' : ''} />
      <main>
        <section id="inicio">
          <Inicio />
        </section>
        
        <section id="diagnostico">
          <Diagnostico />
        </section>

        <section id="testimonios">
          <Testimonios />
        </section>

        <section id="nosotros">
          <Nosotros />
        </section>

        <section id="contacto">
          <Contacto />
        </section>
      </main>
      <Footer />
      <FloatingDoctorButton />
    </div>
  );
}

export default App;

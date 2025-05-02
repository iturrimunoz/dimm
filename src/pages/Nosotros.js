import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <section className="nosotros-section">
      <div className="nosotros-hero">
        <div className="hero-content">
          <h1>Sobre Nosotros</h1>
          <p>Innovación y excelencia en el cuidado de tu salud</p>
        </div>
      </div>

      <div className="nosotros-container">
        <div className="vision-mision">
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>Nuestra Visión</h2>
            <p>Ser líderes en innovación médica, proporcionando servicios de diagnóstico de clase mundial y transformando la atención médica para mejorar la vida de las personas.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h2>Nuestra Misión</h2>
            <p>Ofrecer diagnósticos precisos y accesibles, utilizando tecnología de vanguardia y un equipo altamente capacitado para cuidar la salud de nuestros pacientes.</p>
          </div>
        </div>

        <div className="valores-section">
          <h2>Nuestros Valores</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <i className="fas fa-user-md"></i>
              <h3>Excelencia</h3>
              <p>Compromiso con los más altos estándares de calidad en cada servicio.</p>
            </div>
            <div className="valor-card">
              <i className="fas fa-handshake"></i>
              <h3>Integridad</h3>
              <p>Actuamos con honestidad y ética en cada decisión.</p>
            </div>
            <div className="valor-card">
              <i className="fas fa-microscope"></i>
              <h3>Innovación</h3>
              <p>Constante búsqueda de nuevas tecnologías y métodos.</p>
            </div>
            <div className="valor-card">
              <i className="fas fa-users"></i>
              <h3>Empatía</h3>
              <p>Cuidado centrado en el paciente y sus necesidades.</p>
            </div>
          </div>
        </div>

        <div className="equipo-section">
          <h2>Nuestro Equipo</h2>
          <div className="equipo-grid">
            <div className="miembro-card">
              <div className="miembro-img">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Dr. Juan Pérez" />
              </div>
              <h3>Dr. Juan Pérez</h3>
              <p>Director Médico</p>
            </div>
            <div className="miembro-card">
              <div className="miembro-img">
                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Dra. María García" />
              </div>
              <h3>Dra. María García</h3>
              <p>Jefa de Laboratorio</p>
            </div>
            <div className="miembro-card">
              <div className="miembro-img">
                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Dr. Carlos Rodríguez" />
              </div>
              <h3>Dr. Carlos Rodríguez</h3>
              <p>Especialista en Diagnóstico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros; 
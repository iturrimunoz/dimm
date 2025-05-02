import React from 'react';
import './Diagnostico.css';

const Diagnostico = () => {
  return (
    <section className="diagnostico-section">
      <div className="diagnostico-container">
        <h2 className="section-title">Diagnóstico Médico</h2>
        
        <div className="diagnostico-grid">
          <div className="diagnostico-card">
            <div className="card-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h3>Análisis Clínicos</h3>
            <p>Realizamos pruebas de laboratorio completas con resultados precisos y rápidos.</p>
          </div>

          <div className="diagnostico-card">
            <div className="card-icon">
              <i className="fas fa-microscope"></i>
            </div>
            <h3>Estudios Especializados</h3>
            <p>Contamos con equipos de última generación para diagnósticos específicos.</p>
          </div>

          <div className="diagnostico-card">
            <div className="card-icon">
              <i className="fas fa-dna"></i>
            </div>
            <h3>Pruebas Genéticas</h3>
            <p>Análisis genéticos avanzados para diagnósticos precisos y personalizados.</p>
          </div>

          <div className="diagnostico-card">
            <div className="card-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Neurología</h3>
            <p>Evaluaciones neurológicas completas con especialistas certificados.</p>
          </div>
        </div>

        <div className="diagnostico-info">
          <h3>¿Por qué elegirnos?</h3>
          <ul className="features-list">
            <li><i className="fas fa-check-circle"></i> Resultados en 24 horas</li>
            <li><i className="fas fa-check-circle"></i> Tecnología de última generación</li>
            <li><i className="fas fa-check-circle"></i> Personal altamente calificado</li>
            <li><i className="fas fa-check-circle"></i> Atención personalizada</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Diagnostico; 
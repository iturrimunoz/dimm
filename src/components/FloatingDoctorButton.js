import React, { useState } from 'react';
import './FloatingDoctorButton.css';

const FloatingDoctorButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`floating-doctor ${isExpanded ? 'expanded' : ''}`}>
      <button className="doctor-button" onClick={toggleExpand}>
        <div className="doctor-avatar">
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Dr. Principal" />
        </div>
        <span className="doctor-name">Dr. Principal</span>
      </button>

      <div className="doctor-info">
        <div className="info-header">
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Dr. Principal" />
          <div className="header-text">
            <h3>Dr. Juan Pérez</h3>
            <p>Médico Especialista</p>
          </div>
        </div>

        <div className="info-content">
          <div className="info-item">
            <i className="fas fa-graduation-cap"></i>
            <span>Especialidad: Cardiología</span>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <span>Horario: Lunes a Viernes 9:00 - 18:00</span>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>Teléfono: +123 456 7890</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>Email: dr.juan@theranos.com</span>
          </div>
        </div>

        <div className="info-actions">
          <button className="action-button">
            <i className="fas fa-calendar-check"></i>
            Agendar Cita
          </button>
          <button className="action-button">
            <i className="fas fa-comments"></i>
            Consulta Virtual
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingDoctorButton; 
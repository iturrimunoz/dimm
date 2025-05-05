import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-hero">
        <h2 className="contacto-title">¡Hablemos!</h2>
        <p className="contacto-subtitle">¿Tienes dudas o quieres agendar una cita? ¡Escríbenos!</p>
      </div>
      <div className="contacto-container">
        <form className="contacto-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <input type="text" required placeholder="Tu nombre" />
            <label>Nombre</label>
          </div>
          <div className="input-group">
            <input type="email" required placeholder="tu@email.com" />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea required placeholder="Escribe tu mensaje..."></textarea>
            <label>Mensaje</label>
          </div>
          <button type="submit" className="btn-enviar">
            <span>Enviar Mensaje</span>
            <i className="fas fa-paper-plane"></i>
          </button>
          {enviado && <div className="mensaje-exito">¡Mensaje enviado! 🚀</div>}
        </form>
        <div className="contacto-mapa">
          <div className="mapa-efecto">
            <iframe
              title="Ubicación DIMM0BOLIVIA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.01123456789!2d-68.11929368463412!3d-16.500000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206c1234567%3A0xabcdefabcdef1234!2sPlaza%20Murillo!5e0!3m2!1ses-419!2sbo!4v1680000000000!5m2!1ses-419!2sbo"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "18px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mapa-overlay">
              <i className="fas fa-map-marker-alt"></i>
              <h3>¡Visítanos!</h3>
              <p>, Santa Cruz, Bolivia</p>
            </div>
            <div className="mapa-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

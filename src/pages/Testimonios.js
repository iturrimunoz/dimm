import React from 'react';
import './Testimonios.css';

const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      nombre: "María García",
      rol: "Paciente",
      texto: "La atención fue excelente, los resultados fueron rápidos y precisos. El personal muy profesional.",
      imagen: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      nombre: "Juan Pérez",
      rol: "Paciente Regular",
      texto: "Increíble servicio y atención. Los diagnósticos son muy precisos y el personal muy amable.",
      imagen: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      nombre: "Ana López",
      rol: "Paciente",
      texto: "Excelente experiencia, instalaciones modernas y personal muy capacitado.",
      imagen: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <section className="testimonios-section">
      <div className="testimonios-container">
        <h2 className="section-title">Testimonios</h2>
        <p className="section-subtitle">Lo que nuestros pacientes dicen sobre nosotros</p>

        <div className="testimonios-grid">
          {testimonios.map(testimonio => (
            <div key={testimonio.id} className="testimonio-card">
              <div className="testimonio-header">
                <img 
                  src={testimonio.imagen} 
                  alt={testimonio.nombre} 
                  className="testimonio-imagen"
                />
                <div className="testimonio-info">
                  <h3>{testimonio.nombre}</h3>
                  <p>{testimonio.rol}</p>
                </div>
              </div>
              <div className="testimonio-contenido">
                <i className="fas fa-quote-left"></i>
                <p>{testimonio.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios; 
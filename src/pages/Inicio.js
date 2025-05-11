import React, { useEffect, useRef } from 'react';
import './Inicio.css';
import logoDimm from '../assets/LOGOS DIMM-03.png';

const Inicio = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Clase para las partículas
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Crear partículas
    const createParticles = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particlesRef.current.push(new Particle(x, y));
      if (particlesRef.current.length > 100) {
        particlesRef.current.shift();
      }
    };

    // Animar
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      createParticles();
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
          particlesRef.current.splice(index, 1);
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicializar
    resizeCanvas();
    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="inicio-container">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      <div className="hero-content">
        <div className="logo-container">
          <img src={logoDimm} alt="DIMM Logo" className="logo-image" />
          <div className="logo-glow"></div>
        </div>
        
        <h1 className="title">
          <span className="title-line">Diagnóstico</span>
          <span className="title-line">Imágenes</span>
          <span className="title-line">Médicas</span>
          <span className="title-line">Modernas</span>
        </h1>
        
        <p className="subtitle">Innovación y excelencia en el cuidado de tu salud</p>
        
        <div className="cta-buttons">
          <button className="cta-button primary">
            <span>Agenda tu cita</span>
            <i className="fas fa-calendar-alt"></i>
          </button>
          <button className="cta-button secondary">
            <span>Conoce nuestros servicios</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-icon">
          <i className="fas fa-heartbeat"></i>
        </div>
        <div className="floating-icon">
          <i className="fas fa-microscope"></i>
        </div>
        <div className="floating-icon">
          <i className="fas fa-stethoscope"></i>
        </div>
      </div>
    </div>
  );
};

export default Inicio; 
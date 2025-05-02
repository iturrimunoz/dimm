import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>DIMM Bolivia</h3>
          <p>Tu solución confiable en análisis clínicos. Comprometidos con tu salud y bienestar.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li>Análisis Clínicos</li>
            <li>Pruebas Especializadas</li>
            <li>Diagnóstico por Imágenes</li>
            <li>Consultas Médicas</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Av. Marcelo Terceros Nr 21. </span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>(+591) 750-06874</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>dr.bowles-gerentemedico@dimm-bolivia.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DIMM. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 
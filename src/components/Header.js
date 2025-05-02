import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logoDimm from '../assets/LOGOS DIMM-03.png'; // Ajusta la ruta si es necesario

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && searchInputRef.current) {
      // Enfoca el input cuando se abre
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Implementar lógica de búsqueda aquí
      console.log('Buscando:', e.target.value);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logoDimm} alt="Logo Dimm0bolivia" className="logo-img" />
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#diagnostico">Diagnóstico</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div className="search-container" ref={searchContainerRef}>
          <div className={`search-box ${isSearchOpen ? 'active' : ''}`}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar..."
              onKeyPress={handleSearch}
              className="search-input"
            />
            <button 
              className="search-button" 
              onClick={toggleSearch}
              aria-label="Buscar"
            >
              <i className={`fas ${isSearchOpen ? 'fa-times' : 'fa-search'}`}></i>
            </button>
          </div>
        </div>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 
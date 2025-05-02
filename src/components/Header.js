import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logoDimm from '../assets/LOGOS DIMM-03.png'; // Ajusta la ruta si es necesario

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

    // Evita el scroll del body cuando el menú está abierto en móvil
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('Buscando:', e.target.value);
    }
  };

  // Cierra el menú al hacer click en un enlace (en móvil)
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logoDimm} alt="Logo Dimm0bolivia" className="logo-img" />
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={handleLinkClick}>Inicio</a></li>
            <li><a href="#servicios" onClick={handleLinkClick}>Servicios</a></li>
            <li><a href="#diagnostico" onClick={handleLinkClick}>Diagnóstico</a></li>
            <li><a href="#testimonios" onClick={handleLinkClick}>Testimonios</a></li>
            <li><a href="#nosotros" onClick={handleLinkClick}>Nosotros</a></li>
            <li><a href="#contacto" onClick={handleLinkClick}>Contacto</a></li>
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
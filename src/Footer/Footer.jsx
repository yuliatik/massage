// src/components/Footer.js
import React from 'react';
import './Footer.css'; 



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Aura Balance. Alle Rechte vorbehalten.</p>
        <p>Entwickelt von yuliatik für die Lernzwecke.</p>
        <ul className="footer-links">
          <li><a href="#about">Über uns</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>

        
     </div>
    </footer>
  );
};

export default Footer;


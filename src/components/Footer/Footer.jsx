// --- Mis notas de importación ---
// 1. Importo React y los iconos necesarios de la librería react-icons.
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // --- Mis notas sobre configuración de enlaces ---
  // 2. Defino mis enlaces personales. Debo reemplazar estos valores.
  const githubUrl = "https://github.com/tu-usuario"; // Reemplazar con tu URL de GitHub
  const linkedinUrl = "https://linkedin.com/in/tu-usuario"; // Reemplazar con tu URL de LinkedIn
  
  // 3. Lógica para el enlace de WhatsApp (reutilizo la lógica de la sección de contacto).
  const whatsappNumber = '5491112345678'; // Reemplazar con tu número real (código país + número)
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="footer-container">
      {/* 4. Contenedor para los iconos de redes sociales. */}
      <div className="footer-social-links">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
          className="social-icon-link"
        >
          <FaGithub />
        </a>
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
          className="social-icon-link"
        >
          <FaLinkedin />
        </a>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Contact via WhatsApp"
          className="social-icon-link"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* 5. Texto de copyright. */}
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Ruben Albarracin. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
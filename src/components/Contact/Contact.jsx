import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
// Importo el icono de WhatsApp de react-icons
import { FaWhatsapp } from 'react-icons/fa'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Resetea errores previos
    try {
      const response = await fetch('https://formspree.io/f/TU_ENDPOINT_REAL_DE_FORMSPREE', { // ¡ACTUALIZA TU ENDPOINT!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
      } else {
        const data = await response.json();
        setError(data.error || 'Hubo un error al enviar el mensaje. Intenta de nuevo.');
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor. Verifica tu conexión a internet.');
    }
  };

  // Enlace de WhatsApp
  const whatsappNumber = '5491112345678'; // ¡REEMPLAZA CON TU NÚMERO REAL! (Código de país + número, sin +, sin 0, sin 15)
  const whatsappMessage = 'Hola Ruben, me gustaría contactarte desde tu portfolio.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="contact-container">
      <motion.h2 
        className="contact-section-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Hablemos
      </motion.h2>
      <motion.p 
        className="contact-description"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Completa el formulario para ponerte en contacto conmigo o contáctame directamente por WhatsApp.
      </motion.p>

      <div className="contact-content">
        <div className="contact-form-wrapper">
          {isSubmitted ? (
            <motion.p 
              className="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¡Mensaje enviado con éxito! Gracias por contactarme.
            </motion.p>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {error && <p className="error-message">{error}</p>}
              <div className="form-group">
                <label htmlFor="name">Tu Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Tu Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Tu Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(255, 193, 7, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensaje
              </motion.button>
            </motion.form>
          )}
        </div>

        {/* Nuevo bloque de WhatsApp */}
        <motion.div 
          className="whatsapp-contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>O Contáctame por WhatsApp</h3>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-button"
            whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(37, 211, 102, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp size={24} />
            Enviar WhatsApp
          </a>
        </motion.div>
      </div> {/* Cierra contact-content */}
    </section>
  );
};

export default Contact;
// src/components/Contact/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Hablemos</h2>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente o quieres conectar? Envíame un mensaje.
        </p>

        {/* --- CAMBIOS PARA NETLIFY --- */}
        {/* 1. Añadimos el atributo data-netlify="true" */}
        {/* 2. Añadimos un input oculto para darle un nombre al formulario */}
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder="Tu Nombre" 
              required 
            />
            <label htmlFor="name">Tu Nombre</label>
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              id="email"
              placeholder="Tu Email" 
              required 
            />
            <label htmlFor="email">Tu Email</label>
          </div>
          
          <div className="form-group">
            <textarea 
              name="message" 
              id="message"
              rows="6" 
              placeholder="Tu Mensaje" 
              required
            ></textarea>
            <label htmlFor="message">Tu Mensaje</label>
          </div>
          
          <motion.button 
            type="submit" 
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensaje
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    emailjs
      .sendForm(
        'service_x64oieo',  // Tu Service ID
        'template_9d20gnb', // Tu Template ID
        form.current,
        {
          publicKey: 'LOnhUWaNCJ8TZlRlG', // Tu Public Key
        },
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('¡Mensaje enviado con éxito!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
        },
      );
  };

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

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="from_name" id="name" placeholder="Tu Nombre" required />
            <label htmlFor="name">Tu Nombre</label>
          </div>
          
          <div className="form-group">
            <input type="email" name="from_email" id="email" placeholder="Tu Email" required />
            <label htmlFor="email">Tu Email</label>
          </div>
          
          <div className="form-group">
            <textarea name="message" id="message" rows="6" placeholder="Tu Mensaje" required></textarea>
            <label htmlFor="message">Tu Mensaje</label>
          </div>
          
          <motion.button type="submit" className="submit-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Enviar Mensaje
          </motion.button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
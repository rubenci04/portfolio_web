import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-form" className="contact-container">
      <h2 className="contact-title">Hablemos</h2>
      <p className="contact-subtitle">
        ¿Tienes un proyecto en mente o quieres contactarme? Envíame un mensaje.
      </p>
      {/* --- MI NOTA: He actualizado el 'action' con tu endpoint --- */}
      <form action="https://formspree.io/f/xgegbbww" method="POST" className="form">
        <input type="text" name="name" placeholder="Tu Nombre" required />
        <input type="email" name="email" placeholder="Tu Email" required />
        <textarea name="message" placeholder="Tu Mensaje" rows="6" required></textarea>
        <button type="submit" className="submit-button">Enviar Mensaje</button>
      </form>
    </section>
  );
};

export default Contact;
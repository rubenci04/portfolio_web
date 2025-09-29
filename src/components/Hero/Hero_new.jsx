import React from 'react';
import './Hero.css';
import profilePic from '../../assets/profile.png';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">DESARROLLADOR WEB</h1>
          <p className="hero-description">
            ¡Hola! Soy un desarrollador full-stack apasionado por la innovación tecnológica. 
            Como estudiante avanzado de la Tecnicatura en Programación (UTN), me destaco por 
            integrar inteligentemente las IAs en mi flujo de trabajo: desde la generación y 
            edición precisa de código con Gemini y nano banana, hasta la creación de estrategias 
            de branding y marketing con agentes IA. ¡Listo para aportar innovación y energía a tu equipo!
          </p>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Ruben Albarracin" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
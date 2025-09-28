import { motion } from 'framer-motion'; // Importa motion de Framer Motion
import { TypeAnimation } from 'react-type-animation'; // Importa el componente de animación de tipeo
import './Hero.css';                    // Importa los estilos CSS específicos para Hero
import profilePic from '../../assets/profile.png'; // Importa la imagen de perfil

// --- Variantes para la animación escalonada del texto ---

// Variante para el contenedor de texto: gestiona la aparición secuencial de sus hijos.
const containerVariants = {
  hidden: { opacity: 0 }, // El contenedor empieza invisible.
  visible: {
    opacity: 1, // Se hace visible.
    transition: {
      staggerChildren: 0.2, // Cada hijo se anima con un retraso de 0.2 segundos respecto al anterior.
    },
  },
};

// Variante para cada elemento de texto individual (título, nombre, descripción, botón).
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Empieza transparente y 20px más abajo.
  visible: { opacity: 1, y: 0 }, // Termina visible y en su posición original (efecto de "subida").
};

// --- Componente Hero ---
const Hero = () => {
  return (
    <section id="about" className="hero-container">
      {/* Contenedor de texto con animación de entrada escalonada */}
      <motion.div
        className="hero-text-content"
        variants={containerVariants} // Aplica las variantes del contenedor
        initial="hidden"             // Estado inicial definido por 'hidden'
        animate="visible"            // Estado final definido por 'visible'
      >
        {/* Título con efecto de tipeo */}
        <motion.div variants={itemVariants} className="hero-title-container">
          <TypeAnimation
            sequence={[
              'DEVELOPER',
              2000, // Espera 2 segundos
              '',
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="hero-title"
          />
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="hero-name">
          RUBEN ALBARRACIN
        </motion.h2>
        
        <motion.p variants={itemVariants} className="hero-description">
          Estudiante avanzado de la Tecnicatura en Programación (UTN) con fuerte especialización en desarrollo web full-stack. Experiencia en la creación de aplicaciones interactivas con React, Vue.js y Python. Busco activamente mi primera oportunidad en el sector IT.
        </motion.p>
        
        {/* El botón también se envuelve en motion.div para participar en el stagger */}
        <motion.div variants={itemVariants}>
          <a href="#projects" className="hero-button">
            Ver mis proyectos
          </a>
        </motion.div>
      </motion.div>

      {/* Contenedor de la imagen de perfil con animación de entrada y efecto hover */}
      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.8 }} // La imagen empieza un poco pequeña y transparente
        animate={{ opacity: 1, scale: 1 }}    // Llega a su tamaño normal y es visible
        transition={{ delay: 0.8, duration: 0.8 }} // Un pequeño retraso para que aparezca después del texto
        
        // Efecto al pasar el ratón por encima (whileHover)
        whileHover={{ 
          scale: 1.05, // La imagen se agranda un 5%
          rotate: [0, 5, -5, 5, -5, 0], // Pequeño efecto de rotación tipo "agitación" o "bounce"
          transition: { duration: 0.6, ease: "easeInOut" } // Transición suave para el efecto de hover
        }}
      >
        <img src={profilePic} alt="Ruben Albarracin" className="profile-image" />
      </motion.div>
    </section>
  );
};

export default Hero;
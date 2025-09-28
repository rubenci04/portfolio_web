// --- Mis notas para la sección de Skills ---
import React from 'react';
import { motion } from 'framer-motion';
// 1. Importo los iconos específicos que necesito de react-icons.
// Fa = Font Awesome, IoLogo = Ionicons, Di = DevIcons. Hay miles para elegir.
import { FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGithub, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import './Skills.css'; // Crearemos este archivo CSS a continuación.

// 2. Defino los datos de mis habilidades. Asocio cada habilidad con su icono y color.
const skillsData = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <IoLogoJavascript />, color: '#F7DF1E' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Vue.js', icon: <IoLogoVue />, color: '#4FC08D' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'Sass', icon: <FaSass />, color: '#CC6699' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
];

// 3. Variantes para la animación de entrada de la cuadrícula de iconos (stagger).
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Los iconos aparecerán uno por uno rápidamente.
  }
};

// 4. Variantes para la animación de cada icono individual al cargar.
const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

// --- Componente Skills ---
const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-section-title">Mis Habilidades Principales</h2>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Se anima cuando el 20% de la sección es visible.
      >
        {skillsData.map((skill) => (
          <motion.div 
            key={skill.name} 
            className="skill-item"
            variants={itemVariants} // Animación de entrada individual
            // 5. Animación al pasar el ratón por encima del icono.
            whileHover={{ 
              scale: 1.15, 
              y: -10, // Se eleva ligeramente
              boxShadow: `0px 10px 20px ${skill.color}33` // Sombra sutil con el color de la tecnología
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
// --- Mis notas para la importación ---
// 1. Importo motion para las animaciones y el icono de GitHub que usaré en el botón final.
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

// --- Mis notas sobre los datos del proyecto ---
// 2. Aquí defino la info de mis proyectos. Es clave que reemplace los enlaces de ejemplo
// por los míos reales. El de la pizzería es un buen ejemplo que me sirve.
const projectsData = [
  {
    id: 1,
    title: 'Gestor de Pedidos Pizzería',
    description: 'Sistema web para la toma de pedidos online y administración interna. El frontend permite a los clientes armar su pedido y el backend gestiona el inventario.',
    technologies: ['React', 'Node.js', 'CSS Modules', 'MongoDB'],
    linkGitHub: 'https://github.com/tu-usuario/proyecto-pizzeria-react', // Reemplazar con tu URL real
    linkDemo: 'https://demo-pizzeria.netlify.app' // Reemplazar con tu URL real
  },
  {
    id: 2,
    title: 'API RESTful para Tareas',
    description: 'Backend robusto desarrollado con Python y Flask para un administrador de tareas simple. Incluye autenticación de usuarios y operaciones CRUD completas.',
    technologies: ['Python', 'tkinter'],
    linkGitHub: 'https://github.com/tu-usuario/api-flask-tareas',
    linkDemo: 'https://trinket.io/pygame/64ac6336fa4c?showInstructions=true' 
  },
  {
    id: 3,
    title: 'Portfolio Anterior con Vue.js',
    description: 'Versión inicial de mi portfolio personal desarrollada con Vue.js para explorar sus directivas reactivas y ecosistema.',
    technologies: ['Vue.js', 'JavaScript ES6+', 'Sass'],
    linkGitHub: 'https://github.com/tu-usuario/portfolio-vue',
    linkDemo: 'https://demo-portfolio-vue.netlify.app'
  },
  {
    id: 4,
    title: 'Portfolio Anterior con Vue.js',
    description: 'Versión inicial de mi portfolio personal desarrollada con Vue.js para explorar sus directivas reactivas y ecosistema.',
    technologies: ['Vue.js', 'JavaScript ES6+', 'Sass'],
    linkGitHub: 'https://github.com/tu-usuario/portfolio-vue',
    linkDemo: 'https://demo-portfolio-vue.netlify.app'
  },
  {
    id: 5,
    title: 'Portfolio Anterior con Vue.js',
    description: 'Versión inicial de mi portfolio personal desarrollada con Vue.js para explorar sus directivas reactivas y ecosistema.',
    technologies: ['Vue.js', 'JavaScript ES6+', 'Sass'],
    linkGitHub: 'https://github.com/tu-usuario/portfolio-vue',
    linkDemo: 'https://demo-portfolio-vue.netlify.app'
  }
];

// --- Mis notas sobre las variantes de animación ---
// 3. Defino todas las animaciones que usaré en el componente.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const techTagVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: 'var(--accent-color)', // Uso las variables de color globales
    color: 'var(--primary-bg-color)',
    transition: { duration: 0.2 }
  }
};

// --- Componente Projects ---
const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      {/* 4. Aplico la animación al título de la sección. */}
      <motion.h2
        className="projects-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Mis Proyectos
      </motion.h2>

      {/* 5. Contenedor de la cuadrícula con animación stagger para las tarjetas. */}
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="tech-tag"
                  variants={techTagVariants}
                  whileHover="hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* 6. Sección de enlaces externos para cada proyecto. */}
            <div className="project-links">
              {project.linkDemo && (
                <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="project-link-button">
                  Ver Demo
                </a>
              )}
              {project.linkGitHub && (
                <a href={project.linkGitHub} target="_blank" rel="noopener noreferrer" className="project-link-button secondary">
                  Ver Código
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 7. Botón final para enlazar a mi perfil completo de GitHub. */}
      <motion.div
        className="github-profile-link"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.a
          href="https://github.com/RubenAlbarracin" // ¡Mi URL de perfil de GitHub real!
          target="_blank"
          rel="noopener noreferrer"
          className="main-github-button"
          whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(255, 255, 255, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub size={24} />
          Ver Todos Mis Repositorios
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;

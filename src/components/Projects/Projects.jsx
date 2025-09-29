// --- Mis notas para la importación ---
// 1. Importo motion para las animaciones y el icono de GitHub que usaré en el botón final.
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import kioscoImg from '../../assets/cards_images/kiosco.png';
import esteticarsImg from '../../assets/cards_images/esteticars.png';
import donenriqueImg from '../../assets/cards_images/donenrique.png';
import appPythonImg from '../../assets/cards_images/app-python.png';
import tejidoImg from '../../assets/cards_images/tejido.png';
import portfolioImg from '../../assets/cards_images/portfolio.png';

// --- Mis notas sobre los datos del proyecto ---
// 2. Aquí defino la info de mis proyectos. Es clave que reemplace los enlaces de ejemplo
// por los míos reales. El de la pizzería es un buen ejemplo que me sirve.
const projectsData = [
  {
    id: 1,
    title: 'App Ventas y Gestion de Kiosco',
    description: 'Sistema integral de gestión para kioscos, desarrollado con React y Node.js. Permite la toma de pedidos en línea, administración de inventario y seguimiento de ventas. Una solución completa para optimizar la operación de pequeños comercios.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: kioscoImg,
    linkGitHub: 'https://github.com/rubenci04',
    linkDemo: 'https://buchigestionkiosco.onrender.com/auth/login'
  },
  {
    id: 2,
    title: 'Esteticars Monteros',
    description: 'Landing page moderna y atractiva para un centro de estética vehicular, construida con React. Su diseño responsive garantiza una experiencia de usuario óptima en cualquier dispositivo, presentando los servicios de forma clara y profesional.',
    technologies: ['React', 'JavaScript', 'CSS'],
    imageUrl: esteticarsImg,
    linkGitHub: 'https://github.com/rubenci04',
    linkDemo: 'https://esteticars-monteros.vercel.app/'
  },
  {
    id: 3,
    title: 'Don Enrique Web',
    description: 'Sitio web para un emprendimiento local, desarrollado con Vue.js. Demuestra mi capacidad para construir interfaces dinámicas y reactivas, adaptándome a diferentes frameworks de JavaScript para entregar soluciones a medida.',
    technologies: ['Vue.js', 'JavaScript', 'Sass'],
    imageUrl: donenriqueImg,
    linkGitHub: 'https://github.com/rubenci04',
    linkDemo: 'https://donenriqueweb.netlify.app'
  },
  {
    id: 4,
    title: 'App Python',
    description: 'Aplicación de escritorio creada con Python y la librería Tkinter. Este proyecto demuestra mis habilidades en el desarrollo de software de escritorio y mi conocimiento del lenguaje Python más allá del desarrollo web.',
    technologies: ['Python', 'Tkinter'],
    imageUrl: appPythonImg,
    linkGitHub: 'https://github.com/rubenci04',
    linkDemo: 'https://trinket.io/pygame/64ac6336fa4c?showInstructions=true'
  },
  {
    id: 5,
    title: 'Emprendimiento de Tejido',
    description: 'E-commerce en desarrollo para un emprendimiento de tejidos a crochet. El proyecto incluirá un catálogo de productos, carrito de compras y pasarela de pagos, demostrando mi capacidad para construir soluciones de comercio electrónico completas.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: tejidoImg,
    linkGitHub: 'https://github.com/rubenci04',
    linkDemo: ''
  },
  {
    id: 6,
    title: 'Portfolio Actual',
    description: 'Mi portfolio personal, donde aplico las mejores prácticas de desarrollo frontend. Construido con React y Vite, y estilizado con CSS puro y animaciones con Framer Motion, este proyecto es una demostración de mis habilidades en la creación de interfaces de usuario modernas y atractivas.',
    technologies: ['React', 'Vite', 'CSS', 'Framer Motion'],
    imageUrl: portfolioImg,
    linkGitHub: 'https://github.com/rubenci04',
    linkDemo: 'https://portfoliorubenweb.netlify.app'
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
            <div className="project-image-container">
              <img src={project.imageUrl} alt={`Miniatura del proyecto ${project.title}`} className="project-image" />
            </div>
            <div className="project-card-content">
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
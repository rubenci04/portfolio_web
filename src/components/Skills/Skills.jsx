import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// --- MI NOTA: Quité las importaciones de Sass y VSCode ---
import { FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';

const skillsData = [
  // --- MI NOTA: Dejé solo los 10 íconos que pediste ---
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <IoLogoJavascript />, color: '#F7DF1E' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Vue.js', icon: <IoLogoVue />, color: '#4FC08D' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'TailwindCSS', icon: <SiTailwindcss />, color: '#38B2AC' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-section-title">Mis Habilidades Principales</h2>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            variants={itemVariants}
            whileHover={{
              scale: 1.15,
              y: -10,
              boxShadow: `0px 10px 20px ${skill.color}33`,
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
// En App.jsx (Código Correcto y Limpio)
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
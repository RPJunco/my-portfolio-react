import './Main.css'
import Hero from './Secciones/Hero/Hero.jsx';
import About from './Secciones/About/About.jsx';
import Work from './Secciones/Work/Work.jsx';
import Skills from './Secciones/Skills/Skills.jsx';
import Portfolio from './Secciones/Portfolio/Portfolio.jsx';

const Main = () => {
    return (
        
    <main id="main-contenedor">
    
        <Hero />
        <About />
        <Work />
        <Skills />
        <Portfolio />

    </main>
    )
};

export default Main;
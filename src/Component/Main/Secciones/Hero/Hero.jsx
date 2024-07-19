import './Hero.css'
import Btn from '../../../Btn/Btn.jsx';

const Hero = () => {
    return (

        <section className="hero-contenedor" id="inicio">

            <section className="hero-presentacion">
                <section className="hero-section-info">
                    <div className='text-start'>
                        <h3>Hola de nuevo, soy yo!</h3>
                        <h1>Rodrigo Junco</h1>
                        <h2>Y soy un <span>Desarrollador Web Fullstack Jr</span></h2>

                        <p>Me encargo de desarrollar aplicaciones web que coinciden con los requerimientos de los clientes.</p>
                    </div>

                    <div className="hero-iconos-contenedor">
                        <a href="https://www.instagram.com/rodrigojunco.23/" target="_blank"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/rodrigojuncodev/" target="_blank"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/RPJunco" target="_blank"><i className="bi bi-github"></i></a>
                    </div>
                    
                    <Btn contenido='Descargar CV'/>
                </section>
            </section>

            <section className="foto-contenedor">
                <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" />
            </section>

        </section>

    )
};

export default Hero;
import './Hero.css'
import Btn from '../../../Btn/Btn.jsx';

const Hero = () => {
    return (
        <section className="hero-contenedor container-fluid" id="inicio">
            <div className="row align-items-center">
                <section className="hero-presentacion col-lg-6 col-md-12">
                    <div className="hero-section-info">
                        <div className="text-start">
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
                        <Btn contenido="Descargar CV" width="50%" />
                    </div>
                </section>
                <section className="foto-contenedor col-lg-6 col-md-12 text-center">
                    <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" className="img-fluid rounded-circle" />
                </section>
            </div>
        </section>
    )
};

export default Hero;
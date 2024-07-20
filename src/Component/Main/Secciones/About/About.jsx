import './About.css'
import Btn from '../../../Btn/Btn.jsx'

const About = () => {
    return (
        <section id="acercaDe" className="container-fluid">
            <div className="row align-items-center">
                <section className="foto-contenedor col-lg-6 col-md-12 text-center">
                    <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" className="img-fluid rounded-circle" />
                </section>

                <div className="acercaDe-contenedor col-lg-6 col-md-12">
                    <h2>Acerca de <span>Mi</span></h2>
                    <h3>Desarrollador Web Fullstack Jr</h3>
                    <p>
                        Hola! Me llamo Rodrigo Junco y me gustaria presentarme.
                        Soy un estudiante de Ingenieria en Sistemas de la Información
                        en la Facultad Regional de Córdoba, UTN.
                        Me desempeño como un Desarrollador Web Fullstack Jr.
                        Mi objetivo como Desarrollador es implementar el
                        manejo correcto del software para desarrollar
                        aplicaciones que sean atractivas para los clientes.
                    </p>
                    <Btn contenido='Ver Mas' width='100%'/>
                </div>
            </div>
        </section>
    )
};

export default About;
import './About.css'

const About = () => {
    return (
        <section id="acercaDe">
        
            <section className="foto-contenedor">
                <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" />
            </section>

            <section className="acercaDe-contenedor">
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
                <div className="boton-contenedor">
                    <a href="#" className="boton">Ver Mas</a>
                </div>
            </section>

        </section>
    )
};

export default About;
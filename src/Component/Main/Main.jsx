import './Main.css'

const Main = () => {
    return (
        
    <main id="main-contenedor">

    <section class="hero-contenedor" id="inicio">

        <section class="hero-presentacion">
            <section class="hero-section-info">
                <div>
                    <h3>Hola de nuevo, soy yo!</h3>
                    <h1>Rodrigo Junco</h1>
                    <h2>Y soy un <span>Desarrollador Web Fullstack Jr</span></h2>

                    <p>Me encargo de desarrollar aplicaciones web que coinciden con los requerimientos de los clientes.</p>
                </div>

                <div class="hero-iconos-contenedor">
                    <a href="https://www.instagram.com/rodrigojunco.23/" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/rodrigojuncodev/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="https://github.com/RPJunco" target="_blank"><i class="bi bi-github"></i></a>
                </div>
                
                <div class="boton-contenedor">
                    <a href="./archivos/CV.pdf" download="./archivos/CV.pdf" target="_blank" class="boton">
                        Descargar CV
                    </a>
                </div>
            </section>
        </section>

        <section class="foto-contenedor">
            <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" />
        </section>

    </section>


    <section id="acercaDe">
        
        <section class="foto-contenedor">
            <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" />
        </section>

        <section class="acercaDe-contenedor">
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
            <div class="boton-contenedor">
                <a href="#" class="boton">Ver Mas</a>
            </div>
        </section>

    </section>
    

    <section id="servicios">

        <h2>Mis <span>Servicios</span></h2>

        <section class="servicio-contenedor">

            <div class="btn1">
                <h3>Desarrollo de aplicaciones FrontEnd</h3>
                <a href="#"  class="boton">Leer Mas</a>
            </div>
            <div class="btn2">
                <h3>Desarrollo de aplicaciones BackEnd</h3>
                <a href="#"  class="boton">Leer Mas</a>
            </div>
            <div class="btn3">
                <h3>Desarrollo de aplicaciones FullStack</h3>
                <a href="#"  class="boton">Leer Mas</a>
            </div>

        </section>


    </section>


    <section id="skills">

        <section class="skills-contenedor">

            <h2>Mis <span>Habilidades</span></h2>
            <section class="skills-iconos">

                <div>
                    <h3>Html</h3>
                    <img src="./img/skills/html.png" alt="Html" />
                </div>
                <div>
                    <h3>Css</h3>
                    <img src="./img/skills/css.png" alt="Css" />
                </div>
                <div>
                    <h3>Git</h3>
                    <img src="./img/skills/git.png" alt="Git" />
                </div>
                <div>
                    <h3>Javascript</h3>
                    <img src="./img/skills/js.png" alt="Javascript" />
                </div>
                <div>
                    <h3>Python</h3>
                    <img src="./img/skills/pyton.png" alt="Python" />
                </div>
                <div>
                    <h3>Haskell</h3>
                    <img src="./img/skills/haskell.png" alt="Haskell" />
                </div>

            </section>

            <section class="skills-conocimientos">

                <div>
                    <h3>Conocimiento de cada herramienta de software:</h3>
                    <p>
                        En los siguientes graficos vemos una pequeña muestra de la cantidad de veces que he utilizado estas tecnologías para desarrollar software.
                    </p>
                </div>

                <div>
                    <h4>Conocimiento representado en barras horizontales </h4>
                    <img src="./img/skills/grafico-barras-horizontal.PNG" alt="grafico-barras-estadistico" />
                </div>
                <div>
                    <h4>Conocimiento representado en grafico de torta </h4>
                    <img src="./img/skills/grafico-torta.PNG" alt="grafico-torta-estadistico" />
                </div>

            </section>

        </section>

    </section>


    <section id="portfolio">

        <section class="portfolio-contenedor">

            <h2>Mi <span>Portfolio</span></h2>

            <section class="portfolio-proyectos">

                <div>
                    <a href="https://rpjunco.github.io/Travel-Agency-Login-page/" target="_blank"><img src="./img/portfolio/travel-agency-login-page.PNG" class="img-proyecto" alt="Travel-Agency-Login-page" /></a>
                </div>
                <div>
                    <a href="https://rpjunco.github.io/What-we-offer-section-design/" target="_blank"><img src="./img/portfolio/what-do-we-offer.PNG" class="img-proyecto" alt="What-dowe-offer" /></a>
                </div>
                <div>
                    <a href="https://github.com/RPJunco/soccer-card-menu/tree/main" target="_blank"><img src="./img/portfolio/soccer-cards-menu.PNG" class="img-proyecto" alt="soccer-cards-menu" /></a>
                </div>

            </section>

            <section class="portfolio-proyectos">

                <div>
                    <a href="https://github.com/RPJunco/records-management/tree/main" target="_blank"><img src="./img/portfolio/records-management.PNG" class="img-proyecto" alt="records-management" /></a>
                </div>
                <div>
                    <a href="https://github.com/RPJunco/character-and-list-processing/tree/main" target="_blank"><img src="./img/portfolio/character-treatment.PNG" class="img-proyecto" alt="character-and-list-processing" /></a>
                </div>
                <div>
                    <a href="https://github.com/RPJunco/article-management" target="_blank"><img src="./img/portfolio/strings-treatment.PNG" class="img-proyecto" alt="strings-treatment" /></a>
                </div>

            </section>

        </section>

    </section>


    </main>
    )
};

export default Main;
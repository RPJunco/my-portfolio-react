import './Skills.css'

const Skills = () => {
    return (
        <section id="skills">

            <section className="skills-contenedor">

                <h2>Mis <span>Habilidades</span></h2>
                <section className="skills-iconos">

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

                <section className="skills-conocimientos">

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
    )
};

export default Skills;
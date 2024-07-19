import './Skills.css'

const Skills = () => {
    return (
        <section id="skills" className='skills'>

            <section className="container-fluid">

                <h2 className='m-5'>Mis <span>Habilidades</span></h2>

                <section className="container-fluid justify-content-evenly mb-4">

                    <div className='card'>
                        <h3>Html</h3>
                        <img src="./img/skills/html.png" alt="Html" className='icons'/>
                    </div>
                    <div className='card'>
                        <h3>Css</h3>
                        <img src="./img/skills/css.png" alt="Css" className='icons'/>
                    </div>
                    <div className='card'>
                        <h3>Git</h3>
                        <img src="./img/skills/git.png" alt="Git" className='icons'/>
                    </div>
                    <div className='card'>
                        <h3>Javascript</h3>
                        <img src="./img/skills/js.png" alt="Javascript" className='icons'/>
                    </div>
                    <div className='card'>
                        <h3>Python</h3>
                        <img src="./img/skills/python.png" alt="Python" className='icons'/>
                    </div>
                    <div className='card'>
                        <h3>Haskell</h3>
                        <img src="./img/skills/haskell.png" alt="Haskell" className='icons'/>
                    </div>

                </section>

                <section className="container-fluid m-5 justify-content-center flex-xl-nowrap">

                    <div className='skills-conocimiento'>
                        <h3>Conocimiento de cada herramienta de software:</h3>
                        <p className='parrafo'>
                            En los siguientes graficos vemos una pequeña muestra de la cantidad de veces que he utilizado estas tecnologías para desarrollar software.
                        </p>
                    </div>

                    <div className='barras'>
                        <h4>Conocimiento representado en barras horizontales </h4>
                        <img src="./img/skills/grafico-barras-horizontal.PNG" alt="grafico-barras-estadistico" className='graph'/>
                    </div>
                    <div className='torta'>
                        <h4>Conocimiento representado en grafico de torta </h4>
                        <img src="./img/skills/grafico-torta.PNG" alt="grafico-torta-estadistico" className='graph'/>
                    </div>

                </section>

            </section>

        </section>
    )
};

export default Skills;
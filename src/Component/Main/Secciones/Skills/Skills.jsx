import './Skills.css'

const Skills = () => {
    return (
        <section id="skills" className='skills'>
            <h2>Mis <span>Habilidades</span></h2>
            <section className="container-fluid my-5">
                
                <section className="d-flex flex-row flex-wrap justify-content-between mb-5">
                    <div className='col-lg-2 col-md-3 col-sm-4 mb-4'>
                        <div className='card h-100 text-center'>
                            <h3>Html</h3>
                            <img src="./img/skills/html.png" alt="Html" className='icons mx-auto'/>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 mb-4'>
                        <div className='card h-100 text-center'>
                            <h3>Css</h3>
                            <img src="./img/skills/css.png" alt="Css" className='icons mx-auto'/>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 mb-4'>
                        <div className='card h-100 text-center'>
                            <h3>Git</h3>
                            <img src="./img/skills/git.png" alt="Git" className='icons mx-auto'/>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 mb-4'>
                        <div className='card h-100 text-center'>
                            <h3>Javascript</h3>
                            <img src="./img/skills/js.png" alt="Javascript" className='icons mx-auto'/>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 mb-4'>
                        <div className='card h-100 text-center'>
                            <h3>Python</h3>
                            <img src="./img/skills/python.png" alt="Python" className='icons mx-auto'/>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-4 mb-4'>
                        <div className='card h-100 text-center'>
                            <h3>Haskell</h3>
                            <img src="./img/skills/haskell.png" alt="Haskell" className='icons mx-auto'/>
                        </div>
                    </div>
                </section>

                <section className="row">
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className='skills-conocimiento'>
                            <h3>Conocimiento de cada herramienta de software:</h3>
                            <p className='parrafo'>
                                En los siguientes graficos vemos una pequeña muestra de la cantidad de veces que he utilizado estas tecnologías para desarrollar software.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className='barras'>
                            <h4>Conocimiento representado en barras horizontales </h4>
                            <img src="./img/skills/grafico-barras-horizontal.PNG" alt="grafico-barras-estadistico" className='graph img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className='torta'>
                            <h4>Conocimiento representado en grafico de torta </h4>
                            <img src="./img/skills/grafico-torta.PNG" alt="grafico-torta-estadistico" className='graph img-fluid'/>
                        </div>
                    </div>
                </section>

            </section>
        </section>
    )
};

export default Skills;
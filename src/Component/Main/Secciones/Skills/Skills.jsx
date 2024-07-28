import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
    return (
        <Container 
        fluid
        id='skills'
        className='skills my-5 align-items-center'
        style={{ padding: '150px 20px', backgroundColor: '#293b50' }}
        >
            <h2 className='mb-5'>Mis <span>Habilidades</span></h2>
            <Row className='justify-content-between mb-5'>
                <Col lg={2} md={4} sm={6} className='mb-4'>
                    <div className='card h-100 text-center border-0 p-2'>
                        <h3 className='mb-1'>HTML</h3>
                        <img src="./img/skills/html5.png" alt="Html" className='icons h-auto mx-auto'/>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={6} className='mb-4'>
                    <div className='card h-100 text-center border-0 p-2'>
                        <h3 className='mb-1'>CSS</h3>
                        <img src="./img/skills/css3.png" alt="Css" className='icons h-auto mx-auto'/>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={6} className='mb-4'>
                    <div className='card h-100 text-center border-0 p-2'>
                        <h3 className='mb-1'>Git</h3>
                        <img src="./img/skills/git.png" alt="Git" className='icons h-auto mx-auto'/>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={6} className='mb-4'>
                    <div className='card h-100 text-center border-0 p-2'>
                        <h3 className='mb-1'>Javascript</h3>
                        <img src="./img/skills/js.png" alt="Js" className='icons h-auto mx-auto'/>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={6} className='mb-4'>
                    <div className='card h-100 text-center border-0 p-2'>
                        <h3 className='mb-1'>Python</h3>
                        <img src="./img/skills/python.png" alt="Python" className='icons h-auto mx-auto'/>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={6} className='mb-4'>
                    <div className='card h-100 text-center border-0 p-2'>
                        <h3 className='mb-1'>Haskell</h3>
                        <img src="./img/skills/haskell.png" alt="Haskell" className='icons h-auto mx-auto'/>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center justify-content-around'>
                <Col lg={4} md={12} className='mb-5'>
                    <div className='skills-conocimiento border-0'>
                        <h3 className='mb-4'>Conocimiento de cada herramienta de software:</h3>
                        <p className='parrafo'>
                            En los siguientes graficos vemos una pequeña muestra de la cantidad de veces que he utilizado estas tecnologías para desarrollar software.
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={12} className='mb-1'>
                    <div className='barras border-0'>
                        <h4 className='mb-4'>Conocimiento representado en barras horizontales </h4>
                        <img src="./img/skills/grafico-barras-horizontal.PNG" alt="grafico-barras-estadistico" className='graph m-0 img-fluid h-auto'/>
                    </div>
                </Col>
                <Col lg={4} md={12} className='mb-1'>
                    <div className='torta border-0'>
                        <h4 className='mb-4'>Conocimiento representado en grafico de torta </h4>
                        <img src="./img/skills/grafico-torta.PNG" alt="grafico-torta-estadistico" className='graph m-0 img-fluid h-auto'/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Skills;
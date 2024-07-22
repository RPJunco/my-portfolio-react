import Btn from '../../../Btn/Btn.jsx';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <Container 
        fluid
        className='mb-0' 
        id='inicio'
        style={{ padding:'170px 0px' }}
        >
            <Row className='justify-content-center align-items-center mb-5'>
                <Col lg={6} md={12}>
                    <div className="hero-section-info"> 
                        <div className="text-start">
                            <h3>Hola de nuevo, soy yo!</h3>
                            <h1>Rodrigo Junco</h1>
                            <h2>Y soy un <span>Desarrollador Web Fullstack Jr</span></h2>
                            <p>Me encargo de desarrollar aplicaciones web que coinciden con los requerimientos de los clientes.</p>
                        </div>
                        <div className="hero-iconos-contenedor text-start">
                            <a href="https://www.instagram.com/rodrigojunco.23/" target="_blank">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rodrigojuncodev/" target="_blank">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com/RPJunco" target="_blank">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                        <Btn contenido="Descargar CV" width="50%" position='start'/>
                    </div>
                </Col>
                <Col lg={6} md={12} className='text-center'>
                    <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" className="foto-contenedor rounded-circle" />
                </Col>
            </Row>
        </Container>

    )
};

export default Hero;
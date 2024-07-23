import Btn from '../../../Btn/Btn.jsx'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container 
        fluid 
        id='acercaDe'
        style={{ backgroundColor: '#293b50', padding: '170px 0px' }}
        >
            <Row className='align-items-center justify-content-center'>
                <Col lg={6} md={12} className='text-center'>
                    <img src="./img/rodrigo-junco.jpg" alt="foto-perfil" className="foto-contenedor img-fluid rounded-circle" />
                </Col>
                <Col lg={6} md={12} className='acercaDe-contenedor me-5'>
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
                    <Btn contenido='Ver Mas' width='50%' position='center'/>
                </Col>
            </Row>

        </Container>
    )
};

export default About;
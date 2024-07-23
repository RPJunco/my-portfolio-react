import Btn from '../../../Btn/Btn.jsx'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container 
        fluid 
        id='acercaDe'
        style={{ backgroundColor: '#293b50', padding: '170px 0px' }}
        >
            <Row className='align-items-center justify-content-center'>
                <Col lg={6} md={12} className='text-center foto-contenedor'>
                    <Image src="./img/rodrigo-junco.jpg" alt="foto-perfil" style={{ boxShadow: '0 0 40px rgb(134, 255, 255, 0.9' }} roundedCircle fluid width='70%'/>
                </Col>
                <Col lg={6} md={12} style={{ width: '40%', padding: '50px 0px' }}>
                    <Card 
                    style={{ backgroundColor: '#293b50' }} border='0'>
                        <Card.Body className='justify-content-center'>
                            <h2>Acerca de <span>Mi</span></h2>
                            <h3>Desarrollador Web Fullstack Jr</h3>
                            <Card.Text className='justify-content-center' color='white' style={{ textAlign: 'justify' }}>
                                Hola! Me llamo Rodrigo Junco y me gustaria presentarme.
                                Soy un estudiante de Ingenieria en Sistemas de la Información
                                en la Facultad Regional de Córdoba, UTN.
                                Me desempeño como un Desarrollador Web Fullstack Jr.
                                Mi objetivo como Desarrollador es implementar el
                                manejo correcto del software para desarrollar
                                aplicaciones que sean atractivas para los clientes.
                            </Card.Text>
                            <Btn contenido='Ver Mas' width='50%' position='center'/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
};

export default About;
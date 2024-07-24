import Btn from '../../../Btn/Btn.jsx'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const About = () => {

    const[btnPosition, setBtnPosition] = useState('center');
    const[paddingCustom, setPaddingCustom] = useState('170px 0px');

    useEffect(() => {
        const manejarTamanio = () => {
            const ancho = window.innerWidth;
            if (ancho >= 1400){
                setBtnPosition('start');
                setPaddingCustom('170px 0px')
            }else{
                setBtnPosition('center');
                setPaddingCustom('100px 0px')
            }
        };

        manejarTamanio();

        window.addEventListener('resize', manejarTamanio);

        return () => {
            window.removeEventListener('resize', manejarTamanio);
        };
    }, []);

    return (
        <Container 
        fluid 
        id='acercaDe'
        style={{ backgroundColor: '#293b50', padding: paddingCustom }}
        >
            <Row className='justify-content-center align-items-center'>
                <Col lg={6} md={12} className='text-center d-xxl-block d-none'>
                    <Image src="./img/rodrigo-junco.jpg" alt="foto-perfil" style={{ boxShadow: '0 0 40px rgb(134, 255, 255, 0.9' }} roundedCircle fluid width='70%'/>
                </Col>
                <Col lg={6} md={12}
                style={{ padding: '50px 0px' }}>
                    <Card className='justify-content-center text-center text-xxl-start'
                    style={{ backgroundColor: '#293b50' }} border='0'>
                        <Card.Body className='justify-content-center text-center text-xxl-start'>
                            <h2 className='pb-0 mb-0'>Acerca de <span>Mi</span></h2>
                            <h3 className='pb-3'>Desarrollador Web Fullstack Jr</h3>
                            <Card.Text className='justify-content-center' color='white' style={{ textAlign: 'justify' }}>
                                Hola! Me llamo Rodrigo Junco y me gustaria presentarme.
                                Soy un estudiante de Ingenieria en Sistemas de la Información
                                en la Facultad Regional de Córdoba, UTN.
                                Me desempeño como un Desarrollador Web Fullstack Jr.
                                Mi objetivo como Desarrollador es implementar el
                                manejo correcto del software para desarrollar
                                aplicaciones que sean atractivas para los clientes.
                            </Card.Text>
                            <Btn contenido='Ver Mas' width='50%' position={btnPosition}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
};

export default About;
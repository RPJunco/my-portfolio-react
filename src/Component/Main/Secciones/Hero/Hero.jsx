import Btn from '../../../Btn/Btn.jsx';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Hero = () => {

    const[btnPosition, setBtnPosition] = useState('center');
    const[paddingCustom, setPaddingCustom] = useState('170px 0px 170px 0px');

    useEffect(() => {
        const manejarTamanio = () => {
            const ancho = window.innerWidth;
            if (ancho >= 1400){
                setBtnPosition('start');
                setPaddingCustom('170px 0px 170px 0px');
            }else{
                setBtnPosition('center');
                setPaddingCustom('150px 0px 0px 0px');
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
        id='inicio'
        style={{ padding: paddingCustom }}
        >
            <Row className='justify-content-center align-items-center mb-5'>
                <Col lg={6} md={12} className='mb-5 pe-0'>
                    <Card 
                    className='text-xxl-start text-center ms-xxl-5' border='0' style={{ backgroundColor: '#011225' }}
                    >
                        <h3>Hola de nuevo, soy yo!</h3>
                        <h1>Rodrigo Junco</h1>
                        <h2>Y soy un <span>Desarrollador Web Fullstack Jr</span></h2>
                        <Card.Text className='text-xxl-start text-center'>
                            Me encargo de desarrollar aplicaciones web que coinciden con los requerimientos de los clientes.
                        </Card.Text>
                        <Card 
                        className='hero-iconos-contenedor d-flex flex-wrap justify-content-xxl-start align-items-xxl-start justify-content-center align-items-center flex-row' 
                        style={{ backgroundColor: '#011225' }}
                        border='0'
                        >
                            <Card.Link href="https://www.instagram.com/rodrigojunco.23/" className='m-0' target="_blank">
                                <i className="bi bi-instagram icons"></i>
                            </Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/rodrigojuncodev/" className='m-0' target="_blank">
                                <i className="bi bi-linkedin icons"></i>
                            </Card.Link>
                            <Card.Link href="https://github.com/RPJunco" className='m-0' target="_blank">
                                <i className="bi bi-github icons"></i>
                            </Card.Link>
                        </Card>
                        <Card style={{ backgroundColor: '#011225' }} border='0'>
                            <Btn contenido="Descargar CV" width="50%" position={btnPosition}/>
                        </Card>
                    </Card>
                </Col>
                <Col lg={6} md={12} className='text-center d-xxl-block d-none'>
                    <Image src="./img/rodrigo-junco.jpg" alt="foto-perfil" style={{ boxShadow: '0 0 40px rgb(134, 255, 255, 0.9' }} roundedCircle fluid width='70%'/>
                </Col>
            </Row>
        </Container>

    )
};

export default Hero;
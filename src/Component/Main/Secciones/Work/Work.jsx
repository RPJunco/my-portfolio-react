import Btn from '../../../Btn/Btn.jsx';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';

const Work = () => {
    return (
        <Container
        fluid
        id='servicios'
        style={{ padding: '170px 20px' }}
        className='servicios align-center mb-3'
        >
            <h2 style={{ margin: '0 0 130px 0' }}>Mis <span>Servicios</span></h2>
            <Container>
                <Row className='justify-content-center mb-5'>
                    <Col lg={4} md={12} sm={12} className='mb-5 p-3 d-flex justify-content-center'>
                        <Card className='h-100 w-auto' border='none' style={{ borderRadius: '40px', backgroundColor: '#293b50' }}>
                            <CardBody backgroundColor='#293b50' borderRadius='40px'>
                                <h3 style={{ margin: '35px 0px', padding: '17px 0px' }}>Desarrollo de aplicaciones Frontend</h3>
                                <Btn contenido='Leer Mas' width='50%' position='center'/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='mb-5 p-3 d-flex justify-content-center'>
                        <Card className='h-100 w-auto' border='none' style={{ borderRadius: '40px', backgroundColor: '#293b50' }}>
                            <CardBody backgroundColor='#293b50' borderRadius='40px'>
                                <h3 style={{ margin: '35px 0px', padding: '17px 0px' }}>Desarrollo de aplicaciones Backend</h3>
                                <Btn contenido='Leer Mas' width='50%' position='center'/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='mb-5 p-3 d-flex justify-content-center'>
                    <Card className='h-100 w-auto' border='none' style={{ borderRadius: '40px', backgroundColor: '#293b50' }}>
                            <CardBody backgroundColor='#293b50' borderRadius='40px'>
                                <h3 style={{ margin: '35px 0px', padding: '17px 0px' }}>Desarrollo de aplicaciones Fullstack</h3>
                                <Btn contenido='Leer Mas' width='50%' position='center'/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default Work;
import Btn from '../../../Btn/Btn.jsx';
import { Container, Row, Col } from 'react-bootstrap';

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
                <Row className='mb-5'>
                    <Col lg={4} md={12} sm={12} className='mb-5 p-3'>
                        <div className="card h-100 border-0">
                            <div className="card-body" style={{ backgroundColor: '#293b50', borderRadius: '40px' }}>
                                <h3 style={{ margin: '35px 0px', padding: '17px 0px' }}>Desarrollo de aplicaciones Frontend</h3>
                                <Btn contenido='Leer Mas' width='50%' position='center'/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='mb-5 p-3'>
                        <div className="card h-100 border-0">
                            <div className="card-body" style={{ backgroundColor: '#293b50', borderRadius: '40px' }}>
                                <h3 style={{ margin: '35px 0px', padding: '17px 0px' }}>Desarrollo de aplicaciones Backend</h3>
                                <Btn contenido='Leer Mas' width='50%' position='center'/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className='mb-5 p-3'>
                        <div className="card h-100 border-0">
                            <div className="card-body" style={{ backgroundColor: '#293b50', borderRadius: '40px' }}>
                                <h3 style={{ margin: '35px 0px', padding: '17px 0px' }}>Desarrollo de aplicaciones Fullstack</h3>
                                <Btn contenido='Leer Mas' width='50%' position='center'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default Work;
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <Container 
        fluid
        style={{ padding: '100px 0px' }}
        id='portfolio'
        >
            <Container className='text-center mb-5'>
                <h2 className='m-5'>Mi <span>Portfolio</span></h2>
            </Container>
            
            <Row className='mb-3'>
                <Col lg={4} md={6} sm={12} className='mb-4'>
                    <a href="https://rpjunco.github.io/Travel-Agency-Login-page/" target="_blank">
                        <img src="./img/portfolio/travel-agency-login-page.PNG" className="img-proyecto img-fluid" alt="Travel-Agency-Login-page" />
                    </a>
                </Col>
                <Col lg={4} md={6} sm={12} className='mb-4'>
                    <a href="https://rpjunco.github.io/What-we-offer-section-design/" target="_blank">
                        <img src="./img/portfolio/what-do-we-offer.PNG" className="img-proyecto img-fluid" alt="What-dowe-offer" />
                    </a>
                </Col>
                <Col lg={4} md={6} sm={12} className='mb-4'>
                    <a href="https://github.com/RPJunco/soccer-card-menu/tree/main" target="_blank">
                        <img src="./img/portfolio/soccer-cards-menu.PNG" className="img-proyecto img-fluid" alt="soccer-cards-menu" />
                    </a>
                </Col>
                <Col lg={4} md={6} sm={12} className='mb-4'>
                    <a href="https://github.com/RPJunco/records-management/tree/main" target="_blank">
                        <img src="./img/portfolio/records-management.PNG" className="img-proyecto img-fluid" alt="records-management" />
                    </a>
                </Col>
                <Col lg={4} md={6} sm={12} className='mb-4'>
                    <a href="https://github.com/RPJunco/character-and-list-processing/tree/main" target="_blank">
                        <img src="./img/portfolio/character-treatment.PNG" className="img-proyecto img-fluid" alt="character-and-list-processing" />
                    </a>
                </Col>
                <Col lg={4} md={6} sm={12} className='mb-4'>
                    <a href="https://github.com/RPJunco/article-management" target="_blank">
                        <img src="./img/portfolio/strings-treatment.PNG" className="img-proyecto img-fluid" alt="strings-treatment" />
                    </a>
                </Col>
            </Row>

        </Container>
    )
};

export default Portfolio;
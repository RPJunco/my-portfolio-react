import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (    

        <Navbar expand="xxl" className="fixed-top p-0" style={{ backgroundColor: '#070e1f'}}>
            <Container fluid style={{ justifyContent: 'space-around' }}>
                <Navbar.Brand href="#logo" style={{ padding: '0 4%' }}><img src="./img/logo.PNG" alt="logo-portofolio" /></Navbar.Brand> 
                <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }}/>
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                <Nav
                    className="my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link
                    style={{ padding: '30px 35px', color: 'white', fontSize: '23px' }} href="#inicio">Inicio</Nav.Link>
                    <Nav.Link
                    style={{ padding: '30px 35px', color: 'white', fontSize: '23px' }} href="#acercaDe">Acerca de</Nav.Link>
                    <Nav.Link
                    style={{ padding: '30px 35px', color: 'white', fontSize: '23px' }} href="#servicios">Servicios</Nav.Link>
                    <Nav.Link
                    style={{ padding: '30px 35px', color: 'white', fontSize: '23px' }} href="#skills">Habilidades</Nav.Link>
                    <Nav.Link
                    style={{ padding: '30px 35px', color: 'white', fontSize: '23px' }} href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link
                    style={{ padding: '30px 35px', color: 'white', fontSize: '23px' }} href="#contacto">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
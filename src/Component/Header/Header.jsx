import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react';

function Header() {

    const[offSetCustom, setOffSetCustom] = useState(0);
    const[paddingCustom, setPaddingCustom] = useState('35px 35px')

    useEffect(() => {
        const manejarTamanio = () => {
            const ancho = window.innerWidth;
            if (ancho >= 1400){
                setOffSetCustom(0);
                setPaddingCustom('35px 35px');
            }else if(ancho >= 940){
                setOffSetCustom(-60);
                setPaddingCustom('30px 400px');
            }else if (ancho >= 550){
                setOffSetCustom(-90);
                setPaddingCustom('30px 200px');
            } else if(ancho >= 380){
                setOffSetCustom(-120);
                setPaddingCustom('30px 125px');
            }else{
                setOffSetCustom(-150);
                setPaddingCustom('30px 90px');
            }
        };

        manejarTamanio();

        window.addEventListener('resize', manejarTamanio);

        return () => {
            window.removeEventListener('resize', manejarTamanio);
        };
    }, []);

    return (    
        <Navbar expand="xxl" className="fixed-top pb-1" style={{ backgroundColor: '#09121c'}}>
            <Container fluid style={{ justifyContent: 'space-around' }}>
                <Navbar.Brand href="#logo" style={{ padding: '0%' }} className='ms-xxl-5 ms-sm-0 d-xxl-block d-lg-block d-sm-block d-none'><img src="./img/logo.PNG" alt="logo-portofolio" /></Navbar.Brand> 
                <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }}/>
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                <Nav
                    className="my-2 my-lg-0 me-xxl-5 me-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Item
                    style={{ padding: '30px 0px', color: 'white', fontSize: '23px' }}>
                        <Link
                        to="inicio" spy={true} smooth={true} offset={offSetCustom} duration={300} 
                        style={{ padding: paddingCustom }}
                        >
                            Inicio
                        </Link>
                    </Nav.Item>
                    <Nav.Item
                    style={{ padding: '30px 0px', color: 'white', fontSize: '23px' }}>
                        <Link 
                        to='acercaDe' spy={true} smooth={true} offset={offSetCustom} duration={300}
                        style={{ padding: paddingCustom }}
                        >
                            Acerca De
                        </Link>
                    </Nav.Item>
                    <Nav.Item
                    style={{ padding: '30px 0px', color: 'white', fontSize: '23px' }}>
                        <Link 
                        to='servicios' spy={true} smooth={true} offset={offSetCustom} duration={300}
                        style={{ padding: paddingCustom }}
                        >
                            Servicios
                        </Link>
                    </Nav.Item>
                    <Nav.Item
                    style={{ padding: '30px 0px', color: 'white', fontSize: '23px' }}>
                        <Link 
                        to='skills' spy={true} smooth={true} offset={offSetCustom} duration={300}
                        style={{ padding: paddingCustom }}
                        >
                            Habilidades
                        </Link>
                    </Nav.Item>
                    <Nav.Item
                    style={{ padding: '30px 0px', color: 'white', fontSize: '23px' }}>
                        <Link 
                        to='portfolio' spy={true} smooth={true} offset={offSetCustom} duration={300}
                        style={{ padding: paddingCustom }}
                        >
                            Portfolio
                        </Link>
                    </Nav.Item>
                    <Nav.Item
                    style={{ padding: '30px 0px', color: 'white', fontSize: '23px' }}>
                        <Link 
                        to='contacto' spy={true} smooth={true} offset={offSetCustom} duration={300}
                        style={{ padding: paddingCustom }}
                        >
                            Contacto
                        </Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
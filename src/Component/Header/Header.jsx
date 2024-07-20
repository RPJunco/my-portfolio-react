import './Header.css';

const Header = () => {
    return (    
        <header className="header fixed-top" id='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./img/logo.PNG" alt="logo-portofolio" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 d-flex w-100 justify-content-end navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                            <li className='nav-item'>
                                <a href="#inicio" className='nav-link'>Inicio</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#acercaDe" className='nav-link'>Acerca de</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#servicios" className='nav-link'>Servicio</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#skills" className='nav-link'>Habilidades</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#portfolio" className='nav-link'>Portfolio</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#contacto" className='nav-link'>Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;
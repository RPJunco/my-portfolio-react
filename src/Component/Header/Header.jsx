import './Header.css';

const Header = () => {
    return (    
        <header className="header fixed-top" id='header'>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./img/logo.PNG" alt="logo-portofolio" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="links">
                        <ul className='nav'>
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
                                <i className="bi bi-list menu-icono"></i>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>

    </header>
    )
};

export default Header;
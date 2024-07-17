import './Header.css';

const Header = () => {
    return (    
        <header class="header">

            <img src="./img/logo.PNG" alt="logo-portofolio" />
            
            <nav class="navegacion-secciones">
                
                <a href="#inicio">Inicio</a>
                <a href="#acercaDe">Acerca de</a>
                <a href="#servicios">Servicio</a>
                <a href="#skills">Habilidades</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contacto">Contacto</a>
                <i class="bi bi-list menu-icono"></i>
                
            </nav>

    </header>
    )
};

export default Header;
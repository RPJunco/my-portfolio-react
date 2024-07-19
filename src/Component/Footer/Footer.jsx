import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from '../Btn/Btn.jsx'

const Footer = () => {
    return (
        <footer className='footer' id='contacto'>
            
            <div className='container-fluid justify-content-center align-items-center w-75'>
                <h2>Interesante verdad? <span>Contactame!</span></h2>

                <div className='container-fluid justify-content-center align-items-center flex-wrap w-75 p-3'>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingName" placeholder="Pedro" />
                        <label htmlFor="floatingName">Nombre</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingLastName" placeholder="Pascal" />
                        <label htmlFor="floatingLastName">Apellido</label>
                    </div>
                    <div className="form-floating">
                        <input type="tel" className="form-control" id="floatingPhoneNumber" placeholder="351*******" />
                        <label htmlFor="floatingPhoneNumber">Telefono de contacto</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                        <label htmlFor="floatingEmail">Direccion de email</label>
                    </div>

                </div>

                <div className="form-floating form-container container-fluid justify-content-center w-75">
                    <textarea className="form-control" placeholder="Deja un comentario!!" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea" className='label-textarea'>Comments</label>
                </div>
                <Btn contenido='Enviar Mensaje'/>
            </div>
        </footer>
    )
};

export default Footer;
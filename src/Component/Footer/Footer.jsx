import './Footer.css'

const Footer = () => {
    return (
        <footer id='footer-contenedor'>
            <h2>Interesante verdad? <span>Contactame!</span></h2>

            <section>

                <form>
                    
                    <section class="form-nombre-completo">
                        <input type="text" name="nombres" placeholder="Nombre" />
                        <input type="text" name="apellidos" placeholder="Apellido" />
                    </section>
                    <section class="form-info">
                        <input type="number" name="telefono" placeholder="Telefono de contacto" />
                        <input type="email" name="email" placeholder="Direccion de email" />
                    </section>
                    <section class="form-cuadro-texto">
                        <textarea name="area-texto" placeholder=" Deje su mensaje"></textarea>
                    </section>
                    <section class="form-boton-envio">
                        <button type="submit" class="boton" name="contacto" value="Enviar Mensaje">
                            Enviar Mensaje
                        </button>
                    </section>

                </form>

            </section>
            
        </footer>
    )
};

export default Footer;
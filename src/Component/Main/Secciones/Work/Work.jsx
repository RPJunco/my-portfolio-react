import './Work.css'
import Btn from '../../../Btn/Btn.jsx';

const Work = () => {
    return (
        <section id="servicios" className='servicios'>

            <h2>Mis <span>Servicios</span></h2>

            <section className="container-fluid">

                <div className="card mb-4">
                    <h3>Desarrollo de aplicaciones FrontEnd</h3>
                    <Btn contenido='Leer Mas'/>
                </div>
                <div className="card mb-4">
                    <h3>Desarrollo de aplicaciones BackEnd</h3>
                    <Btn contenido='Leer Mas'/>
                </div>
                <div className="card mb-4">
                    <h3>Desarrollo de aplicaciones FullStack</h3>
                    <Btn contenido='Leer Mas'/>
                </div>

            </section>

        </section>
    )
};

export default Work;
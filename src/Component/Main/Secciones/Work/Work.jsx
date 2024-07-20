import './Work.css'
import Btn from '../../../Btn/Btn.jsx';

const Work = () => {
    return (
        <section id="servicios" className='servicios'>
            <h2>Mis <span>Servicios</span></h2>
            <section className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3>Desarrollo de aplicaciones FrontEnd</h3>
                                <Btn contenido='Leer Mas' width='70%'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3>Desarrollo de aplicaciones BackEnd</h3>
                                <Btn contenido='Leer Mas' width='70%'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3>Desarrollo de aplicaciones FullStack</h3>
                                <Btn contenido='Leer Mas' width='70%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

export default Work;
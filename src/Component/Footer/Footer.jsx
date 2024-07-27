import Btn from '../Btn/Btn.jsx'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {

    const validationSchema = Yup.object({
        nombre: Yup.string()
        .required('Nombre es requerido')
        .matches(/^[a-zA-Z\s]+$/, 'El nombre solo puede contener letras y espacios')
        .min(3, 'Debe ingresar un minimo de 3 caracteres'),

        apellido: Yup.string()
        .required('Apellido es requerido')
        .matches(/^[a-zA-Z\s]+$/, 'El apellido solo puede contener letras y espacios')
        .min(3, 'Debe ingresar un minimo de 3 caracteres'),
        
        telefono: Yup.string()
        .required('Telefono es requerido')
        .matches(/^\d+$/, 'No se pueden ingresar letras, solo numeros')
        .min(10, 'El teléfono debe tener al menos 10 dígitos')
        .max(15, 'El teléfono no puede tener más de 15 dígitos'),
        
        email: Yup.string()
        .email('Ingrese un Email valido')
        .required('Email es requerido'),
        
        mensaje: Yup.string()
        .required('Comentario es requerido')
        .min(10, 'El comentario no puede tener menos de 10 caracteres')
        .max(400, 'El comentario no puede tener mas de 350 caracteres')
    });

    return (
        <footer 
        className='container-fluid footer' 
        id='contacto'
        style={{backgroundColor: '#293b50', padding: '130px 0px'}}
        >

            <Container 
            className='justify-content-center align-items-center'
            >
                <h2>Interesante verdad? <span>Contactame!</span></h2>
                <Formik
                initialValues={{ nombre: '', apellido: '', telefono: '', email: '', mensaje: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Formulario enviado', values);
                    resetForm(); 
                }}
                >
                    {({
                        isSubmitting, handleSubmit, touched
                    }) => (
                        <Container>
                            <Form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit} noValidate>
                                <Row className='w-75 justify-content-center mb-2'>
                                    <Col lg={6} md={6} className='mb-2'>
                                        <div className="form-floating">
                                            <Field 
                                            type="text" 
                                            name="nombre" 
                                            className={`form-control ${touched.nombre && 'is-invalid'}`} 
                                            id="nombre" 
                                            autoComplete='given-name'
                                            aria-describedby='nombreError'
                                            />
                                            <label htmlFor="nombre">Nombre</label>
                                            <ErrorMessage name="nombre" component="div" className="text-danger" id='nombreError'/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} className='mb-2'>
                                        <div className="form-floating">
                                            <Field 
                                            type="text" 
                                            name='apellido' 
                                            className={`form-control ${touched.apellido && 'is-invalid'}`} 
                                            id="apellido" 
                                            autoComplete='family-name'
                                            aria-describedby="apellidoError"
                                            />
                                            <label htmlFor="apellido">Apellido</label>
                                            <ErrorMessage name="apellido" component="div" className="text-danger" id='apellidoError'/>                                        
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='w-75 justify-content-center mb-2'>
                                    <Col lg={6} md={6} className='mb-2'>              
                                        <div className="form-floating">
                                            <Field 
                                            type="tel" 
                                            name='telefono' 
                                            className={`form-control ${touched.telefono && 'is-invalid'}`} 
                                            id="tel" 
                                            autoComplete='tel'
                                            aria-describedby="telError"
                                            />
                                            <label htmlFor="tel">Telefono de contacto</label>
                                            <ErrorMessage name="telefono" component="div" className="text-danger" id='telError'/>                                    
                                        </div>                                                                  
                                    </Col>
                                    <Col lg={6} md={6} className='mb-2'>         
                                    <div className="form-floating">
                                        <Field 
                                        type="email" 
                                        name='email' 
                                        className={`form-control ${touched.email && 'is-invalid'}`} 
                                        id="email" 
                                        autoComplete='email'
                                        aria-describedby="emailError"
                                        />
                                        <label htmlFor="email">Direccion de email</label>
                                        <ErrorMessage name="email" component="div" className="text-danger" id='emailError'/>                   
                                    </div>                              
                                    </Col>
                                </Row>
                                <Row className='w-75 justify-content-center mb-4'>
                                    <Col lg={12}>
                                        <div className="form-floating form-container justify-content-center w-100">
                                            <Field 
                                            as="textarea" 
                                            name="mensaje" 
                                            className={`form-control w-100 ${touched.mensaje && 'is-invalid'}`} 
                                            id="mensaje" 
                                            autoComplete='off'
                                            aria-describedby="mensajeError"
                                            />
                                            <label htmlFor="mensaje">Deje su mensaje</label>
                                        </div>
                                        <ErrorMessage name="mensaje" component="div" className="text-danger" id='mensajeError'/>  
                                        <Btn tipo='submit' disabled={isSubmitting} contenido='Enviar Mensaje' width='25%' position='center'/>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    )}
                </Formik>
            </Container> 
        </footer>
    )
};

export default Footer;
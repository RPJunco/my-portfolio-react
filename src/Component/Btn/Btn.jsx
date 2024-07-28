import PropTypes from 'prop-types';

const Btn = ({ tipo='button', contenido='Boton', width='100%', position='center' }) => {

    const alignment = position === 'start' ? 'justify-content-start' : 'justify-content-center';

    return (
        <div className={`d-grid w-100 ${alignment}`} style={{ width:width }}>
            <button className="boton" type={tipo}>{contenido}</button>
        </div>
    )
};

Btn.propTypes = {
    tipo: PropTypes.string,
    contenido: PropTypes.string,
    width: PropTypes.string,
    position: PropTypes.string,
};

export default Btn;
import PropTypes from 'prop-types';

const Btn = ({ tipo, contenido, width, position }) => {

    const alignment = position === 'start' ? 'justify-content-start' : 'justify-content-center';

    return (
        <div className={`d-grid w-100 ${alignment}`} style={{ width:width }}>
            <button className="boton" type={tipo}>{contenido}</button>
        </div>
    )
};

Btn.propTypes = {
    tipo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

Btn.defaultProps = {
    tipo: 'button',
    width: '100%',
    justifyContent: 'center'
}


export default Btn;
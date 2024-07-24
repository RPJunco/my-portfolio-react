import PropTypes from 'prop-types';
import './Btn.css'

const Btn = ({ contenido, width, position }) => {

    const alignment = position === 'start' ? 'justify-content-start' : 'justify-content-center';

    return (
        <div className={`d-grid w-100 ${alignment}`} style={{ width:width }}>
            <button className="boton" type="button">{contenido}</button>
        </div>
    )
};

Btn.propTypes = {
    contenido: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

Btn.defaultProps = {
    width: '100%',
    justifyContent: 'center'
}


export default Btn;
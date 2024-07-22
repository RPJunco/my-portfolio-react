import PropTypes from 'prop-types';
import './Btn.css'

const Btn = ({ contenido, width, position }) => {
    return (
        <div className="d-grid" style={{ width:width , justifyContent:position }}>
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
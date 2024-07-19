import PropTypes from 'prop-types';
import './Btn.css'

const Btn = ({ contenido, width }) => {
    return (
        <div className="d-grid" style={{ width:width }}>
            <button className="boton" type="button">{contenido}</button>
        </div>
    )
};

Btn.propTypes = {
    contenido: PropTypes.string.isRequired,
};


export default Btn;
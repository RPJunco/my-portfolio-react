import PropTypes from 'prop-types';
import './Btn.css'

const Btn = ({ contenido }) => {
    return (
        <div className="d-grid">
            <button className="btn" type="button">{contenido}</button>
        </div>
    )
};

Btn.propTypes = {
    contenido: PropTypes.string.isRequired,
};


export default Btn;
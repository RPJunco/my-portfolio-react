import './Btn.css'

const Btn = (props) => {
    let cont = props.contenido;
    return (
        <div className="d-grid">
            <button className="btn" type="button">{cont}</button>
        </div>
    )
};

export default Btn;
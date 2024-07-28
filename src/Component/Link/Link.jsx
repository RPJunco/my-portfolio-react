import PropTypes from 'prop-types';

const Link = ({ contenido, width, position, link, download }) => {

    const alignment = position === 'start' ? 'justify-content-start' : 'justify-content-center';

    return (
        <div className={`d-grid w-100 ${alignment}`} style={{ width:width }}>
            <a href={link} download={download} target='_blank' className='boton'>{contenido}</a>
        </div>
    )
};

Link.propTypes = {
    contenido: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    download: PropTypes.string.isRequired
};

Link.defaultProps = {
    tipo: 'button',
    width: '100%',
    justifyContent: 'center',
    link: '#',
    download: false,
}


export default Link;
import PropTypes from 'prop-types';

const Link = ({ contenido='Link', width='100%', position='center', link='#', download='' }) => {

    const alignment = position === 'start' ? 'justify-content-start' : 'justify-content-center';

    return (
        <div className={`d-grid w-100 ${alignment}`} style={{ width:width }}>
            <a href={link} download={download} target='_blank' className='boton'>{contenido}</a>
        </div>
    )
};

Link.propTypes = {
    contenido: PropTypes.string,
    width: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    download: PropTypes.string
};


export default Link;
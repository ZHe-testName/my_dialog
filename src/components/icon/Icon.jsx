import c from './icon.module.css';
import * as icons from '../../icons/icons.js';
import PropTypes from 'prop-types';

function Icon ({size = 20, name, className = ''}){
    const [width, height] = size instanceof Array ? size : [size, size];
    const [icon, viewBox] = icons[name];

    return (
        <svg
            className={c.icon}
            width={width}
            height={height}
            dangerouslySetInnerHTML={{ __html: icon }}
            viewBox={viewBox}/>
    );
};

Icon.propTypes = {
    size: PropTypes.number,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;
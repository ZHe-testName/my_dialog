import React, { useContext } from "react";
import { AppContext } from "../../context";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import c from './theme.module.css';

function Theme (){
    const {theme, changeTheme} = useContext(AppContext);

    const onToogleTheme = e => {
        const { theme } = e.currentTarget.dataset;
        
        changeTheme(theme);
    };

    return (
        <div
            className={c.theme}
            data-theme={theme === 'dark' ? 'light' : 'dark'}
            onClick={onToogleTheme}>
                {theme === 'dark'
                    ? <IoIosMoon className='moon' size={20}/>
                    : <IoIosSunny className='sun' size={20}/>}
        </div>
    );
};

export default Theme;
import { useState } from 'react';
import c from './sender.module.css';

function Sender (){
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        console.log(value);
    };

    return (
        <form
            className={c.sender}
            onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Typing here..."
                value={value}
                onChange={onChange}
                required />

            <button>Send</button>
        </form>
    );
};

export default Sender;
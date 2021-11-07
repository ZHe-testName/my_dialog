import { useState } from 'react';
import PropTypes from 'prop-types';
import c from './sender.module.css';

function Sender ({addMessage, userAvatarUrl}){
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        addMessage({
            id: Date.now(),
            avatar: userAvatarUrl,
            message: value,
            date: new Date().toISOString(),
            is: 'my',
            status: 'sended',
        });

        setValue('');
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

Sender.propTypes = {
    addMessage: PropTypes.func.isRequired,
    userAvatarUrl: PropTypes.string.isRequired,
};

export default Sender;
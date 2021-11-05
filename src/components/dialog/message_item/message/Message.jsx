import c from './message.module.css';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { IoIosTrash } from 'react-icons';
import Icon from '../../icon/Icon';

function Message (props){
    const {id, text, date, status} = props;

    return (
        <div className={c.message} key={id}>
            <div className={c.text}>{text}</div>

            <div className={c.time}>{dayjs(date).format('HH:mm')}</div>

            <Icon 
                className={c.messageStatus}
                size={15}
                name={
                    status === 'sended' ? 'MessageSended' : 'MessageReaded'
                }/>

            <IoIosTrash 
                data-id={id}
                className={c.removeMessage}
                size={20}/>
        </div>
    );
};

Message.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["sended", "readed"]),
};

export default Message;
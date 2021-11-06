import c from './message_item.module.css';
import PropTypes from 'prop-types';
import Message from './message/Message';
import dayjs from 'dayjs';
import Icon from '../../icon/Icon';
import { IoIosTrash } from 'react-icons/io';


function MessageItem ({ isReverse, isRemovable, messages, avatar }){
    return (
        <div
            className={`${c.item} ${isReverse && c.reverse} ${isRemovable && c.removable}`}>
            <img 
                src={avatar} 
                alt="user picture" 
                className={c.avatar}/>

            <div className={c.list}>
                {
                    messages.map(item => (
                        <div className={c.message} key={item.id}>
                            <div className={c.text}>{item.text}</div>

                            <div className={c.time}>{dayjs(item.date).format('HH:mm')}</div>

                            <Icon 
                                className={c.messageStatus}
                                size={15}
                                name={
                                    item.status === 'sended' ? 'MessageSended' : 'MessageReaded'
                                }/>

                            <IoIosTrash
                                data-id={item.id}
                                className={c.removeMessage}
                                size={20}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

MessageItem.propTypes = {
    isReverse: PropTypes.bool.isRequired,
    isRemovable: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.oneOf(["sended", "readed"]),
      })
    ).isRequired,
  };

export default  MessageItem;
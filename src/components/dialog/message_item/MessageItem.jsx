import c from './message_item.module.css';
import PropTypes from 'prop-types';
import Message from './message/Message';


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
                    messages.map(item => <Message {...item}/>)
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
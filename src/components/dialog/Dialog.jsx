import { normalizeDialog } from '../../helpers';
import data from '../../data';
import PropTypes from 'prop-types';
import c from './dialog.module.css';
import MessageItem from './message_item/MessageItem';
import { useEffect, useReducer, useRef } from 'react';
import dialogsReducer, { ADD_MESSAGE, REMOVE_MESSAGE, UPDATE_STATUS } from '../../reducers/dialogs_reducer';

function Dialogs ({ message }){
    const dialogsRef = useRef();

    const [state, dispatch] = useReducer(dialogsReducer, {
        messages: data,
    });

    useEffect(() => {
        if (message){
            dispatch({
                type: ADD_MESSAGE,
                message: message,
            });

            setTimeout(() => {
                dispatch({
                    type: UPDATE_STATUS,
                    payload: {
                        id: message.id,
                        status: 'readed',
                    },
                });
            }, 2000);
        };

    }, [message]);

    useEffect(() => {
        dialogsRef.current.scrollTop = dialogsRef.current.scrollHeight;
    }, [state.messages.length]);

    const onRemove = id => {
        dispatch({
            type: REMOVE_MESSAGE,
            id: id,
        });
    };
    const normalizedDialog = normalizeDialog(state.messages);

    return (
        <div className={c.dialog}>
            <div className={c.overflow} ref={dialogsRef}>
                {
                    normalizedDialog.map(item => <MessageItem {...item} key={item.id} onRemove={onRemove}/>)
                }
            </div>
        </div>
    );
};

Dialogs.propTypes = {
        message: 
            PropTypes.shape({
                                avatar: PropTypes.string.isRequired,
                                id: PropTypes.number.isRequired,
                                message: PropTypes.string.isRequired,
                                date: PropTypes.string.isRequired,
                                status: PropTypes.oneOf(["sended", "readed"]),
                                is: 'my',
                            }),
};

export default Dialogs;
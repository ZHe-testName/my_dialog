export const REMOVE_MESSAGE = 'REMOVE_MESSAGE',
    ADD_MESSAGE = 'ADD_MESSAGE',
    UPDATE_STATUS = 'UPDATE_STATUS';

export default function dialogsReducer(state, action){
    switch (action.type){
        case REMOVE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(message => message.id !== action.id),
            };

        case ADD_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.message),
            };

        case UPDATE_STATUS:
            return {
                ...state,
                messages: state.messages.map(message => {
                    if (message.id === action.payload.id){
                        return {
                            ...message,
                            status: action.payload.status,
                        };
                    };

                    return message;
                }),
            };

        default:
            throw new Error('UNKCNOWN ACTION TYPE');
    };
};
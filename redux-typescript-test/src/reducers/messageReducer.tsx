import { MessageAction } from '../actions';
import { CHANGE_MESSAGE, CHANGE_TYPE } from '../constants/index';
import { Message } from '../types/index';

const defaultState = {
    type: 'text',
    value: 'Marco'
}

const message = (state: Message = defaultState, action: MessageAction) => {
    switch(action.type) {
        case CHANGE_MESSAGE:
            return {
                ...state,
                value: action.text
            }
        case CHANGE_TYPE:
            return {
                ...state,
                type: action.value
            }
        default:
            return state;
    }
}

export default message;
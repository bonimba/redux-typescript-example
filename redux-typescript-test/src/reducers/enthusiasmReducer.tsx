import { EnthusiasmAction } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const enthusiasm = (state: number = 1, action: EnthusiasmAction) => {
    switch(action.type) {
        case INCREMENT_ENTHUSIASM:
            return state + 1;
        case DECREMENT_ENTHUSIASM:
            return Math.max(1, state - 1);
        default:
            return state;
    }
};

export default enthusiasm;
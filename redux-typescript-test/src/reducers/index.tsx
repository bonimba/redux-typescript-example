import { StoreState } from '../types/index';
import enthusiasm from './enthusiasmReducer';
import message from './messageReducer';
import { combineReducers, Reducer } from 'redux';

const reducer: Reducer<StoreState> = combineReducers({
    enthusiasmLevel: enthusiasm,
    message
});

export default reducer;
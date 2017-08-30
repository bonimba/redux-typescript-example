import { StoreState } from '../types/index';
import reducers from '../reducers/index';
import { createStore } from 'redux';

const store = createStore<StoreState>(
    reducers
);

export default store;
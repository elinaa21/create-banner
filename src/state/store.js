import { combineReducers, createStore } from 'redux';
import { bannerReducer } from './reducers';

const reducers = combineReducers({
    banner: bannerReducer,
});

const store = createStore(reducers);

export default store;

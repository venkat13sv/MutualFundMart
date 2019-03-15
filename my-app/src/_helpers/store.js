import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import StateLoader from './state.loader';

const loggerMiddleware = createLogger();
const stateLoader = new StateLoader();

export const store = createStore(
    rootReducer,stateLoader.loadState(),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

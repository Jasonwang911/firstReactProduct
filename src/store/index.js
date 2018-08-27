import { createStore, applyMiddleware } from 'redux';
// applyMiddleware
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(
    applyMiddleware(reduxLogger, reduxThunk, reduxPromise)
));

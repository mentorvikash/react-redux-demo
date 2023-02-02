import {createStore} from 'redux'
import rootReducer from './rootreducer';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(logger))

export default store;
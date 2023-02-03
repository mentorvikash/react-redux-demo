import {createStore} from 'redux'
import rootReducer from './rootreducer';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;
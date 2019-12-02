import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import contactReducer from './reducers/contact'

export default createStore(contactReducer, applyMiddleware(thunk))
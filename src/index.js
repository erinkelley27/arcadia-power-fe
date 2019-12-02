import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './components/App';

import store from './store'
// import { createContact, deleteContact, updateContact } from './actions/contact'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

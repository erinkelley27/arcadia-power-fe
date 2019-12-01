import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './components/App';

import store from './store'
import { createContact, deleteContact, updateContact } from './actions/contact'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch(createContact('Erin', 'erinkelley27@gmail.com', '202-714-8726', 1))
store.dispatch(createContact('Justin', 'justinlawrence3000@gmail.com', '859-652-2356', 2))
store.dispatch(deleteContact(1))
store.dispatch(updateContact(2, {name: 'Justy'}))


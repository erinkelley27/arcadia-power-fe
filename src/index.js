import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import store from './store'
import { createContact, deleteContact } from './actions/contact'

ReactDOM.render(<App />, document.getElementById('root'));

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch(createContact('Erin', 'erinkelley27@gmail.com', '202-714-8726', 1))
store.dispatch(createContact('Justin', 'justinlawrence3000@gmail.com', '859-652-2356', 2))
store.dispatch(deleteContact(1))


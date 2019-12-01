import React from 'react';
import NewContactForm from '../containers/NewContactForm'
import ContactList from '../containers/ContactList'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Arcadia Power FE</h1>
      <NewContactForm />
      <ContactList />
    </div>
  );
}

export default App;

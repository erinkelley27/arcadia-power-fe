import React from 'react';
import NewContactForm from '../containers/NewContactForm'
import ContactList from '../containers/ContactList'

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="https://d1hbpr09pwz0sk.cloudfront.net/logo_url/arcadia-power-ea488865" alt="logo" />
      </div>
      <NewContactForm />
      <ContactList />
    </div>
  );
}

export default App;

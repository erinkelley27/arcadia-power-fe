import React from 'react'

import List from '../components/List'
import Item from '../components/Item'

import { connect } from 'react-redux'
import { fetchContacts, deleteContact, updateContact } from '../actions/contact'

const Contacts = ({ contacts, error, deleteContact, updateContact }) => {
    if (error) {
      return <p className='create-error'>Error making your request.</p>
    } else {
      return <List>{
        contacts.map((contact, index) => (
          <Item
            key={index}
            {...contact}
            onClick={evt => {
              evt.preventDefault();
              deleteContact(contact.id);
            }}
            onChange={evt => {
              evt.preventDefault()
              updateContact(contact.id, { [evt.target.name]: evt.target.value } )
            }}
          />
        ))
      }</List>;
    }
  }

const mapStateToProps = state => ({
    contacts: state.contacts,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    fetchContacts: dispatch(fetchContacts()),
    deleteContact: id => dispatch(deleteContact(id)),
    updateContact: (id, update) => dispatch(updateContact(id, update))
})

const ContactList = connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default ContactList
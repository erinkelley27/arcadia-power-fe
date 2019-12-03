import React from 'react'

import List from '../components/List'
import Item from '../components/Item'

import { connect } from 'react-redux'
import { fetchContacts, deleteContact, updateContact } from '../actions/contact'

const Contacts = ({ contacts, fetchContacts, deleteContact, updateContact }) => {
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

const mapStateToProps = state => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    fetchContacts: dispatch(fetchContacts()),
    deleteContact: id => dispatch(deleteContact(id)),
    updateContact: (id, update) => dispatch(updateContact(id, update))
})

const ContactList = connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default ContactList
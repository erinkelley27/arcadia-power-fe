import React from 'react'

import List from '../components/List'
import Item from '../components/Item'

import { connect } from 'react-redux'
import { deleteContact, updateContact } from '../actions/contact'

const Contacts = ({ contacts, onDelete, onUpdate }) => {
    return <List>{
      contacts.map((contact, index) => (
        <Item
          key={index}
          {...contact}
          onClick={evt => {
            evt.preventDefault();
            onDelete(contact.id);
          }}
          onChange={evt => {
            evt.preventDefault()
            onUpdate(contact.id, { [evt.target.name]: evt.target.value } )
          }}
        />
      ))
    }</List>;
  }

const mapStateToProps = state => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteContact(id)),
    onUpdate: (id, update) => dispatch(updateContact(id, update))
})

const ContactList = connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default ContactList
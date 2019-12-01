import React from 'react'

import List from '../components/List'
import Item from '../components/Item'

import { connect } from 'react-redux'
import { deleteContact } from '../actions/contact'

const Contacts = ({ contacts, onDelete }) => {
    return <List>{
      contacts.map((contact, index) => (
        <Item
          key={index}
          {...contact}
          onClick={e => {
            e.preventDefault();
            onDelete(contact.id);
          }}
        />
      ))
    }</List>;
  }

const mapStateToProps = state => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteContact(id))
})

const ContactList = connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default ContactList
import React, { Component } from 'react'
import { createContact } from '../actions/contact'

import './ContactForm.css'

class ContactForm extends Component {
    handleSubmit = (evt) => {
        evt.preventDefault()
        let name = evt.target[0].value
        let email = evt.target[1].value
        let phone = evt.target[2].value
        console.log(name, email, phone)
        this.props.dispatch(createContact(name, email, phone))
        evt.target[0].value = ''
        evt.target[1].value = ''
        evt.target[2].value = ''
    }
    render() {
        console.log(this.props)
        return (
            <div className='ContactForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input className='input-field' type='text' />
                    <label>Email</label>
                    <input className='input-field' type='text' />
                    <label>Phone</label>
                    <input className='input-field' type='text' />
                    <input className='submit' type='submit' />
                </form>
            </div>
        )
    }
}

export default ContactForm
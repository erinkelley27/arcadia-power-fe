import React, { Component } from 'react'
import { createContact } from '../actions/contact'

import './ContactForm.css'

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }
    // The information the user adds to each input field will be added to the component's state
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    // On submit, the new contact will be created and the input fields will be cleared.
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(createContact(
            this.state.name,
            this.state.email,
            this.state.phone
            ))
        this.setState({ name: '', email: '', phone: ''})
    }
    render() {
        return (
            <div className='ContactForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input onChange={this.handleChange} className='input-field' name='name' value={this.state.name} type='text' />
                    <label>Email</label>
                    <input onChange={this.handleChange} className='input-field' name='email' value={this.state.email} type='text' />
                    <label>Phone</label>
                    <input onChange={this.handleChange} className='input-field' name='phone' value={this.state.phone} type='text' />
                    <input className='submit' type='submit' />
                </form>
            </div>
        )
    }
}

export default ContactForm
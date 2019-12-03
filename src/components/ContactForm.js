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

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(createContact(this.state.name, this.state.email, this.state.phone))
    }
    render() {
        return (
            <div className='ContactForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input onChange={this.handleChange} className='input-field' name='name' type='text' />
                    <label>Email</label>
                    <input onChange={this.handleChange} className='input-field' name='email' type='text' />
                    <label>Phone</label>
                    <input onChange={this.handleChange} className='input-field' name='phone' type='text' />
                    <input className='submit' type='submit' />
                </form>
            </div>
        )
    }
}

export default ContactForm
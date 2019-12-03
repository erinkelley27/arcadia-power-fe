import {
    FETCH_CONTACTS_PENDING,
    FETCH_CONTACTS_SUCCESS,
    CREATE_CONTACT_PENDING,
    CREATE_CONTACT_SUCCESS,
    DELETE_CONTACT,
    UPDATE_CONTACT
  } from "../constants/contact";

import axios from 'axios'

export function fetchContactsPending() {
    return {
        type: FETCH_CONTACTS_PENDING
    }
}

export function fetchContactsSuccess(contacts) {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        contacts: contacts
    }
}

export function fetchContacts() {
    return dispatch => {
        dispatch(fetchContactsPending())
        return axios.get('http://localhost:3001/contacts')
        .then(res => {
            console.log(res)
            dispatch(fetchContactsSuccess(res.data))
        })
    }
}

export function createContactPending() {
    return {
        type: CREATE_CONTACT_PENDING
    }
}

export function createContactSuccess(contact) {
    return {
        type: CREATE_CONTACT_SUCCESS,
        payload: {
            ...contact
        }
    }
}

export function createContact(name, email, phone, id) {
    return (dispatch, getState) => {
        dispatch(createContactPending())
        console.log('current state: ', getState())
        axios.post('http://localhost:3001/contacts', {
            name,
            email,
            phone,
            id
        })
        .then(res => {
            console.log(res.data)
            dispatch(createContactSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
        })

    }
}

export function deleteContact(id) {
    return {
        type: DELETE_CONTACT,
        payload: {
            id
        }
    }
}

export function updateContact(id, updatedContact) {
    return {
        type: UPDATE_CONTACT,
        payload: {
            id,
            updatedContact
        }
    }
}

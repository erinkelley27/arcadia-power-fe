// Import constants
import {
    FETCH_CONTACTS_PENDING,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
    CREATE_CONTACT_PENDING,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAILURE,
    DELETE_CONTACT_PENDING,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE,
    UPDATE_CONTACT_PENDING,
    UPDATE_CONTACT_SUCCESS,
    UPDATE_CONTACT_FAILURE
  } from "../constants/contact";

import axios from 'axios'

// Action creator fired off at start of get request
export function fetchContactsPending() {
    return {
        type: FETCH_CONTACTS_PENDING
    }
}

// Action creator fired at the successful completion of get request
export function fetchContactsSuccess(contacts) {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        contacts: contacts
    }
}


// Action creator fired at failure of get request
export function fetchContactsFailure() {
    return {
        type: FETCH_CONTACTS_FAILURE
    }
}


// Asynchronous action creator to handle getting a list of contacts.
// Developed with redux-thunk
export function fetchContacts() {
    return (dispatch) => {
        dispatch(fetchContactsPending())
        return axios.get('http://localhost:3001/contacts')
        .then(res => {
            dispatch(fetchContactsSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchContactsFailure())
        })
    }
}

// Action creator fired off at start of post request
export function createContactPending() {
    return {
        type: CREATE_CONTACT_PENDING
    }
}

// Action creator fired at the successful completion of post request
export function createContactSuccess(contact) {
    return {
        type: CREATE_CONTACT_SUCCESS,
        payload: {
            ...contact
        }
    }
}

// Action creator fired at failure of post request
export function createContactFailure() {
    return {
        type: CREATE_CONTACT_FAILURE
    }
}

// Asynchronous action creator to handle creating a contact.
// Developed with redux-thunk
export function createContact(name, email, phone, id) {
    return (dispatch) => {
        dispatch(createContactPending())
        axios.post('http://localhost:3001/contacts', {
            name,
            email,
            phone,
            id
        })
        .then(res => {
            dispatch(createContactSuccess(res.data))
        })
        .catch(err => {
            dispatch(createContactFailure())
        })

    }
}

// Action creator fired off at start of delete request
export function deleteContactPending() {
    return {
        type: DELETE_CONTACT_PENDING
    }
}

// Action creator fired at the successful completion of delete request
export function deleteContactSuccess(id) {
    return {
        type: DELETE_CONTACT_SUCCESS,
        payload: {
            id
        }
    }
}

// Action creator fired at failure of delete request
export function deleteContactFailure() {
    return {
        type: DELETE_CONTACT_FAILURE
    }
}

// Asynchronous action creator to handle deleting a contact.
// Developed with redux-thunk
export function deleteContact(id) {
    return (dispatch) => {
        dispatch(deleteContactPending())
        axios.delete('http://localhost:3001/contacts/' + id)
        .then(res => {
            dispatch(deleteContactSuccess(id))
        })
        .catch(err => {
            dispatch(deleteContactFailure())
        })
    }
}

// Action creator fired off at start of put request
export function updateContactPending() {
    return {
        type: UPDATE_CONTACT_PENDING
    }
}

// Action creator fired at the successful completion of put request
export function updateContactSuccess(id, updatedContact) {
    return {
        type: UPDATE_CONTACT_SUCCESS,
        payload: {
            id,
            updatedContact
        }
    }
}

// Action creator fired at failure of put request
export function updateContactFailure() {
    return {
        type: UPDATE_CONTACT_FAILURE
    }
}

// Asynchronous action creator to handle updating a contact.
// Developed with redux-thunk
export function updateContact(id, updatedContact) {
    return (dispatch) => {
        dispatch(updateContactPending())
        axios.put('http://localhost:3001/contacts/' + id, {
            ...updatedContact
        })
        .then(res => {
            dispatch(updateContactSuccess(id, updatedContact))
        })
        .catch(err => {
            dispatch(updateContactFailure())
        })
    }
}

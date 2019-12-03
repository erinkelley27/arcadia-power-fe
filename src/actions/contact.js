import {
    FETCH_CONTACTS_PENDING,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
    CREATE_CONTACT_PENDING,
    CREATE_CONTACT_SUCCESS,
    DELETE_CONTACT_PENDING,
    DELETE_CONTACT_SUCCESS,
    UPDATE_CONTACT_PENDING,
    UPDATE_CONTACT_SUCCESS
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

export function fetchContactsFailure() {
    return {
        type: FETCH_CONTACTS_FAILURE
    }
}

export function fetchContacts() {
    return dispatch => {
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
            console.log(err)
        })

    }
}

export function deleteContactPending() {
    return {
        type: DELETE_CONTACT_PENDING
    }
}

export function deleteContactSuccess(id) {
    return {
        type: DELETE_CONTACT_SUCCESS,
        payload: {
            id
        }
    }
}

export function deleteContact(id) {
    return (dispatch, getState) => {
        dispatch(deleteContactPending())
        axios.delete('http://localhost:3001/contacts/' + id)
        .then(res => {
            dispatch(deleteContactSuccess(id))
        })
        .catch(err => {
        })
    }
}

export function updateContactPending() {
    return {
        type: UPDATE_CONTACT_PENDING
    }
}

export function updateContactSuccess(id, updatedContact) {
    return {
        type: UPDATE_CONTACT_SUCCESS,
        payload: {
            id,
            updatedContact
        }
    }
}

export function updateContact(id, updatedContact) {
    return (dispatch, getState) => {
        dispatch(updateContactPending())
        axios.put('http://localhost:3001/contacts/' + id, {
            ...updatedContact
        })
        .then(res => {
            dispatch(updateContactSuccess(id, updatedContact))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

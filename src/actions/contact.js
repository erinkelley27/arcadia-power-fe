import {
    FETCH_CONTACTS_PENDING,
    FETCH_CONTACTS_SUCCESS,
    CREATE_CONTACT,
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
        // .then(res => res.json())
        .then(res => {
            console.log(res)
            dispatch(fetchContactsSuccess(res.data))
        })
    }
}

export function createContact(name, email, phone, id) {
    return {
        type: CREATE_CONTACT,
        payload: {
            name,
            email,
            phone,
            id
        }
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

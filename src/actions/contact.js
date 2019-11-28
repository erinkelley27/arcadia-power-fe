import { CREATE_CONTACT, DELETE_CONTACT } from '../constants/contact'

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

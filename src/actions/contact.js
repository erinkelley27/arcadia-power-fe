import { CREATE_CONTACT } from '../constants/contact'

export function createNewContact(name, email, phone, id) {
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
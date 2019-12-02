import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../constants/contact";

const DEFAULT_STATE = {
  contacts: []
}

export default function contactReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case DELETE_CONTACT:
        return {
            ...state,
            contacts: state.contacts.filter(contact => {
                return contact.id !== action.payload.id
            })
        }
    case UPDATE_CONTACT:
        return {
            ...state,
            contacts: state.contacts.map(contact => {
                if (contact.id !== action.payload.id) {
                    return contact
                }
                return {
                    ...contact,
                    ...action.payload.updatedContact
                }
            })
        }
    default:
      return state;
  }
}
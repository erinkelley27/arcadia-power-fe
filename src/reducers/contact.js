import { CREATE_CONTACT, DELETE_CONTACT } from "../constants/contact";

const DEFAULT_STATE = {
  contacts: []
}

export default function contactReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
        return {
            ...state,
            contacts: state.contacts.filter((contact) => {
                return contact.id !== action.payload.id
            })
        }
    default:
      return state;
  }
}
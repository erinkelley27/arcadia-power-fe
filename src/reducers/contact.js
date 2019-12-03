import {
  FETCH_CONTACTS_PENDING,
  FETCH_CONTACTS_SUCCESS,
  CREATE_CONTACT_PENDING,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_PENDING,
  DELETE_CONTACT_SUCCESS,
  UPDATE_CONTACT_PENDING,
  UPDATE_CONTACT_SUCCESS,
  // UPDATE_CONTACT
} from "../constants/contact";

const DEFAULT_STATE = {
  isFetching: false,
  isCreating: false,
  isDeleting: false,
  isUpdating: false,
  contacts: [],
  error: null
}

export default function contactReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_CONTACTS_PENDING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_CONTACTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        contacts: action.contacts
      })
    case CREATE_CONTACT_PENDING:
        return Object.assign({}, state, {
          isCreating: true
        })
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        isCreating: false,
        contacts: [...state.contacts, action.payload]
      }
    case DELETE_CONTACT_PENDING:
        return Object.assign({}, state, {
          isDeleting: true
        })
    case DELETE_CONTACT_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            contacts: state.contacts.filter(contact => {
                return contact.id !== action.payload.id
            })
        }
    case UPDATE_CONTACT_PENDING:
        return Object.assign({}, state, {
          isUpdating: true
        })
    case UPDATE_CONTACT_SUCCESS:
        return {
            ...state,
            isUpdating: false,
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
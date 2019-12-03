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
        contacts: action.contacts,
        error: false
      })
    case FETCH_CONTACTS_FAILURE:
      return Object.assign({}, state, {
        error: true
      })
    case CREATE_CONTACT_PENDING:
        return Object.assign({}, state, {
          isCreating: true
        })
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        isCreating: false,
        contacts: [...state.contacts, action.payload],
        error: false
      }
    case CREATE_CONTACT_FAILURE:
      return Object.assign({}, state, {
        error: true
      })
    case DELETE_CONTACT_PENDING:
        return Object.assign({}, state, {
          isDeleting: true
        })
    case DELETE_CONTACT_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            error: false,
            contacts: state.contacts.filter(contact => {
                return contact.id !== action.payload.id
            })
        }
    case DELETE_CONTACT_FAILURE:
      return Object.assign({}, state, {
        error: true
      })
    case UPDATE_CONTACT_PENDING:
        return Object.assign({}, state, {
          isUpdating: true
        })
    case UPDATE_CONTACT_SUCCESS:
        return {
            ...state,
            isUpdating: false,
            error: false,
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
    case UPDATE_CONTACT_FAILURE:
        return Object.assign({}, state, {
          error: true
        })
    default:
      return state;
  }
}
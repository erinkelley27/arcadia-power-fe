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

// Declare default state - the state the app will start with
const DEFAULT_STATE = {
  isFetching: false,
  isCreating: false,
  isDeleting: false,
  isUpdating: false,
  contacts: [],
  error: null,
  payload: null
}

// The reducer
// State will be updated based on the action type
// For pending action types, the state of isFetching will be set to true
// For success action types, the state of isFetching will be set to false,
// error set to false and contacts ajusted based on CRUD functionality.
// For failure action types, the state of error will be set to true.
export default function contactReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_CONTACTS_PENDING:
      return Object.assign({}, state, {
        isFetching: true
      })
    // The state of contacts will be updated to include the list of contacts from the db.
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
    // The newly created contact will be added to the contact list in state
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
    // The contact the user has selected to delete will be removed from state by programming the 
    // .filter() array method to only return contacts whose id does not equal the one selected
    case DELETE_CONTACT_SUCCESS:
        return Object.assign({}, state, {
          isDeleting: false,
          error: false,
          payload: action.payload.id,
          contacts: state.contacts.filter(contact => {
            return contact.id !== action.payload.id
          })
        })
    case DELETE_CONTACT_FAILURE:
      return Object.assign({}, state, {
        error: true
      })
    case UPDATE_CONTACT_PENDING:
        return Object.assign({}, state, {
          isUpdating: true
        })
    // The contact will be updated by mapping through the contact list.
    // First, all contacts that were unaltered will be returned.
    // Second, the updated contact will be put back into the array using the spread operator.
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
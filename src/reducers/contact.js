import { CREATE_CONTACT } from "../constants/contact";

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

    default:
      return state;
  }
}
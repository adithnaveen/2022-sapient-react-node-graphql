import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, GET_CONTACTS } from "../types/contants";



export default (state = { contacts: [] }, action) => {

    switch (action.type) {
        case ADD_CONTACT:
            {
                let contacts = [...state.contacts];
                contacts.push(action.data);
                return { ...state, contacts };
            }

        case DELETE_CONTACT:
            {
                let contacts = [...state.contacts];
                let index = contacts.findIndex(c => c.id === action.data);
                if (index !== -1) {
                    contacts.splice(index, 1);
                }
                return { ...state, contacts };
            }
        case GET_CONTACTS:
            return { ...state, contacts: action.data };

        case GET_CONTACT:
            return { ...state, contact: action.data }

        default:
            return state;
    }
}
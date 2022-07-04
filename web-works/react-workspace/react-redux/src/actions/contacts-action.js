import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, GET_CONTACT } from "../types/contants";

const url = "http://localhost:4000/contacts/";

// in react component need to dispatch 
// dispatch will be given by somebody - dispatch

export const fetchContacts = () => {
    return async (dispatch) => {
        let resp = await fetch(url);
        let contacts = await resp.json();
        let action = { type: GET_CONTACTS, data: contacts };

        dispatch(action);
    }
}

export const addContact = (contact) => async (dispatch) => {

    let resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let newContact = await resp.json();
    dispatch({ type: ADD_CONTACT, data: newContact });
}

export const deleteContact = (id) => async (dispatch) => {
    await fetch(url + id, { method: 'DELETE' });
    dispatch({ type: DELETE_CONTACT, data: id });
}

// get 1 contact 

export const getContactById = (id) => async (dispatch) => {
    let resp = await fetch(url + id);
    let contact = await resp.json();
    dispatch({ type: GET_CONTACT, data: contact });
}




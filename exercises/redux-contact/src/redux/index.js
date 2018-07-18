import { createStore } from 'redux';

const initialState = {
    contacts: []
}


////////// REDUCER(S)
const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        default:
            return state;
    }
}

// ACTION CREATORS
export const addContact = contact => {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

const store = createStore(contactReducer);

store.subscribe(() => console.log(store.getState()));

export default store;
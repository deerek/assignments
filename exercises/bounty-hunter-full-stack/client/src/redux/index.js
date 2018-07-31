import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
    bounties: [],
    loading: true,
    err: undefined
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOUNTIES":
            return {
                ...state,
                loading: false,
                bounties: action.bounties
            }
            default:
                return state;
    }
}

// ACTION CREATORS

const url = "/bounties";

export const getBounties = () => {
    // call axios and get some information in return
    return dispatch => {
        axios.get(url)
            .then(response => {
                dispatch({
                    type: "GET_BOUNTIES",
                    bounties: response.data
                })
                console.log(response.data);
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
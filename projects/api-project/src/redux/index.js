import { CreateStore } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

const initialState = {
    venues: []
}

/// REDUCERS

const venueReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case "GET_VENUES":
            return {
                venue: action.response.venue,
                loading: false
            }
        default:
            return prevState;
    }
}



/// ACTION CREATORS

export const getVenues = (venue) => {
    console.log('hello')
    return dispatch => {
        axios.get('https://api.foursquare.com/v2/venues/explore?ll=40.765905,-111.888542&client_id=40APDXCU1MODOC2T1VBC0ERTKUQ0SIDZC3FJSB4FUR2FKMHJ&client_secret=YBVJG3DXNSJPAUVDDT3FNO14BQFSXE4AQ44B33HMHWDYGQFR&v=20180716&section=food&limit=3')
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "GET_VENUES",
                    venue: response.data.value
                })
            })
    }
}

const store = createStore(venueReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;
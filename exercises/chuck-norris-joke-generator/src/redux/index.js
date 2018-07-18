import { CreateStore} from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import axios from 'axios';

const initialState = {
    joke: null,
    loading: false
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "GET_JOKE":
            return {
                joke: action.joke,       ////////// Brush up on this cause... what? why?
                loading: false
            }
        default:
            return prevState;
    }
}

// ACTION CREATORS

export const getJoke = () => {
    return dispatch => {
        axios.get("http://api.icndb.com/jokes/random")
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "GET_JOKE",
                    joke: response.data.value
                })
            })
    }
}

/////////////////
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;


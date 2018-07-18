import { CreateStore } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import axios from "axios";
import venuesReducer from "./reducers";

const store = createStore(venuesReducer, applyMiddleware(thunk));

export default store;
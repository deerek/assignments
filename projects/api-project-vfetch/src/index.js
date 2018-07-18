/////// Import REACT stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// IMPORT REDUX STUFF
import { Provider } from "react-redux";
import store from "./redux"

////// Import COMPONENTS
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
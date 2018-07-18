import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'whatwg-fetch';

// Import COMPONENTS
import Header from './Header';
import Venue from './Venue';
import Faves from './Faves';
import VenueProfile from './VenueProfile'
import {Search} from './Search';

function App() {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Venue} />
                <Route path="/faves" component={Faves} />
                <Route path="/profile" component={VenueProfile} />
            </Switch>
        </div>
    )
}

export default App;
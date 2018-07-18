import React, {Component} from 'react';

// COMPONENTS
import Nav from './Nav';
import Joke from './Joke';
import About from './About';

// ROUTER
import { Switch, Route } from 'react-router-dom';

function App(props){
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Joke}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        </div>
    )
}

export default App;
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Services from './views/Services';
import './app.css';

function App () {
    return (
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
            </Switch>
            <Footer />
        </div>
    )
}




export default App;

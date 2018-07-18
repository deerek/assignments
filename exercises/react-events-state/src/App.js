import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SuperHero from "./SuperHero";

class App extends Component {
  constructor() {
    super();
    this.state = {counter: 0} // you can only assign this.state here in constructor
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }
  up() {
    this.setState((prevState) => ({counter: prevState.counter + 1}));
  }
  down() {
    this.setState((prevState) => ({counter: prevState.counter - 1 }));
  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.up}>Up</button>
        <button onClick={this.down}>Down</button>
      </div>
    )
  }
}

export default App;

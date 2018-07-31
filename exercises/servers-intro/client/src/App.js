import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  componentDidMount() {
    axios.get("/movies/").then(response => console.log(response.data))
  }
  
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
      </div>
    );
  }
}

export default App;

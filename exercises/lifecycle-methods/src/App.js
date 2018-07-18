import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
import HitList from './HitList'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: 'rebeccapurple',
      width: '50%',
      todos: []
    }
  }
  componentDidMount(){
    window.addEventListener('keypress', (e) => {
      if(e.key === 'a'){
        this.setState(prevState => ({
          color: prevState.color === 'rebeccapurple' ? 'cornflowerblue' : 'rebeccapurple'
        }))
      } else if(e.key === 'f'){
        this.setState(prevState => ({
          width: prevState.width === '50%' ? '25%' : '50%'
        }))
      }
    })
    axios.get('https://api.vschool.io/derek_bodily/todo').then(response => {
      this.setState({todos: response.data})
      console.log(response.data)
    })

  }
  componentWillUnmount(){
    window.removeEventListener('keypress')
  }
  render() {
    return (
      <div style={{backgroundColor: this.state.color, width: this.state.width, color: 'white'}} >
        <h1>Hello</h1>
        <Todo info={this.state.todos} />
      </div>
        
    );
  }
}

export default App;

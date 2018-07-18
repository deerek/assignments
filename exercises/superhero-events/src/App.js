import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SuperHero from "./SuperHero";

function App() {
  const heroes = [  
    {
    name: "The Comedian",
    realName: "Edward Morgen Blake",
    catchPhrase: "Gotcha bitch!",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/1062.jpg",
    powerstats: {
      intelligence: 63,
      strength: 14,
      speed: 17,
      durability: 10,
      power: 12,
      combat: 80
      }  
    },
    {
    name: "Dr Manhattan",
    realName: "Jonathan Osterman",
    catchPhrase: "I'm the doctor. lol.",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/884.jpg",
    powerstats: {
      intelligence: 88,
      strength: 100,
      speed: 42,
      durability: 100,
      power: 100,
      combat: 42
      }
    },
    {
    name: "Nite Owl",
    realName: "Daniel Dreiberg",
    catchPhrase: "Scrrrrreeeeeeeeech!!!!!",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/1059.jpg",
    powerstats: {
      intelligence: 72,
      strength: 45,
      speed: 42,
      durability: 47,
      power: 76,
      combat: 87
      }
    },
    {
    name: "Rorschach",
    realName: "Walter Joseph Kovacs",
    catchPhrase: "What comes to mind when you see my face?",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/771.jpg",
    powerstats: {
      intelligence: 75,
      strength: 10,
      speed: 29,
      durability: 20,
      power: 23,
      combat: 80
      }
    },
    {
    name: "Ozymandias",
    realName: "Adrian Veidt",
    catchPhrase: "What even the hell am i?",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/1063.jpg",
    powerstats: {
      intelligence: 100,
      strength: 18,
      speed: 33,
      durability: 20,
      power: 49,
      combat: 95
      }
    },
  ]
  const heroComponents = heroes.map((hero, index) => {
    return <SuperHero hero={hero} />
  })
  return (
    <div className="appContent">
      {heroComponents}
    </div>
  )
}

export default App;

// create click event on the SuperHero component
// click event launches alert box
// alert box contains the super hero's catch phrase
// map through the super heroes to get their info
// connect that info between the App and SuperHero component




// class App extends Component {
//   constructor() {
//     super();
//     this.state = {counter: 0} // you can only assign this.state here in constructor
//     this.up = this.up.bind(this);
//     this.down = this.down.bind(this);
//   }
//   up() {
//     this.setState((prevState) => ({counter: prevState.counter + 1}));
//   }
//   down() {
//     this.setState((prevState) => ({counter: prevState.counter - 1 }));
//   }
//   render() {
//     return (
//       <div>
//         <h2>{this.state.counter}</h2>
//         <button onClick={this.up}>Up</button>
//         <button onClick={this.down}>Down</button>
//       </div>
//     )
//   }
// }

// export default App;

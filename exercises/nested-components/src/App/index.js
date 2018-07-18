import React, {Component} from "react";
// import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles.css";

class App extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            age: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    handleSubmit(e) {
        e.preventDefault()
        alert(`Hello ${this.state.name} of age ${this.state.age}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" value={this.state.name} name='name' onChange={this.handleChange}/>
                    <input type="number" placeholder="Age" value={this.state.age} name='age' onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}





// function App() {
//     const styles = {
//         backgroundColor: 'lightgreen'
//     }
//     return (
//         <div style={styles}>
//             <Navbar />
//             <Body />
//             <Footer />
//         </div>
//     )
// }

export default App;
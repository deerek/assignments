import React, { Component } from 'react';
import Badge from './Badge';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            fName: '',
            lName: '',
            email: '',
            birthplace: '',
            phone: '',
            faveFood: '',
            about: '',
            person: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState(prevState => {
            return {
                person: [...this.state.person, this.state.name]
            }
        })
    }
    render() {
        const {fName, lName, email, birthplace, phone, faveFood, about} = this.state;
        console.log(this.state)
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="fName" value={this.state.value} placeholder="First Name" type="text"/>
                <input onChange={this.handleChange} name="lName" value={this.state.value} placeholder="Last Name" type="text"/>
                <input onChange={this.handleChange} name="email" value={this.state.value} placeholder="Email" type="email"/>
                <input onChange={this.handleChange} name="birthplace" value={this.state.value} placeholder="Place of Birth" type="text"/>
                <input onChange={this.handleChange} name="phone" value={this.state.value} placeholder="Phone number" type="text"/>
                <input onChange={this.handleChange} name="faveFood" value={this.state.value} placeholder="Favorite Food" type="text"/>
                <input onChange={this.handleChange} name="about" value={this.state.value} placeholder="Tell us about yourself" type="text"/>
                <button>Submit</button>
            </form>

            <Badge fName={fName} lName={lName} email={email} />

        </div>
    )
}
}

export default Form;
import React, { Component } from 'react';
// IMPORT REDUX STUFF
import { connect } from 'react-redux';
import { addContact } from './redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
        [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        // DISPATCH THE ADD ACTION CREATOR
        this.props.addContact(this.state)
    }
    render() {
        const {name, phone, email} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={name} onChange={this.handleChange} type="text" placeholder="Enter name" type="name" name="name"/>
                <input value={phone} onChange={this.handleChange} type="number" placeholder="Enter phone number" type="phone" name="phone"/>
                <input value={email} onChange={this.handleChange} type="text" placeholder="Enter email" type="email" name="email"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, {addContact}) (Form);
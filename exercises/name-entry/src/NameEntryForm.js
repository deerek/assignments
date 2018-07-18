import React, { Component } from "react";
import NamesDisplay from "./NamesDisplay";

class NameEntryForm extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const value = e.target.value
        this.setState({
            input: value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState(prevState => {
            return {
                names: [...this.state.names, this.state.input],
                input: ''
            }
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name" 
                    value={this.state.input} onChange={this.handleChange} name="input"/>
                    <button>Submit</button>
                </form>

                <NamesDisplay input={this.state.input} names={this.state.names} />

            </div>
            // probably some sort of <NameList /> here 
        )
    }
}

export default NameEntryForm;
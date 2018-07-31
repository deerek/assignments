import React, { Component } from 'react'

class BountyForm extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <input placeholder="Enter Type" type="text"/>
                    <input placeholder="Enter First Name" type="text"/>
                    <input placeholder="Enter Last Name" type="text"/>
                    <input placeholder="Enter Price" type="number"/>
                    <input label="Alive" type="checkbox"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default BountyForm;
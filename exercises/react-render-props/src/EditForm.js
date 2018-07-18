import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                name: "",
                email: ""
            },
            toggled: false
        }
    }

    render() {
        return (
            <div> 
                {this.props.childre}
            </div>
        )
    }
}

export default EditForm;
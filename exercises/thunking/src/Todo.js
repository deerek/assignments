import React, {Component} from 'react';

class Todo extends Component(props) {
    render() {
        return (
            <div>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.description }</p>
                <button>Delete</button>
            </div>
        )
    }
}

export default Todo;

import React, { Component } from 'react'
import HeaderCreate from './HeaderCreate';
import { Textfit } from 'react-textfit';

// STYLES
import '../../components.css';

export default class CreateStyle extends Component {
    render() {
        return (
            <div>
                <HeaderCreate />
                <div className="create-style-wrapper">
                    <div className="create-style-image-container">
                        <Textfit mode="multi" min="50" max="500">
                            Your Quote Will Go Here
                        </Textfit>
                    </div>
                    <div>
                        <form action="">
                            <h4>Enter Title</h4>
                            <input name="title" placeholder="Enter Title" type="text"/>
                            <h4>Enter Quote</h4>
                            <input name="quote" placeholder="Enter Quote" type="text"/>
                            <h4>Enter Tags</h4>
                            <input name="tags" placeholder="Enter Tags" type="text"/> <br />
                            <button>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

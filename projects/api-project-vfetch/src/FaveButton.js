import React, { Component } from 'react';
import { addFavorite } from "./redux/actions";
import { connect } from "react-redux";
import './app.css';

class FaveButton extends Component {
    render() {
        //make a onclick event listener that calls an action creator and feeds it the ID
        return (
            <div className="faveButtonContainer">
                <button onClick={() => this.props.addFavorite(this.props.id)}>Fave It</button>
            </div>
        )
    }
}

export default connect(null, { addFavorite })(FaveButton);
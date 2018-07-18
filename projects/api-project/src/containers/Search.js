import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getVenues} from '../redux/index';

class Search extends Component {
    
    /// component did mount
        // get request goes in that
            // once that object 
    render(props) {
    return (
        <div>
            <form action="">
                <select name="location select" id="">
                    <option name="slc" id="">Salt Lake City</option>
                    <option name="nyc" id="">New York City</option>
                    <option name="la" id="">Los Angeles</option>
                </select>
                <input placeholder="Enter search" type="search"/>
                <button onClick={props.getVenues}>Search </button>
                {props.venue && <p>{props.venue.name}</p>}
            </form>

        </div>
    )
}
}

export default connect(prevState => prevState, {getVenues})(Search);
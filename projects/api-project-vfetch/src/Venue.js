import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';
import './app.css';

import { connect } from "react-redux";
import { getVenues } from "./redux/actions";

import Search from './Search';
import FaveButton from './FaveButton';

class Venue extends Component {

    // sets up the handler for submitting search. references a method called getVenues
    handleSubmit(query) {
        this.props.getVenues(query);
    }

    // componentDidMount will now also call getVenues
    componentDidMount() {
        this.props.getVenues('Bars');
        // DISPATCH is going to do something here now
    }


    render() {
        console.log(this.props.venues);
        // this maps all responses from the server to this card function
        var venueList = this.props.venues.map((item, i) =>

            <div className="venueCard" key={i}>
                <div className="venueCardImg"></div>
                <h2>{item.venue.name}</h2>
                <h4>{item.venue.location.address}</h4>
                <h5>{item.venue.location.distance} meters away from you</h5>
                <FaveButton className="faveButtonCard" id={item.venue.id} />
            </div>
        );
        return (
            <div>
                <Search onSubmit={(value) => this.handleSubmit(value)} />
                <h3 className="homeTitle">Venues Near You</h3>
                <div className="venueList">{venueList}</div>
            </div>
        );
    }
}

export default connect(state => state, { getVenues })(Venue);

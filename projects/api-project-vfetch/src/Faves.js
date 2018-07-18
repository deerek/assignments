import React, {Component} from 'react'
import { getVenues } from "./redux/actions";
import {connect} from 'react-redux';
import FaveButton from './FaveButton';

class Faves extends Component {
    
/// connect redux store 

    render() {

        // const venueList = this.props.venues
        // console.log(this.props.venues);

            {/* <div key={i}>
                <img src="https://source.unsplash.com/800x450/?food,bar,pub,park,fun" alt="" />
                <h2>{item.venue.name}</h2>
                <h4>{item.venue.location.address}</h4>
                <h5>{item.venue.location.distance} meters away from you</h5>
                <FaveButton id={item.venue.id} />
            </div> */}
        
    
        return (
            <div>
                {}
            </div>
        )
    }
}

export default connect(state => state, {getVenues}) (Faves);



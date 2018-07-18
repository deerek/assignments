import React, { Component } from 'react';
import 'whatwg-fetch';
import Header from './Header';

class VenueProfile extends Component {

//   constructor() {
//     super();
//     this.state = {
//       venues: []
//     };
//   }

//   componentDidMount() {
//     this.getVenues();
//   }

//   getVenues() {

//     let setVenueState = this.setState.bind(this);

//     const venuesEndpoint = 'https://api.foursquare.com/v2/venues/4bdbc82b63c5c9b6f4ab2968';

//     const params = {
//       client_id: '40APDXCU1MODOC2T1VBC0ERTKUQ0SIDZC3FJSB4FUR2FKMHJ',
//       client_secret: 'YBVJG3DXNSJPAUVDDT3FNO14BQFSXE4AQ44B33HMHWDYGQFR',
//       limit: 1,
//       query: 'Pubs',
//       v: '20130619',
//       ll: '51.5073,0.1276'
//     };

//     fetch(venuesEndpoint + new URLSearchParams(params), {
//       method: 'GET'
//     }).then(response => response.json()).then(response => {
//       setVenueState({venues: response.response.items});
//     });
//   }

  render(props) {
        // var venueProfile = props.venues.map((item, i) =>

        // <div className="venueProfile" key={i}>
        //     <div className="venueImg"></div>
        //     <h2>{item.venue.name}</h2>
        //     <h4>{item.venue.location.address}</h4>
        //     <h5>{item.venue.location.distance} meters away from you</h5>
        // </div>

       
    return (

        <div>
            <Header />
            
        </div>
    );
  }
}

export default VenueProfile;


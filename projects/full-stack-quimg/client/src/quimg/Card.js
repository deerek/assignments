import React, { Component } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';
//import Quimg from '../components/Quimg';
import Avatar from '../ui/Avatar';

// STYLES
import './card.css';

class Card extends Component {
    render() {
        return (

        // probably have to wrap this in a link tag with Router to make it clickable
           
               // <Link to="/quimg">
                    <div className="cardWrapper">
                        <img src="https://cdn.dribbble.com/users/33827/screenshots/4876597/tlb_1x.jpg" alt=""/>
                        <h3>Name of Quimg</h3>
                        <button>Favorite</button>
                        <h6>Favorite counter</h6>
                    </div>
               // </Link>
           
        )
    }
}

export default Card;
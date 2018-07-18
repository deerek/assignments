import React from 'react';

function Card(props) {
    return (
        <div className="cardContainer">
            <div className="imgContainer">
                <img src="https://cdn.dribbble.com/users/237483/screenshots/4065365/breakfast.png" alt=""/>
            </div>
            <h2>Venue Name</h2>
            <h5>Venue Distance</h5>
            <h4>Venue Location</h4>
        </div>
    )
}


export default Card;
import React from "react";
import './Hero.css'; 

function SuperHero(props) {
    // render hero info
    //const heroComponents = props.hero.
    function handleClick(e) {
        e.preventDefault();
        alert(props.hero.catchPhrase);
      }
    return (
        <div className="heroComponent" onClick={handleClick}>
            <div className="heroImageContainer">
                <img src={props.hero.image} alt=""/>
            </div>
            <div className="infoBox">
                <h1>{props.hero.name}</h1>
                <h2>{props.hero.realName}</h2>
                <p>Stats will go here</p>
            </div>
        </div>
    )
}


export default SuperHero;
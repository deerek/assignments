import React from 'react';

// STYLES
import '../../components.css';


// FIGURE OUT HOW TO CLICK AN IMAGE AND SELECT THE URL FOR THE BG IMAGE
// DOUBLE CLICK SELECTS PHOTO AND ADVANCES TO NEXT SCREEN


const Img = props => (
  <li className="img-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Img;
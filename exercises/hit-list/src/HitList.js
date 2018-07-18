import React from 'react';
import axios from 'axios';

function HitList(props) {
    const hits = props.info.map(hit => {
        return <div className="hit-list-items">
                <div className="image-container">
                <img src={hit.image} alt="hit image"/>
            </div>
            <h2>{hit.name}</h2>
        </div>
    
})
    return (
        <div className="list-wrapper">{hits}</div>
    )
}


export default HitList;
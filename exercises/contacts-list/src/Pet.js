import React from "react";

function Pet(props) {
    return (
        <div>
            <h3>{props.pet.name}</h3>
            <h4>{props.pet.breed}</h4>
        </div>
    )
}


export default Pet;
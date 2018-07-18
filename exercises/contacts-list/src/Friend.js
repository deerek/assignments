import React from "react";
import FriendList from "./FriendList";
import Pet from "./Pet";

function Friend(props) {
    // render friend info
    const petComponents = props.friend.pets.map((pet, index) => {
        return <Pet pet={pet} />
    });
   return (
        <div>
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.age}</h2>
            <div>{petComponents}</div>
        </div>
    // map through pets and create <Pet /> components
   )
};

export default Friend;
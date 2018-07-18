import React, { Component } from 'react';

function Badge(props) {
    return (
        <div>
            <h2>{props.fName}</h2>
            <h2>{props.lName}</h2>
            <h2>{props.email}</h2>
            <h2>{props.birthplace}</h2>
            <h2>{props.phone}</h2>
            <h2>{props.faveFood}</h2>
            <h2>{props.about}</h2>
        </div>
    )
}


export default Badge;
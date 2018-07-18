import React from "react";

function MyComponent(props) {
    return (
        <div style={{backgroundColor: props.post.backgroundColor}}>
            <h1>{props.post.title}</h1>
            <h3>{props.post.subtitle}</h3>
            <p>{props.post.info}</p>
        </div>
    );
}


export default MyComponent

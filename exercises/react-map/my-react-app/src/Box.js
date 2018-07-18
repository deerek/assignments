import React from "react";


function Box() {
    const divStyles = { backgroundColor: "props.backgroundColor" } 
    return (
        <div className="box" style={divStyles}></div>
    )
}

export default Box;
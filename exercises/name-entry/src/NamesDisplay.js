import React from 'react';

const NamesDisplay = props => {
    
const mappedNames = props.names.map((name, i) => <li key={name + i}>  {name} </li> )
    return (
        <div>
        <h1>{props.input}</h1>
            {
                props.names.map((name, i) => {
                    return (
                        <p key={name + i}>{name}</p>
                    )
                })
            }
        </div>
    )
}

export default NamesDisplay
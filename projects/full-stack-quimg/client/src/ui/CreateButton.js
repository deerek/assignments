import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
// import './components.css';

function CreateButton() {
    return (
        <Link to="/create">
            <div className="createButton">
                <h1>+</h1>
            </div>
        </Link>
    )
}



export default CreateButton;

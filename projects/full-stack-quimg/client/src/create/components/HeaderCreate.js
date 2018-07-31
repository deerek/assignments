import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import '../../components.css';

function HeaderCreate() {
    return (
        <div className="headerCreateWrapper">
            <Link to="/">
                <h4>Cancel</h4>
            </Link>
            <h3>New Quimg</h3>
            <Link to="/createStyle">
                <h4>Next</h4>
            </Link>
        </div>
    )
}

export default HeaderCreate;

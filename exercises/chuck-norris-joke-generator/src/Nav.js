import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to="/">Jokes</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav;


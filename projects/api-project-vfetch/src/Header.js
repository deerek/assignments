import React from 'react'
import {Link} from 'react-router-dom'
import './app.css';

function Header() {
    return (
        <div className="headerWrapper">
            <h1>Venyou</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/faves">Faves</Link>
            </div>
        </div>
    )
}


export default Header;
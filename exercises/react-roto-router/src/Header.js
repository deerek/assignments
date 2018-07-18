import React from 'react';
import { Link } from "react-router-dom";
import './app.css';

function Header() {
    return(
        <div className="nav">
            <h1 className="header-title">React Roto Router</h1>
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </div>

        </div>
    )
}

export default Header;
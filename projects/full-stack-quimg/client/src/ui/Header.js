import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import '../components.css';

// OTHER COMPONENTS
import Avatar from './Avatar';
import Home from '../home/components/Home';
import MyProfile from '../users/components/MyProfile';

function Header() {
    return (
        
        <header className="headerMain">
            <Link to="/" component={Home}>
                <h1>Quimg</h1>
            </Link>
            <Link to="/myprofile" component={MyProfile}>
                <Avatar />
            </Link>
        </header>
    )
}

export default Header;
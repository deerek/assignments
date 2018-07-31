import React, { Component } from 'react'

////// STYLES
import '../components.css';

class Avatar extends Component {
    render() {
        return (
            <div className="avatarWrapper">
                <img className="headerAvatar" src="https://cdn.dribbble.com/users/60166/screenshots/4874958/eagle2_1x.jpg" alt=""/>
            </div>
        )
    }
}


export default Avatar;
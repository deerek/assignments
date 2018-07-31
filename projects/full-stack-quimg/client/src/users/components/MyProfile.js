import React, { Component } from 'react'
import Header from '../../ui/Header';
import CreateButton from '../../ui/CreateButton';
import Avatar from '../../ui/Avatar';
import Card from '../../quimg/Card';

// STYLES
import '../Users.css';

///////// I THINK THIS IS HOW TO DO ACTIVE USER
// const mapStateToProps = state => {
//     return {
//         _article: state.articles.article,
//         user: state.authUser.user    
//     }
// }



class MyProfile extends Component {
    render() {
        return (
            <div className="my-profile-container">
                <Header />
                <div className="my-profile-grid">
                    <div className="my-profile-info">
                        <Avatar />
                        <h1>Derek Bodily</h1>
                        <h5>username</h5>
                        <p>Bio info will go here</p>
                        <h3>Followers List</h3>
                        <h3>Following List</h3>
                    </div>
                    <div className="my-profile-content">
                        <div className="profile-tab-bar">
                            <h4>Quimges</h4>
                            <h4>Favorites</h4>
                        </div>
                        <div className="my-posts">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                
                <CreateButton />
            </div>
        )
    }
}

export default MyProfile;
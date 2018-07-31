import React from 'react';
import Header from '../../ui/Header';
import FeedMain from '../containers/FeedMain';
import CreateButton from '../../ui/CreateButton';

function Home() {
    return (
        <div className="homeWrapper">
            <Header />
            <FeedMain />
            <CreateButton />
        </div>
    )
}

export default Home;

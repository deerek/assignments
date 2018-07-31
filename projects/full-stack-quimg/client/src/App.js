import React from 'react'
import { Switch, Route } from 'react-router-dom';

//import Header from './ui/Header';
import Home from './home/components/Home';
import Quimg from './quimg/Quimg';
import MyProfile from './users/components/MyProfile';
import Create from './create/Create';
import CreateStyle from './create/components/CreateStyle';

function App() {
    return (
        <div className="appWrapper">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/quimg" component={Quimg} />
                <Route path="/myprofile" component={MyProfile} />
                <Route path="/create" component={Create} />
                <Route path="/createStyle" component={CreateStyle} />
            </Switch>
        </div>
    )
}

export default App;
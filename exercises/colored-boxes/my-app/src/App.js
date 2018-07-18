import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
    render() {
        const post = {
            title: 'Passed Title',
            subtitle: 'Subtitle From Another Mother',
            info: 'This informational text was received from a parent or something',
            backgroundColor: '#F6BB42'
        }
        // {
        //     title: 'Passed Title 2',
        //     subtitle: 'Subtitle From Another Mother 2',
        //     info: 'This informational text was received from a parent or something 2',
        //     backgroundColor: '#06D6A0'
        // }]
        return (
            <div>
                <MyComponent post={post} />
                <MyComponent post={post} />
                <MyComponent post={post} />
                <MyComponent post={post} />
            </div>
        );
    }
}

export default App;
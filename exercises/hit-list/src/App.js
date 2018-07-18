import React, {Component} from 'react';
import axios from 'axios';
import HitList from './HitList';
import './app.css';
import HitHeader from './HitHeader';
 

class App extends Component {
    constructor() {
        super();
        this.state = {
            hits: []
        }
    }
    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            this.setState({hits: response.data})
            console.log(response.data)
        })
    }
    render(){
        return (
            <div>
                <HitHeader />
                <HitList info={this.state.hits} />
            </div>
        )
}
}


export default App;
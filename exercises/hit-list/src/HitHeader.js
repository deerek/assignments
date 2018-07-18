import React, {Component} from 'react';
import axios from 'axios';

class HitHeader extends Component {
    constructor() {
        super();
        this.state = {
            color: ''
        }
    }
    componentDidMount() {
        axios.get('http://www.colr.org/json/color/random').then(response => {
            this.setState({color: response.data.new_color})
            console.log(response.data.new_color)
        })
    }
    render() {
        return (
            <div style= {{backgroundColor: `#` + this.state.color}} className="hit-header">
                <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Godfather15_flip.jpg" alt=""/>
                <h2>Don Corleone's Hit List</h2>
            </div>
        )
    }
    
}


export default HitHeader;
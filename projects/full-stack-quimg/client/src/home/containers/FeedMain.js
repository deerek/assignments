import React, {Component} from 'react';
import axios from 'axios';

// STYLES
import '../../components.css';

import Card from '../../quimg/Card';
import CreateButton from '../../ui/CreateButton';


///////// THIS WILL CONTAIN THE CODE THAT GETS ALL THE QUIMGES FROM MY API
    //// BUILDS AN LI AND MAPS THEM IN

class FeedMain extends Component {
    constructor() {
        super();
        this.state = {
            quimges: []
        }
    }

    componentDidMount() {
		axios.get('http://localhost:8080/quimges')
			.then(data => {
				// this sets the state of the imgs: [array] (created in this.state in constructor above) to data from API request
				this.setState({ quimges: data.data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
			// this.performSearch();
	}

    
    render() {
        return (
            <div className="feedMainWrapper">
                <Card data={this.state.quimges} />
                <CreateButton />
            </div>
        )
    }
}

export default FeedMain;
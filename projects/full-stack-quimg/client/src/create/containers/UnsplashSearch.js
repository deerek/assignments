import React, { Component } from 'react';
import axios from 'axios';

// STYLES
import '../../components.css';

export default class UnsplashSearch extends Component {
    
    constructor() {
        super();
        this.state = {
            searchText: ''
        };
    }
     

	onSearchChange = e => {
        this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
        e.currentTarget.reset();
        this.performSearch();
        console.log(e);
    };
    
    performSearch = (query) => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=0474fa3617bf6c0e375c7f4fa9e1ff072d6f985980cde1d522e50804352dbf56`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
            });
            console.log(query);
	};

	render() {
		return (
            <div className="unsplash-search-wrapper">
                <h3>Step 1: Select an image</h3>
                <form className="unsplash-search" onSubmit={this.handleSubmit}>
                    <input
                        type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        placeholder="Search..."
                    />
                    <button type="submit" id="submit" className="search-button">
                        <i className="material-icons icn-search">search</i>
                    </button>
                </form>
            </div>
		);
	}
}
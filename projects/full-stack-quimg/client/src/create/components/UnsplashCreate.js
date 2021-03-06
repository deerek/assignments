import React, { Component } from 'react';
import axios from 'axios';

// STYLES
import '../../components.css';

// UNSPLASH STUFF
import ImgList from '../containers/ImgList';
// import UnsplashSearch from './UnsplashSearch';

//import config from 'universal-config';
// import Unsplash, { toJson } from 'unsplash-js';

export default class UnsplashCreate extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

///// This call to the unsplash API should be a redux ACTION
	componentDidMount() {
		axios.get('https://api.unsplash.com/photos/?client_id=0474fa3617bf6c0e375c7f4fa9e1ff072d6f985980cde1d522e50804352dbf56')
			.then(data => {
				// this sets the state of the imgs: [array] (created in this.state in constructor above) to data from API request
				this.setState({ imgs: data.data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
			// this.performSearch();
	}

	performSearch = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=0474fa3617bf6c0e375c7f4fa9e1ff072d6f985980cde1d522e50804352dbf56`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
				console.log(data);
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="unsplash-header">
					<div className="unsplash-inner">
					</div>
				</div>
				<div className="unsplash-content">
					{/* passing props called data -> to ImgList component as state.imgs, imgs was set to data from API response in componentDidMount */}
					<ImgList data={this.state.imgs} />
				</div>
			</div>
		);
	}
}
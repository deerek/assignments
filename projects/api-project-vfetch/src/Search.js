import React, { Component } from 'react'
import './app.css';

import styled from 'styled-components';



 class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        }

        handleSubmit(e) {
            e.preventDefault();
            this.props.onSubmit(this.state.value);
        }

        handleChange(e) {
            this.setState({value: e.target.value});
        }

    render() {
        return (
            
                <div className="searchWrapper">
                    <h1>The Coolest Thing Since Forever</h1>
                    <form className="searchForm" onSubmit={this.handleSubmit}>
                        <input id="venueType" onChange={this.handleChange} value={this.state.value} placeholder="Search venues" type="text"/>
                        <h6 type="submit" value="submit">Search</h6>
                    </form>
                </div>
            
        )
    }
}

export default Search;

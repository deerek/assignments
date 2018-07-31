import React, { Component } from 'react'

import {connect} from 'react-redux';
import getBounties from './redux/index';


class BountyList extends Component {
    
    componentDidMount() {
        this.props.getBounties
    }

    render() {
        const {bounties} = this.props;
        return (
            <div>
                {bounties.map(bounty => {
                    <div key={bounty._id}>
                        <h1>{bounty.firstName} {bounty.lastName}</h1>
                        <h3>Status: {bounty.living ? "Alive" : "Dead"}</h3>
                    </div>
                })}
                <h1>Bounty Name</h1>
                <h4>Price $$$</h4>
                <h4>Jedi or Sith</h4>
                <h4>Dead or Alive</h4>
            </div>
        )
    }
}

export default connect(state => state, {getBounties}) (BountyList);

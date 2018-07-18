import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import {connect} from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import {getJoke} from './redux';

function Joke(props) {
    return (
        <div>
            <h1>Chuck Norris Joke of the Day</h1>
            <button onClick={props.getJoke}>Click here for a Chuckin' joke</button>
            {props.joke && <p>{props.joke.joke}</p>}
        </div>
    )
}

export default connect(prevState => prevState, {getJoke})(Joke);
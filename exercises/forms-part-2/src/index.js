import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


import React from 'react';
const App = (props) => {
    return (
        <div>
            <h1>Name: { props.name } </h1>
            <p>Age: { props.age } </p>
        </div>
    )
}

export default App;
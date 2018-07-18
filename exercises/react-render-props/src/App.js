import React, { Component } from 'react';

// COMPONENTS
import EditForm from './EditForm';
import Toggler from './shared/Toggler'

function App(props) {
    return (
        <div>
            <Toggler render={props => {
                const { toggled, handleToggle } = props;
                return (
                    <button onClick={handleToggle}>Edit</button>
                toggled && <EditForm>
                    <form>
                        <input type="text" placeholder="Enter name"/>
                        <input type="text" placeholder="Enter email"/>
                        <button>Submit</button>
                    </form>
                </EditForm>}
    
            }} />
        </div>
    )
}

export default App;
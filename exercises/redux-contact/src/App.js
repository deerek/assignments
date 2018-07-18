import React, { Component } from 'react';
import Form from './Form';
import ContactList from './ContactList';

function App(props) {
    return (
        <div>
            <Form />
            <ContactList />
            {/* // render contact list here */}
        </div>
    )
}

export default App;
import React from 'react';
import axios from 'axios';

function Todo(props) {
    const myTodos = props.info.map(todo => {
           return <div className="hit-list-items" key={todo._id}>
                <h1>{todo.title}</h1>
                <h4>{todo.price}</h4>
                <p>{todo.description}</p>
            </div>
    })
    return(
        <div>
            {myTodos}
        </div>
    )
}

export default Todo;
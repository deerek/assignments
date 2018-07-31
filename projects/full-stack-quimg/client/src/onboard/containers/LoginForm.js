import React, { Component } from 'react'


function Login() {
    return (
        <div>
            {/* these h3's will be Links that switch between Login and Sign Up */}
            <h3>Login</h3>
            <h3>Sign Up</h3>
            <form action="">
                <input name="username" placeholder="Username" type="text"/>
                <input name="password" placeholder="Password" type="text"/>
                <button>Login</button>
            </form>
        </div>
    )

}

export default Login;
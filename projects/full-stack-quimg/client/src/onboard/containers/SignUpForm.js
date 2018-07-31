import React, { Component } from 'react'


function SignUp() {
    return (
        <div>
            {/* these h3's will be Links that switch between Login and Sign Up */}
            <h3>Sign Up</h3>
            <h3>Login</h3>
            <form action="">
                <input name="firstName" placeholder="First name" type="text"/>
                <input name="lastName" placeholder="Last name" type="text"/>
                <input name="username" placeholder="Username" type="text"/>
                <input name="password" placeholder="Password" type="text"/>
                <button>Sign Up</button>
            </form>
        </div>
    )

}

export default SignUp;
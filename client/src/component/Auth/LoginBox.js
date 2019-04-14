import React, { Component } from 'react';

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {console.log('Login!')}

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                Log-in
                </div>
                <div className="box">

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    name="username"
                    className="login-input"
                    placeholder="Username"/>
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    name="password"
                    className="login-input"
                    placeholder="Password"/>
                </div>

                <button
                    type="button"
                    className="login-btn"
                    onClick={this
                    .submitLogin
                    .bind(this)}>Log-in</button>

                </div>
            </div>
        );
    }
}

export default LoginBox;
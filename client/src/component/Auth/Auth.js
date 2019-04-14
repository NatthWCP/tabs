import React, { Component } from 'react';

// import { Link } from 'react-router-dom'
import FadeTransition from '../Transition/FadeTransition.js'
import './Auth.css'
import LoginBox from './LoginBox.js';
import SignupBox from './SignupBox.js';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isSignupOpen: false
        };
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isSignupOpen: false});
    }

    showSignupBox() {
        this.setState({isLoginOpen: false, isSignupOpen: true});
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="root-container">
                <div className="box-controller">
                    <div className={"controller " + 
                        (this.state.isLoginOpen? "selected-controller": "")}
                        onClick={this.showLoginBox.bind(this)}>
                        Log-in
                    </div>
                    <div className={"controller " +
                        (this.state.isSignupOpen? "selected-controller": "")}
                        onClick={this.showSignupBox.bind(this)}>
                        Sign-up
                    </div>
                </div>

                <FadeTransition isOpen={this.state.isLoginOpen} duration={100}>
                    <div className="box-container">
                        <LoginBox/>
                    </div>
                </FadeTransition>
                <FadeTransition isOpen={this.state.isSignupOpen} duration={100}>
                    <div className="box-container">
                        <SignupBox/>
                    </div>
                </FadeTransition>
            </div>
        )
    }
}

export default Login;
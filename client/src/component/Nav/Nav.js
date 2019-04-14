import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props)
        
        this.isLoggedIn = false;
    }

    render() {
        return (
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://facebook.com">
                    <img src="https://www.zamzar.com/images/filetypes/ico.png" 
                        alt="A LOGO" width="40" height="100%" />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                        <NavLink to="/auth" activeClassName="is-active" className="navbar-item">Log-in</NavLink>
                        <NavLink to="/logout" activeClassName="is-active" className="navbar-item">Log-out</NavLink>
                        <NavLink to="/app" activeClassName="is-active" className="navbar-item">App</NavLink>
                        <a className="navbar-item" href="https://github.com/natthwcp" 
                            target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>                    
                    </div>
                </div>
                </div>
            </nav>
        );
    }
}

export default Nav;

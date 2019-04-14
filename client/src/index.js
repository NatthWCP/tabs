import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './index.css';
import App from './component/App/App';
import Nav from './component/Nav/Nav';
import Auth from './component/Auth/Auth'
import * as serviceWorker from './serviceWorker';

const Home = () => <h1>Home</h1>;
const Logout = () => <h1>Logout</h1>;
const NotFoundPage = () => <h1>404 Page Not Found</h1>

ReactDOM.render(
    <Router>
        <Nav/>
        <div className="container">
            <Switch>
                <Route path="/app" component={App} />
                <Route path="/auth" component={Auth} />
                <Route path="/logout" component={Logout} />
                <Route exact path="/" component={Home} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

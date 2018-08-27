import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './common/rem';
import './common/reset.scss';
import App from './App';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Lesson from './containers/Lesson/Lesson';

ReactDOM.render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}  />
                <Route path="/profile" component={Profile} />
                <Route path="/lesson" component={Lesson} />
                <Redirect path="/" to="/home" />
            </Switch>
        </App>
    </Router>
</Provider>, document.getElementById('root'));
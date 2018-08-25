import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Lesson from './containers/Lesson/Lesson';

ReactDOM.render(<Router>
    <App>
        <Switch>
            <Route path="/home" component={Home}  />
            <Route path="/profile" component={Profile} />
            <Route path="/lesson" component={Lesson} />
            <Redirect path="/" to="/home" />
        </Switch>
    </App>
</Router>, document.getElementById('root'));
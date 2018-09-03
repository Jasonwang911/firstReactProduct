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
import Detail from './containers/Detail';

ReactDOM.render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route exact path="/home" component={Home}  />
                <Route path="/profile" component={Profile} />
                <Route path="/lesson" component={Lesson} />
                <Route path="/detail/:lessonId" component={Detail} />
                <Redirect path="/" to="/home" />
            </Switch>
        </App>
    </Router>
</Provider>, document.getElementById('root'));
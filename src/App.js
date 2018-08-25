import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Lesson from './containers/Lesson/Lesson';

export default class App extends Component {
    render() {
        return this.props.children;
    }
}

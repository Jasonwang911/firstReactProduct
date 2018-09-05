import 'babel-polyfill';

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Loadable from 'react-loadable';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './common/rem';
import './common/reset.scss';
import App from './App';
import Loading from './components/Loading';
// import Home from './containers/Home/Home';
// import Profile from './containers/Profile/Profile';
// import Lesson from './containers/Lesson/Lesson';
// import Detail from './containers/Detail';
// import Login from './containers/Login';
// import Regist from './containers/Regist';
// 权限校验
import ProtectedRoute from './ProtectedRoute';
// 异步加载组件
import syncComponent from './syncComponent';

// let Home = syncComponent(() => import('./containers/Home/Home'));
let Profile = syncComponent(() => import('./containers/Profile/Profile'));
let Lesson = syncComponent(() => import('./containers/Lesson/Lesson'));
let Detail = syncComponent(() => import('./containers/Detail'));
let Login = syncComponent(() => import('./containers/Login'));
let Regist = syncComponent(() => import('./containers/Regist'));

const Home = Loadable({
    loader: () => import('./containers/Home/Home'),
    loading: Loading,
});

ReactDOM.render(<Provider store={store}> 
    <Router>
        <App>
            <Switch>
                <Route exact path="/home" component={Home}  />
                <Route path="/profile" component={Profile} />
                {/* <Route path="/lesson" component={Lesson} /> */}
                <ProtectedRoute path="/lesson" component={Lesson} />
                <Route path="/detail/:lessonId" component={Detail} />
                <Route path="/login" component={Login} />
                <Route path="/regist" component={Regist} />
                <Redirect path="/" to="/home" />
            </Switch>
        </App>
    </Router>
</Provider>, document.getElementById('root'));
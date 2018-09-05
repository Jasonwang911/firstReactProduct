import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toValidate } from './api/user';

@withRouter
export default class ProtectedRoute extends Component {

    async componentWillMount() {
        let {user} = await toValidate();
        if(!user) {
            this.props.history.push('/login');
        }
    }

    render() {
        let Com = this.props.component;
        return <Com />
    }
}

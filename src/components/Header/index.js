import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

@withRouter
export default class MHeader extends Component {

    back = () => {
        this.props.history.go(-1);
    }

    render() {
        return (
            <div className="m-header">
                <i className="icont-back" onClick={this.back}></i>
                <h4>{this.props.children}</h4>
            </div>
        )
    }
}

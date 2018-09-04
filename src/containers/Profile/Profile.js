import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../store/actions/user';
import './index.scss'

@connect(state => ({...state.user}), actions)
export default class Profile extends Component {

    componentWillMount() {
        // 校验用户是否登录
        this.props.toValidateAPI();
    }

    render() {
        return (
            <div className="profile">
                <div className="profile-header">
                    <img className="avart" src={require('./img/icon.png')} alt=""/>
                    {
                        this.props.user 
                        ? 
                        <a>{this.props.user}</a> 
                        : 
                        <Link to="/login">
                            登录
                        </Link>
                    }
                </div>  
            </div>
        )
    }
}

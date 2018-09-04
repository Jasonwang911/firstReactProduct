import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-header">
                    <img className="avart" src={require('./img/icon.png')} alt=""/>
                    <Link to="/login">
                        登录
                    </Link>
                </div>  
            </div>
        )
    }
}

import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './index.scss'

export default class Tab extends Component {
    render() {
        return (
            <div className="tab-com">
                <Link to="/home" >
                    <i className="index-icon"></i>
                    <span>首页</span>
                </Link>
                <Link to="/lesson" >
                    <i className="lesson-icon"></i>
                    <span>我的课程</span>
                </Link>
                <Link to="/profile" >
                    <i className="profile-icon"></i>
                    <span>个人中心</span>
                </Link>
            </div>
        )
    }
}

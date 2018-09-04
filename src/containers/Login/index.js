import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MHeader from '../../components/Header';
import './index.scss'

export default class Login extends Component {
    render() {
        return (
            <div className="login content">
                <MHeader>登录</MHeader>
                <div className="inner">
                    <ul>
                        <li>
                            <label htmlFor="username">用户名</label>
                            <input type="text" id="username"/>
                        </li>
                        <li>
                            <label htmlFor="password">密码</label>
                            <input type="text" id="password"/>
                        </li>
                        <li>
                            <Link to="/regist">前往注册页面</Link>
                        </li>
                        <li>
                            <button>登录</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

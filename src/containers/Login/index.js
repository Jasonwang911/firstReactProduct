import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../store/actions/user';
import MHeader from '../../components/Header';
import './index.scss'

@connect(state => ({...state.user}), actions)
export default class Login extends Component {

    componentWillUnmount() {
        this.props.clearMessage();
    }

    render() {
        return (
            <div className="login content">
                <MHeader>登录</MHeader>
                <div className="inner">
                    <ul>
                        <li>
                            <label htmlFor="username">用户名</label>
                            <input type="text" ref={ x => this.username = x} id="username"/>
                        </li>
                        <li>
                            <label htmlFor="password">密码</label>
                            <input type="text" ref={ x => this.password = x} id="password"/>
                        </li>
                        <li>
                            <Link to="/regist">前往注册页面</Link>
                        </li>
                        <li>
                            {
                                this.props.error === 1 ? <p style={{color: 'red'}}>{this.props.msg}</p> : null
                            }
                            {
                                this.props.success.length ? <p  style={{color: 'green'}}>{this.props.success},即将跳转到个人中心</p> : null
                            }
                        </li>
                        <li>
                            <button onClick={ () => {
                                this.props.toLoginAPI(this.username.value, this.password.value, this.props.history)
                            }}>登录</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

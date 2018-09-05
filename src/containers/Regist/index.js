import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import MHeader from '../../components/Header';
import { connect } from 'react-redux';
import actions from '../../store/actions/user';
import '../Login/index.scss'

@withRouter
@connect(state => ({...state.user}),actions)
export default class Regist extends Component {

    componentWillUnmount() {
        this.props.clearMessage();
    }

    handleRegist = () => {
        this.props.toRegistAPI(this.username.value, this.password.value, this.props.history)
    }

    render() {
        return (
            <div className="login content">
            <MHeader>注册</MHeader>
            <div className="inner">
                <ul>
                    <li>
                        <label htmlFor="username">用户名</label>
                        <input type="text" ref={ x => this.username = x } id="username"/>
                    </li>
                    <li>
                        <label htmlFor="password">密码</label>
                        <input type="password" ref={ x => this.password = x } id="password"/>
                    </li>
                    <li>
                        {
                            this.props.error === 1 ? <p style={{color: 'red'}}>{this.props.msg}</p> : null
                        }
                        {
                            this.props.success.length ? <p  style={{color: 'green'}}>{this.props.success},即将跳转到登录页面</p> : null
                        }
                    </li>
                    <li style={{marginTop: '0.6rem'}}>
                        <button onClick={this.handleRegist}>点击注册</button>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

import React, { Component } from 'react';
import './index.scss';

export default class HomeHeader extends Component {
    constructor() {
        super() 
        this.state = {
            headerList: false,
        }
    }

    handleList = () => {
        this.setState({
            headerList: !this.state.headerList
        })
    }

    render() {
        return (
            <div className="home-header">
                <div className="header-logo">
                    <h1></h1>
                </div>
                <div className="header-list-btn" onClick={this.handleList}>
                    {
                        this.state.headerList ? <i>关闭</i> : <i>打开</i>
                    }
                </div>
            </div>
        )
    }
}

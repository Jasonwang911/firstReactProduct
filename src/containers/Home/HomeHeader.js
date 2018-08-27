import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import './index.scss';

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'none'
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
};

export default class HomeHeader extends Component {
    constructor(props) {
        super(props) 
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
                <Transition in={this.state.headerList} timeout={duration} 
                onEnter={ (node) => {
                    node.style.display = 'block';
                }} 
                onExited={ (node) => {
                    node.style.display = 'none'
                }}>
                    {
                        (state) => (
                            <ul className="lesson-list" style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                {
                                    this.props.lessonList.map( (item, index) => (
                                        <li key={item.id} onClick={ () => {
                                            this.props.handleCurrentLesson(item);
                                            this.handleList();
                                        }}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </Transition>
            </div>
        )
    }
}

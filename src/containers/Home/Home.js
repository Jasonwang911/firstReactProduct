import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/home'; 
import HomeHeader from './HomeHeader';

@connect(state => ({...state.home}), actions)
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lessonList: [
                {id: 1, name: 'vue课程', path: '/vue'},
                {id: 2, name: 'react课程', path: '/react'},
                {id: 3, name: 'ng课程', path: '/ng'}
            ]
        }
    }

    handleCurrentLesson = (value) => {
        console.log(value.name);
        this.props.updateCurrentLesson(value);
    }

    render() {
        return (
            <div>
                <HomeHeader lessonList={this.state.lessonList} handleCurrentLesson={this.handleCurrentLesson} />
                {this.props.currentLesson.name}
            </div>
        )
    }
}

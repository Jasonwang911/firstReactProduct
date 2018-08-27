import React, { Component } from 'react';
import HomeHeader from './HomeHeader'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            lessonList: [
                {id: 1, name: 'vue课程', path: '/vue'},
                {id: 2, name: 'react课程', path: '/react'},
                {id: 3, name: 'ng课程', path: '/ng'}
            ]
        }
    }

    handleCurrentLesson(value) {
        console.log(value.name)
    }

    render() {
        return (
            <div>
                <HomeHeader lessonList={this.state.lessonList} handleCurrentLesson={this.handleCurrentLesson} />
                home
            </div>
        )
    }
}

import React, { Component } from 'react';
// import 'babel-polyfill';
import './index.scss';
import { getLesson } from './../../api/home';
import MHeader from './../../components/Header';

export default class Detail extends Component {
    constructor() {
        super()
        this.state = {
            lesson: {}
        }
    }

    async componentWillMount() {
        let lesson = this.props.location.state;
        console.log(lesson)
        if(!lesson) {
            lesson = await getLesson(this.props.match.params.lessonId);
            console.log(lesson)
        }
        this.setState({
            lesson
        })
    }

    render() {
        return (
            <div>
                <MHeader>详情页</MHeader>
                <div className="content">
                    <video style={{width: '100%'}} poster={this.state.lesson.image} src={this.state.lesson.video}>
                    </video>
                    {this.state.lesson.title}
                </div>
            </div>
        )
    }
}

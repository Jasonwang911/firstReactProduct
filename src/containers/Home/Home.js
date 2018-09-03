import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/home'; 
import './index.scss';
import HomeHeader from './HomeHeader';
import HomeSlider from './HomeSlider';
import HomeList from './HomeList';
import { loadMore, pullRefresh } from '../../util'

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

    componentDidMount() {
        if(this.props.sliders.length === 0) {
            this.props.getSlidersAPI();
        }
        
        if(this.props.lessons.lists.length === 0) {
            this.props.getHomeLessonsAPI();
        }

        loadMore(this.el, this.props.getHomeLessonsAPI);

        pullRefresh(this.el, this.props.refreshAPI)
    }

    handleCurrentLesson = (value) => {
        console.log(value.name);
        this.props.updateCurrentLesson(value);
    }

    render() {
        return (
            <div>
                <HomeHeader lessonList={this.state.lessonList} handleCurrentLesson={this.handleCurrentLesson} />
                <div className="content" ref={ el => this.el = el}>
                    {this.props.sliders.length ? <HomeSlider lists={this.props.sliders}/> : null }
                    <h5 className="lesson-title"><i>课程列表</i></h5>
                    <HomeList lists={this.props.lessons.lists} />
                    {
                        this.props.lessons.isLoading 
                        ?
                        <div style={{width: '100%',  textAlign: 'center'}}>正在加载</div> 
                        : 
                        null
                    }
                </div>
            </div>
        )
    }
}

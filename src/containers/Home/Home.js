import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../store/actions/home'; 
import HomeHeader from './HomeHeader';
import HomeSlider from './HomeSlider';

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

    componentWillMount() {
        if(this.props.sliders.length === 0) {
            this.props.getSlidersAPI();
        }
        this.props.getHomeListsAPI();
    }

    handleCurrentLesson = (value) => {
        console.log(value.name);
        this.props.updateCurrentLesson(value);
    }

    render() {
        return (
            <div>
                <HomeHeader lessonList={this.state.lessonList} handleCurrentLesson={this.handleCurrentLesson} />
                <div className="content">
                    {this.props.sliders.length ? <HomeSlider lists={this.props.sliders}/> : null }
                    {
                        // this.props.lists.lists.length 
                        // ?
                        this.props.lists.map( (item, index) => (
                            <div key={item.id}>
                                {item}
                                <img src={item.image} alt=""/>
                            </div> 
                        ))
                        // :
                        // null
                    }
                </div>
            </div>
        )
    }
}

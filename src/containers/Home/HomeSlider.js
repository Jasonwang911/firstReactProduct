import React, { Component } from 'react';
import ReactSwip from 'react-swipe';
import './homeSlider.scss';

export default class HomeSlider extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    render() {
        let opt = {
            continuous: true, 
            auto: 3000,
            callback: (index) => {
                this.setState({index})
            } 
        }
        return (
            <div className="home-slider">
                <ReactSwip swipeOptions={opt}>
                {
                    this.props.lists.map( (item, index) => (
                        <div key={index}>
                            <img className="slider" src={item.photoUrl} alt=""/>
                        </div>
                    ))
                }
                </ReactSwip>
                <div className="dots">
                    {
                        this.props.lists.map( (item, index) => (
                            <span key={index} className={this.state.index === index ? 'active' : ''}></span>
                        ))
                    }
                </div>
            </div>
            
        )
    }
}

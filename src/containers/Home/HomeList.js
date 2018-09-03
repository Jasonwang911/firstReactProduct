import React, { Component } from 'react';
import './index.scss'

export default class HomeList extends Component {
    render() {
        return (
            <ul className="home-list">
                {
                    this.props.lists.map((item, index) => {
                        let { url, title, price, image} = item;
                        return (
                            <li key={index}>
                                
                                <img src={image} alt=""/>
                                <p>{title}</p>
                                <strong>￥{price}元</strong>
                            </li>
                    )})
                }
            </ul>
        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

export default class HomeList extends Component {
    render() {
        return (
            <ul className="home-list">
                {
                    this.props.lists.map((item, index) => {
                        let { url, title, price, image, type} = item;
                        return (
                            <li key={index}>
                                <Link to={{pathname: `/detail/${item.id}`, state: item}}>
                                    <img src={image} alt=""/>
                                    <p>{type}{title}</p>
                                    <strong>￥{price}.00元</strong>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

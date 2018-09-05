// 异步加载高阶组件
import React from 'react';

export default function(fn) {
    return class HighOrderComponent extends React.Component {
        constructor() {
            super()
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            // 导入后的结果执行，返回一个promise 
            let {default: Com} = await fn();
            this.setState({
                component: Com
            })
        }

        render() {
            let Com = this.state.component;
            return Com ? <Com /> : null
        }
    }
}
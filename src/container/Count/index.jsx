//该文件是Count的容器组件，用于连接Count的UI和redux

import React, { Component } from 'react'
//引入connect函数，用于：连接UI与redex、生成容器组件
import { connect } from 'react-redux'
//引入action回调函数
import { createCountAction, createCountAsyncAction } from '../../redux/count_action'

//定义Count的UI组件
class Count extends Component {
    increment = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        this.props.createCountAction('increment', value * 1)
    }

    decrement = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        this.props.createCountAction('decrement', value * 1)
    }

    incrementIfOdd = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        if (this.props.sum % 2 !== 0) {
            this.props.createCountAction('increment', value * 1)
        }
    }

    incrementAsync = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        this.props.createCountAsyncAction('increment', value * 1, 500)
    }

    render() {
        return (
            <div>
                <h2>当前求和为: {this.props.sum}</h2>
                <select ref={c => this.numberNode = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

//定义Count组件的容器组件
export default connect(
    state => ({ sum: state }),
    {
        createCountAction,
        createCountAsyncAction
    }
)(Count)




/* **** 上面为精简写法，下面为一般写法 **** */

/*
    mapStateToProps函数的返回值必须是一个对象
    主要用于给UI组件传递状态
    返回值的key就作为传递给ui组件的props的key
    返回值的value就作为传递给ui组件的props的value
 */
//const mapStateToProps = state => ({ sum: state })

/*
    mapDispatchToProps函数的返回值必须是一个对象
    主要用于给UI组件传递操作状态的方法
    返回值的key就作为传递给ui组件的props的key
    返回值的value就作为传递给ui组件的props的value
 */
/* const mapDispatchToProps = dispatch => ({
    createCountAction: (type, data) => dispatch(createCountAction(type, data)),
    createCountAsyncAction: (type, data, time) => dispatch(createCountAsyncAction(type, data,time))
}) */

/* const mapDispatchToProps = {
    createCountAction,
    createCountAsyncAction
} */

//连接UI与redex、生成容器组件
/* export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountUI) */


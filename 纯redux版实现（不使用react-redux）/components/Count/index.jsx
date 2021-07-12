import React, { Component } from 'react'
import store from '../../redux/store'
import { createCountAction, createCountAsyncAction } from '../../redux/count_action'
import { INCREMENT, DECREMNET } from '../../redux/contant'

export default class Count extends Component {
    increment = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        //分发action
        store.dispatch(createCountAction(INCREMENT, value * 1))
    }

    decrement = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        store.dispatch(createCountAction(DECREMNET, value * 1))
    }

    incrementIfOdd = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        if (store.getState() % 2 !== 0) {
            store.dispatch(createCountAction(INCREMENT, value * 1))
        }
    }

    incrementAsync = () => {
        //拿到用户选择的值
        const { value } = this.numberNode
        setTimeout(() => {
            store.dispatch(createCountAsyncAction(INCREMENT, value * 1))
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
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

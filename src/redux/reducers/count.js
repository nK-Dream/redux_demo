//该文件是定义为Count组件服务的reducer

import {INCREMENT,DECREMNET } from '../contant'

//reducer可以：初始化状态、加工状态
export default function countReducer(preState = 0, action) {

    //从action对象中获取type、data
    const { type, data } = action
    
    //根据type，决定如何操作状态
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMNET:
            return preState - data
        default:
            return preState
    }
}
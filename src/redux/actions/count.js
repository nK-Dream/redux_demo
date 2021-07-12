 //该文件是用于定义创建action的函数

import {INCREMENT,DECREMNET} from '../contant'

export const increment = ( data) => ({ type: INCREMENT,data})
export const decrement = (data) => ({ type: DECREMNET, data })

export const incrementAsync = (data,time) =>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
}
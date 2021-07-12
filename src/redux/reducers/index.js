//该文件是专门用于汇总所以reducer的


//引入合并用于合并reducer的combineReducers函数
import { combineReducers } from 'redux'

//引入为Count组件服务的reducer
import sum from './count'
//引入为Person组件服务的reducer
import persons from './person'


export default combineReducers({
    sum,
    persons
})
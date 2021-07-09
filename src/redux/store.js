//该文件是创建整个redux中最为核心的store对象

//引入createStore函数，用于创建store对象
import { createStore, applyMiddleware } from 'redux'
//引入合并用于合并reducer的combineReducers函数
import { combineReducers } from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Person组件服务的reducer
import pensonReducer from './reducers/person'
//引入用于支持异步action的redux-thunk中间件
import thunk from 'redux-thunk'
//引入composeWithDevTools用于支持开发者工具的使用
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducer = combineReducers({
    countReducer,
    pensonReducer
})

//创建并暴露store
export default createStore(allReducer, applyMiddleware(thunk));

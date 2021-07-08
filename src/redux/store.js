//该文件是创建整个redux中最为核心的store对象

//引入createStore函数，用于创建store对象
import { createStore, applyMiddleware } from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//引入用于支持异步action的redux-thunk中间件
import thunk from 'redux-thunk'

const store = createStore(countReducer, applyMiddleware(thunk));

export default store
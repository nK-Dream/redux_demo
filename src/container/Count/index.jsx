//该文件是Count的容器组件，用于连接Count的UI和redux

//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect函数，用于：连接UI与redex、生成容器组件
import { connect } from 'react-redux'

import { createCountAction } from '../../redux/count_action'

/*     
    mapStateToProps函数的返回值必须是一个对象
    主要用于给UI组件传递状态
    返回值的key就作为传递给ui组件的props的key
    返回值的value就作为传递给ui组件的props的value
 */
function mapStateToProps(state) {
    return { sum: state }
}

/*
    mapDispatchToProps函数的返回值必须是一个对象
    主要用于给UI组件传递操作状态的方法
    返回值的key就作为传递给ui组件的props的key
    返回值的value就作为传递给ui组件的props的value
 */
function mapDispatchToProps(dispatch) {
    return { 
        increment: (type, data) =>dispatch(createCountAction(type, data)) 
    }
}


//连接UI与redex、生成容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

export default CountContainer
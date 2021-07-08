//该文件是Count的容器组件，用于连接Count的UI和redux

//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect函数，用于：连接UI与redex、生成容器组件
import {connect} from 'react-redux'

//连接UI与redex、生成容器组件
const CountContainer = connect()(CountUI)

export default CountContainer
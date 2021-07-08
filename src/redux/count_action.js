 //该文件是用于定义创建action的函数

export const createCountAction = (type,data) => ({type,data})

export const createCountAsyncAction = (type,data,time) =>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createCountAction(type, data))
        }, time);
    }
}
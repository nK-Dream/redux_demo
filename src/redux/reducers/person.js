import { ADD_PERSON } from '../contant'

const initState = [
    { name: '小明', age: 18 },
    { name: '小芳', age: 19 }
]

export default function personReducer(preState = initState, action){
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}
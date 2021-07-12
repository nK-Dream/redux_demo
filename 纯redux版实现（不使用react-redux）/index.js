import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

store.subscribe(()=>{
    ReactDOM.render(<App />, document.querySelector("#root"))
})

ReactDOM.render(<App />, document.querySelector("#root"))

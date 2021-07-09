import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    state = {
        name: '',
        age: ''
    }
    addPerson = () => {
        const { name, age } = this.state
        console.log(name, age);
        this.props.addPerson(this.state)
    }
    saveData = type => e => this.setState({ [type]: e.target.value })
    render() {
        const { sum, personList } = this.props
        return (
            <div>
                <h1>我是Person组件</h1>
                <h4>我读取的Count组件当前求和为：{sum}</h4>
                <input type="text" onChange={this.saveData('name')} placeholder="name" />
                <input type="text" onChange={this.saveData('age')} placeholder="age" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        personList.map((personObj, index) => <li key={index}>{personObj.name} - {personObj.age}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ sum: state.countReducer, personList: state.pensonReducer }),
    {
        addPerson
    }
)(Person)

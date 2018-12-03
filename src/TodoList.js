import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'
import './style.css'
class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handlebtnClick = this.handlebtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }
  
  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handlebtnClick () {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render () {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input 
          value={this.state.inputValue}
          placeholder="Basic usage"
          style={{width: '300px', marginRight: '10px'}}
          onChange={this.handleInputChange} />
        <Button type="primary" onClick={this.handlebtnClick}>Primary</Button>
        <List
          style={{width: '300px', marginTop: '10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList
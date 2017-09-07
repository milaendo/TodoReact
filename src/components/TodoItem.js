import React, { Component } from 'react'
import {removeTodo,completeTodo} from '../actions/todoActs'

class TodoItem extends Component {
	complete = (e) => {
		completeTodo(this.props.todo.id)
	}
	remove = (e) => {
		removeTodo(this.props.todo.id)
	}
	render () {
		return (
			<li className={this.props.todo.status}>
			<button onClick={this.remove}>Remove</button>
			<button onClick={this.complete}>Complete</button>	
			{this.props.todo.title}
			</li>
		)
	}
}

export default TodoItem
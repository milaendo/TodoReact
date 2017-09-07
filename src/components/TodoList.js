import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends Component {
	
	render () {
		return (
			<div>
				<ul>
				{this.props.todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo}/>
				))}	
				</ul>
			</div>
		)
	}
}
function mapSateToProps (appState){
	console.log(appState.todos)
	return {
		todos:appState.todos
	}
}
export default connect(mapSateToProps)(TodoList)
import React, { Component } from 'react'
import {addTodo} from '../actions/todoActs' 

class TodoForm extends Component {
	state={
		title:""
	}
	handleChange = (e) =>{
		this.setState({
			title:e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		addTodo(this.state.title)
		this.setState({
			title:""
		})

	}
	render () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} placeholder='enter todo' value={this.state.title}/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default TodoForm
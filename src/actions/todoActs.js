import store from '../store'
import shortid from 'shortid'

export function addTodo(todo){
	store.dispatch({
		type: 'ADD_TODO',
		todo: {
			todo:todo,
			id:shortid.generate(),
			status: 'pending'
		}
	})
}
console.log(this.status)
export function removeTodo(id){
	store.dispatch({
		type:'REMOVE_TODO',
		id: id
	})
}
export function completeTodo(id){
	store.dispatch({
		type: 'COMPLETE_TODO',
		id: id
	})
}
const initialState = {
	todos: []
}

export default function(state = initialState,action){
	switch(action.type){
		case 'ADD_TODO':
			return{...state,todos: [...state.todos, action.todo]}
		case 'REMOVE_TODO':
			return{...state,todos: state.todos.filter(todo => todo.id !== action.id)} 
		case 'COMPLETE_TODO':
			return {...state, todos: state.todos.map(todo => {
				if(todo.id === action.id){
					return {...todo, status: 'completed'}
				}else{
					return todo
				}
			})}
		default :
			return state
	}
}
import React, { Component } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from '../store'


class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className='mainWrap'>
        <TodoForm />
        <TodoList />      
      </div>
    </Provider>
    );
  }
}

export default App;

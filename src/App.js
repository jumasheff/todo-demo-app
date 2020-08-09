import React from 'react';
import './App.css';
import TodoList from './components/TodoListContainer'
import CompletedTodos from './components/CompletedTodosContainer'
import AddTodo from './components/AddTodoContainer'


function App() {
  return (
    <div className="App">
      <TodoList />
      <AddTodo />
      <CompletedTodos />
    </div>
  )
}

export default App;

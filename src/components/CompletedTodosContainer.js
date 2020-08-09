import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from './TodoList'

const mapStateToProps = state => ({
  todos: state.todos.filter(todo => todo.completed)
})

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from './TodoList'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

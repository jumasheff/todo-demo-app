import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from './AddTodo'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

import React from 'react'

const Todo = ({ id, text, completed, toggleTodo }) => {
  const style = { textDecoration: completed ? 'line-through' : 'none' }
  return (
    <li style={style} onClick={() => toggleTodo(id)}>
      {text}
    </li>
  )
}

export default Todo

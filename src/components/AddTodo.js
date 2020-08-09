import React from 'react'

const AddTodo = ({ addTodo }) => {
  let inp
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        console.log(inp.value)
        addTodo(inp.value)
      }}>
        <input type="text" ref={node => inp = node} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  )
}

export default AddTodo

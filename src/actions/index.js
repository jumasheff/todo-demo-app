
let nextId = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextId++,
      text: text,
      completed: false
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}


const initialState = [
]

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, completed: action.payload.completed }
      ]
    case 'TOGGLE_TODO':
      const newTodos = state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      return newTodos
    default:
      return state
  }
}

export default todos

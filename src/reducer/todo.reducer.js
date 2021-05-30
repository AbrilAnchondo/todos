import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case 'ADD':
      return [...state, {id: uuidv4(), task: action.task, completed: false}]
    case 'REMOVE': 
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE': 
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
    case 'EDIT':
      return state.map(todo => todo.id === action.id ? {...todo, task: action.newTask} : todo)
    default:
      return state
  }
}
export default reducer;

// {type: 'ADD', task: 'New task'}
// {type: 'REMOVE', id: 345}
// {type: 'TOGGLE', id: 123}
// {Type: 'EDIT', id: 678, newTask: 'Whaterver'}

// const addTodo = (newTodoText) => {
//   setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false} ]);
// }

// const removeTodo = (id) => {
//   const updatedTodos = todos.filter(todo => todo.id !== id);
//   setTodos(updatedTodos);
// }

// const toggleTodo = (id) => {
//   const updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
//   setTodos(updatedTodos);
// }

// const editTodo = (id, newTask) => {
//   const updatedTodos = todos.map(todo => todo.id === id ? {...todo, task: newTask} : todo);
//   setTodos(updatedTodos);
// }
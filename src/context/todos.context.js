// todos
// all methods that interact with todos
import React, { createContext, useReducer } from 'react';
// importing todosReducer keep the state
import todoReducer from '../reducer/todo.reducer.js';
//import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {
    id: 1,
    task: 'Bake a cake',
    completed: false
  },
  {
    id: 2,
    task: 'Work on recipe project',
    completed: false
  }
];

// exporting everything not only consumer or provider
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}

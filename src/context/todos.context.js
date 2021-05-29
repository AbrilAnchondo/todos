// todos
// all methods that interact with todos
import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

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

export function TodosProvider(props) {
  const todosAndMethods = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosAndMethods}>
      {props.children}
    </TodosContext.Provider>
  )
}

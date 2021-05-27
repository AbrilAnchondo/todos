//import { useState } from 'react';
import useLocalStorageState from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

// using useLocalStorageState to set state and also initializes it based off from localStorage
// eslint-disable-next-line import/no-anonymous-default-export
export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false} ]);
  }
  
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }
  
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos(updatedTodos);
  }
  
  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, task: newTask} : todo);
    setTodos(updatedTodos);
  }
  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo
  };
};

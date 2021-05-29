import React, { useContext } from 'react';
import { TodosContext } from '../context/todos.context';
import useInputState from '../hooks/useInputState';
import { TextField } from '@material-ui/core';

export default function EditTodoForm(props) {
  const { id, task, toggleEditForm} = props;
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset ] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  }
  return (
    <form onSubmit={handleSubmit} style={{marginLeft: '1rem', width: '100%'}}>
      <TextField 
        style={{height: '58px'}}
        placeholder={task}
        fullWidth
        margin="normal"
        autoFocus
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}
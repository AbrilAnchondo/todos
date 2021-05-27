import { TextField } from '@material-ui/core';
import useInputState from '../hooks/useInputState';
import React from 'react';

export default function EditTodoForm(props) {
  const { editTodo, id, task, toggleEditForm} = props;
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
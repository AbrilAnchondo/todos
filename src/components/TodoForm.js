import React from 'react';
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function TodoForm (props) {
  const [newTask, handleNewTask, reset] = useInputState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('newTask', newTask);
    props.addTodo(newTask);
    reset();
  }
  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={handleSubmit}>
        <TextField
            // label="Add a new task"
            placeholder="Add a task..."
            fullWidth
            margin="normal"
            value={newTask}
            onChange={handleNewTask}
          />
      </form>
    </Paper>
  )
}
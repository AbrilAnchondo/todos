import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { TodosContext } from '../context/todos.context';

export default function TodoForm () {
  const [newTask, handleNewTask, reset] = useInputState('');
  const { dispatch } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('newTask', newTask);
    // addTodo(newTask);
    dispatch({type: 'ADD', task: newTask})
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
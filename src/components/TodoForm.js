import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
//import { TodosContext } from '../context/todos.context';
import { DispatchContext } from '../context/todos.context';

export default function TodoForm () {
  const [newTask, handleNewTask, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD', task: newTask})
    reset();
  }
  console.log('todo FORM rerender');
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
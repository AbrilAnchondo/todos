import React from 'react';
//import useTodoState from '../hooks/useTodoState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { TodosProvider } from '../context/todos.context';

export default function TodoApp () {
  // const initialTodos = [];
  // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

  const todaysDate = () => {
    const date = new Date();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    return `${dayOfMonth}/${month}/${year}`
  }

  return (
    <Paper
      elevation={0}
      style={{
        padding: '0',
        margin: '0',
        height: '100vh',
        backgroundImage: 'linear-gradient(to bottom right, #626FE2, #D2A5D1)'
      }}
    >
      <AppBar
        color='primary' position='static' style={{height: '64px', alignItems: 'center'}}>
          <Toolbar>
            <Typography color='inherit'> 
              TODOS  -  {todaysDate()}
            </Typography>
          </Toolbar>
      </AppBar>
      <Grid container justify="center" alignItems="center" style={{marginTop: '1.5rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

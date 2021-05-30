import React, { useContext } from 'react';
import { DispatchContext } from '../context/todos.context';
import useToggle from '../hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default function Todo (props) {
  const [editing, toggleEditing] = useToggle(false);
  const { id, task, completed  } = props;
  const dispatch = useContext(DispatchContext);

  const handleDelete = () => {
    dispatch({type: 'REMOVE', id: id});
  }
  return (
    <>
      <ListItem style={{height: '64px'}}>
        {editing ? <EditTodoForm id={id} task={task} toggleEditForm={toggleEditing}/> : 
        <>
          <Checkbox
            onClick={() => dispatch({type:'TOGGLE', id: id})}
            checked={completed}
            color="primary"
          />
          <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {task}
          </ListItemText>
          <ListItemSecondaryAction>
          <IconButton aria-label="edit todo" onClick={toggleEditing}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete todo" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
        }
      </ListItem>
    </>
  )
}
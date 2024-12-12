import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/toDoActions.jsx';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;

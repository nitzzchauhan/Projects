import React from 'react';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;

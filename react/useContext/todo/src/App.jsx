import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import './styles.css';

function App() {
  return (
    <TaskProvider>
      <div className="todo-container">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;

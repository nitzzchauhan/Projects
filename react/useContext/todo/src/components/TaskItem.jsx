import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task, index }) => {
  const { removeTask, toggleTask } = useContext(TaskContext);

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => toggleTask(index)}>{task.text}</span>
      <button onClick={() => removeTask(index)} className="remove-btn">
        Remove
      </button>
    </li>
  );
};

export default TaskItem;

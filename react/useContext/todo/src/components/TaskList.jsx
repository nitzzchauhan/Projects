import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  console.log(tasks)

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))
      ) : (
        <p>No tasks added yet.</p>
      )}
    </ul>
  );
};

export default TaskList;

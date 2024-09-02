// Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

// Function to add a new task
function addTask(): void {
  const taskText: string = taskInput.value.trim();
  if (taskText === '') return;

  // Create a new list item (li) element for the task
  const listItem: HTMLLIElement = document.createElement('li');
  listItem.className = 'task';

  // Create a span element to hold the task text
  const taskSpan: HTMLSpanElement = document.createElement('span');
  taskSpan.textContent = taskText;

  // Create a button to delete the task
  const deleteButton: HTMLButtonElement = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';

  // Append the task text and delete button to the list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);

  // Append the list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = '';

  // Add event listeners for completing and deleting tasks
  taskSpan.addEventListener('click', toggleTaskCompletion);
  deleteButton.addEventListener('click', deleteTask);
}

// Function to toggle task completion
function toggleTaskCompletion(event: MouseEvent): void {
  const taskSpan = event.target as HTMLSpanElement;
  taskSpan.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(event: MouseEvent): void {
  const deleteButton = event.target as HTMLButtonElement;
  const listItem = deleteButton.parentElement as HTMLLIElement;
  taskList.removeChild(listItem);
}

// Add an event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Add an event listener for pressing Enter key to add task
taskInput.addEventListener('keypress', function(event: KeyboardEvent): void {
  if (event.key === 'Enter') {
    addTask();
  }
});

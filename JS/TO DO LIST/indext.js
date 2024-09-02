// Get references to the input field, button, and task list
var taskInput = document.getElementById('taskInput');
var addTaskButton = document.getElementById('addTaskButton');
var taskList = document.getElementById('taskList');
// Function to add a new task
function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === '')
        return;
    // Create a new list item (li) element for the task
    var listItem = document.createElement('li');
    listItem.className = 'task';
    // Create a span element to hold the task text
    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    // Create a button to delete the task
    var deleteButton = document.createElement('button');
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
function toggleTaskCompletion(event) {
    var taskSpan = event.target;
    taskSpan.classList.toggle('completed');
}
// Function to delete a task
function deleteTask(event) {
    var deleteButton = event.target;
    var listItem = deleteButton.parentElement;
    taskList.removeChild(listItem);
}
// Add an event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);
// Add an event listener for pressing Enter key to add task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

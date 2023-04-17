document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addingEventListeners();
});
let taskObjArr = [];

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
  document.getElementById("sort-tasks").addEventListener("change", sortTask);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target.priority.value);

  const taskObj = { task, priorityLevel };
  taskObjArr.push(taskObj);
  sortTask();
  displayTask(task, priorityLevel);
}

function displayTask(task, priorityLevel) {
  const taskUl = document.getElementById("tasks");
  const taskLi = document.createElement("li");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTask);

  taskLi.textContent = task + " ";
  taskLi.style.color = getPriorityColor(priorityLevel);
  taskLi.appendChild(deleteBtn);
  taskUl.appendChild(taskLi);
}

function deleteTask(e) {
  e.target.parentNode.remove();
}

function getPriorityColor(priorityLevel) {
  if (priorityLevel === 1) {
    return "red";
  } else if (priorityLevel === 2) {
    return "blue";
  } else {
    return "green";
  }
}

function sortTask() {
  const sortTasksSelect = document.getElementById("sort-tasks");
  if (sortTasksSelect.value === "h-l") {
    taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel);
  } else {
    taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel);
  }
}

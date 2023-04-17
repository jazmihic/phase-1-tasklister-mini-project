document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addingEventListeners();
});

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target.priority.value);

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

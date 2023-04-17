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

  displayTask(task);
}

function displayTask(task) {
  const taskUl = document.getElementById("tasks");
  const taskLi = document.createElement("li");
  taskLi.textContent = task;
  taskUl.appendChild(taskLi);
}

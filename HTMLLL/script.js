
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let message = document.querySelector("#message");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {

    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        message.textContent = "Please enter a task!";
        message.style.color = "red";
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    li.append(span, deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    message.textContent = "Task added successfully!";
    message.style.color = "green";
}

taskList.addEventListener("click", function(event) {

    if (event.target.classList.contains("deleteBtn")) {

        event.target.parentElement.remove();

    } else if (event.target.tagName === "SPAN") {

        event.target.classList.toggle("completed");

    }

});

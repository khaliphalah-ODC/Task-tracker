// let tasks = [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];


function addTask() {
    const taskText = taskInput.value.trim();

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }
    tasks.push(taskText);

    showTasks();

    taskInput.value = ""
}

function showTasks() {
    taskList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const taskText = document.createElement("span");
        taskText.textContent = tasks[i];

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function () {
            tasks.splice(i, 1);
            showTasks();
        };
        updateBtn.onclick = function () {
            const newTask = prompt("Edit your task: ", tasks[i]);
            if(newTask !== null && newTask.trim() !== ""){
                tasks[i] = newTask.trim();
                showTasks();
            }
        };
        taskItem.appendChild(taskText);
        taskItem.appendChild(updateBtn);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    }
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if(e.key === "Enter"){
        addTask();
    }
});
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const prioritySelect = document.getElementById("priority-select");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add(prioritySelect.value);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

document.getElementById("add-button").addEventListener("click", addTask);

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.getElementById("all-tasks").addEventListener("click", function() {
    const tasks = listContainer.getElementsByTagName("li");
    for (let task of tasks) {
        task.style.display = "block";
    }
});

document.getElementById("active-tasks").addEventListener("click", function() {
    const tasks = listContainer.getElementsByTagName("li");
    for (let task of tasks) {
        if (task.classList.contains("checked")) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    }
});

document.getElementById("completed-tasks").addEventListener("click", function() {
    const tasks = listContainer.getElementsByTagName("li");
    for (let task of tasks) {
        if (task.classList.contains("checked")) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    }
});
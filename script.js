document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function() {
        const task = taskInput.value;
        if (task) {
            const li = document.createElement("li");
            li.textContent = task;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    });
});

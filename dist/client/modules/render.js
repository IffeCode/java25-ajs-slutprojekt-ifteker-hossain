"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTodos = renderTodos;
const api_1 = require("../modules/api");
function renderTodos(todos) {
    const newTask = document.getElementById("new-task");
    const taskInProgress = document.getElementById("task-in-progress");
    const taskDone = document.getElementById("done-task");
    if (!newTask || !taskInProgress || !taskDone) {
        console.error("Something went wrong with HTML!");
        return;
    }
    newTask.innerHTML = "";
    taskInProgress.innerHTML = "";
    taskDone.innerHTML = "";
    todos.forEach(todo => {
        const card = document.createElement("div");
        card.classList.add("todo-card");
        card.innerHTML = `
     
            <p><strong>Title:</strong> ${todo.title}</p>

            <p><strong>Task Description:</strong> ${todo.description}</p>
            <p><strong>Department:</strong> ${todo.category}</p>

            ${todo.person ? `<p><strong>Assigned Person:</strong> ${todo.person}</p>` : ""}


            <small>${todo.timestamp}</small>
        `;
        if (todo.status === "new") {
            const personInput = document.createElement("input");
            personInput.placeholder = "Person";
            const assignBtn = document.createElement("button");
            assignBtn.textContent = "Assign";
            assignBtn.addEventListener("click", async () => {
                const person = personInput.value;
                if (!person.trim()) {
                    alert("Need to fill in name for person assigned the task!");
                    return;
                }
                await (0, api_1.updateTodo)(todo.id, {
                    ...todo,
                    person,
                    status: "doing"
                });
                const todos = await (0, api_1.getTodos)();
                renderTodos(todos);
            });
            card.append(personInput, assignBtn);
            newTask.appendChild(card);
        }
        if (todo.status === "doing") {
            const doneBtn = document.createElement("button");
            doneBtn.textContent = "Done";
            doneBtn.addEventListener("click", async () => {
                await (0, api_1.updateTodo)(todo.id, {
                    ...todo,
                    status: "done"
                });
                const todos = await (0, api_1.getTodos)();
                renderTodos(todos);
            });
            card.appendChild(doneBtn);
            taskInProgress.appendChild(card);
        }
        if (todo.status === "done") {
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", async () => {
                await (0, api_1.deleteTodo)(todo.id);
                const todos = await (0, api_1.getTodos)();
                renderTodos(todos);
            });
            card.appendChild(deleteBtn);
            taskDone.appendChild(card);
        }
    });
}

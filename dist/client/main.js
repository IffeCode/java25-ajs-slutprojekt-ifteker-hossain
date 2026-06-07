"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./modules/api");
const render_1 = require("./modules/render");
const animation_1 = require("./modules/animation");
const loadTodos = async () => {
    const todos = await (0, api_1.getTodos)();
    (0, render_1.renderTodos)(todos);
};
const start = async () => {
    await loadTodos();
    const addTaskBtn = document.getElementById("addTaskBtn");
    addTaskBtn?.addEventListener("click", async () => {
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const category = document.getElementById("category");
        if (!title.value.trim() || !description.value.trim()) {
            alert("Title and description are required!");
            return;
        }
        const todo = {
            title: title.value,
            description: description.value,
            category: category.value,
            status: "new",
            timestamp: new Date().toISOString()
        };
        await (0, api_1.createTodo)(todo);
        title.value = "";
        description.value = "";
        category.value = "ux";
        await loadTodos();
    });
    (0, animation_1.animatedTitle)();
};
start();

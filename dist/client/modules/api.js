"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const URL = "http://localhost:3000/todos";
const getTodos = async () => {
    const response = await fetch(URL);
    return await response.json();
};
exports.getTodos = getTodos;
const createTodo = async (todo) => {
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });
};
exports.createTodo = createTodo;
const updateTodo = async (id, todo) => {
    await fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = async (id) => {
    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
};
exports.deleteTodo = deleteTodo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getAllTodos = void 0;
const database_statements_1 = require("./database.statements");
const getAllTodos = () => {
    const rows = database_statements_1.getAllTodosStmt.all();
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        description: row.description,
        category: row.category,
        status: row.status,
        person: row.person,
        timestamp: row.timestamp
    }));
};
exports.getAllTodos = getAllTodos;
const createTodo = (todo) => {
    const result = database_statements_1.createTodoStmt.run(todo.title, todo.description, todo.category, todo.status, todo.person ?? null, todo.timestamp);
    return result.lastInsertRowid;
};
exports.createTodo = createTodo;
const updateTodo = (id, todo) => {
    const result = database_statements_1.updateTodoStmt.run(todo.title, todo.description, todo.category, todo.status, todo.person ?? null, id);
    return result.changes > 0;
};
exports.updateTodo = updateTodo;
const deleteTodo = (id) => {
    const result = database_statements_1.deleteTodoStmt.run(id);
    return result.changes;
};
exports.deleteTodo = deleteTodo;

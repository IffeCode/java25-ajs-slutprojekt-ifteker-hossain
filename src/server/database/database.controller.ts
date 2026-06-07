import {getAllTodosStmt, createTodoStmt, updateTodoStmt, deleteTodoStmt} from "./database.statements";
import {Todo, NewTodo} from "../models/todos.types";

export const getAllTodos = ():Todo[] => {
    const rows = getAllTodosStmt.all();

    
    return rows.map((row: any) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    category: row.category,
    status: row.status,
    person: row.person,
    timestamp: row.timestamp
})) as Todo[];
};

export const createTodo = (todo: NewTodo): number => {

    const result = createTodoStmt.run(
        todo.title,
        todo.description,
        todo.category,
        todo.status,
        todo.person ?? null,
        todo.timestamp
    );

    return result.lastInsertRowid as number;
}

export const updateTodo = (
    id: number,
    todo: NewTodo
): boolean => {

    const result = updateTodoStmt.run(
        todo.title,
        todo.description,
        todo.category,
        todo.status,
        todo.person ?? null,
        id
    );

    return result.changes > 0;
}

export const deleteTodo = (id: number): number => {
    const result = deleteTodoStmt.run(id);
    return result.changes as number;
}
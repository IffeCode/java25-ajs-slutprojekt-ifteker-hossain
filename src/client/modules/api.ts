import { NewTodo } from "../../server/models/todos.types";
import { Todo } from "../models/todo";

const URL = "http://localhost:3000/todos";

export const getTodos = async (): Promise<Todo[]> => {
   
    const response = await fetch(URL);

    return await response.json();
};

export const createTodo = async (todo: NewTodo ): Promise<void> => {
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });
}

export const updateTodo = async (
    id: number,
    todo: Todo
): Promise<void> => {

    await fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });
};


export const deleteTodo = async (
    id: number
): Promise<void> => {

    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
};
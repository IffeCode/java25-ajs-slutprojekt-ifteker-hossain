export interface Todo {
    id: number;
    title: string;
    description: string;
    category: "ux" | "dev frontend" | "dev backend";
    status: "new" | "doing" | "done";
    person?: string;
    timestamp: string;
}

// export type NewTodo = Omit<Todo, "id">;

export interface NewTodo {
    title: string;
    description: string;
    category: "ux" | "dev frontend" | "dev backend";
    status: "new" | "doing" | "done";
    person?: string;
    timestamp: string;
}
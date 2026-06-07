export interface Todo {
    id: number;
    title: string;
    description: string;
    category: "ux" | "dev frontend" | "dev backend";
    status: "new" | "doing" | "done";
    person?: string;
    timestamp: string;
}

export interface NewTodo {
    title: string;
    description: string;
    category: "ux" | "dev frontend" | "dev backend";
    status: "new";
    person?: string;
    timestamp: string;
}
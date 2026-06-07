import { body } from "express-validator";

export const createTodoValidation = [
    body("title").isString(),
    body("description").isString(),

    body("category").isIn([
        "ux",
        "dev frontend",
        "dev backend"
    ]),

    body("status").isIn([
        "new",
        "doing",
        "done"
    ]),

    body("person").optional().isString()
];

export const updateTodoValidation =
    createTodoValidation;
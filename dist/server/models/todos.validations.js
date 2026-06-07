"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoValidation = exports.createTodoValidation = void 0;
const express_validator_1 = require("express-validator");
exports.createTodoValidation = [
    (0, express_validator_1.body)("title").isString(),
    (0, express_validator_1.body)("description").isString(),
    (0, express_validator_1.body)("category").isIn([
        "ux",
        "dev frontend",
        "dev backend"
    ]),
    (0, express_validator_1.body)("status").isIn([
        "new",
        "doing",
        "done"
    ]),
    (0, express_validator_1.body)("person").optional().isString()
];
exports.updateTodoValidation = exports.createTodoValidation;

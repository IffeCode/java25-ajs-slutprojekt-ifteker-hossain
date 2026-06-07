"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const todo_route_1 = require("./server/routes/todo.route");
const PORT = 3000;
// app.use("/", pageRouter);
app_1.app.use("/todos", todo_route_1.todoRouter);
app_1.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

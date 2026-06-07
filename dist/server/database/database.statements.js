"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoStmt = exports.updateTodoStmt = exports.getAllTodosStmt = exports.createTodoStmt = void 0;
const database_config_1 = require("./database.config");
exports.createTodoStmt = database_config_1.db.prepare(`
  INSERT INTO todos (title, description, category, status, person, timestamp)
  VALUES (?, ?, ?, ?, ?, ?)
`);
exports.getAllTodosStmt = database_config_1.db.prepare(`
  SELECT * FROM todos
`);
exports.updateTodoStmt = database_config_1.db.prepare(`
  UPDATE todos
  SET 
    title = ?,
    description = ?,
    category = ?,
    status = ?,
    person = ?
  WHERE id = ?
`);
exports.deleteTodoStmt = database_config_1.db.prepare(`
  DELETE FROM todos
  WHERE id = ?
`);

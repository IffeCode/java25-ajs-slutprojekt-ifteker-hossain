import { db } from "./database.config";

export const createTodoStmt = db.prepare(`
  INSERT INTO todos (title, description, category, status, person, timestamp)
  VALUES (?, ?, ?, ?, ?, ?)
`);

export const getAllTodosStmt = db.prepare(`
  SELECT * FROM todos
`);

export const updateTodoStmt = db.prepare(`
  UPDATE todos
  SET 
    title = ?,
    description = ?,
    category = ?,
    status = ?,
    person = ?
  WHERE id = ?
`);

export const deleteTodoStmt = db.prepare(`
  DELETE FROM todos
  WHERE id = ?
`);
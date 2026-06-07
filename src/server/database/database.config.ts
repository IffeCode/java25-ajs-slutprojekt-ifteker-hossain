import {DatabaseSync} from 'node:sqlite';

export const db = new DatabaseSync('./app.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    status TEXT NOT NULL,
    person TEXT,
    timestamp TEXT NOT NULL
  );
`);
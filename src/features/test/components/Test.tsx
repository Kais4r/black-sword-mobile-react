import { useEffect, useState } from 'react';
import Database from '@tauri-apps/plugin-sql';
import { appConfigDir } from '@tauri-apps/api/path';
import { create, BaseDirectory } from '@tauri-apps/plugin-fs';

type User = {
  id: number;
  name: string;
  age: number;
};

export default function Test() {
  const [users, setUsers] = useState<User[]>([]);
  const [dbPath, setDbPath] = useState('');
  const [sqliteError, setSqliteError] = useState<string | null>(null);

  useEffect(() => {
    const initDb = async () => {
      try {
        // Get the application configuration directory
        const dir = await appConfigDir();
        console.log('App Config Directory:', dir);
        setDbPath(dir);

        // Set the database file path
        const dbFilePath = 'test.db';

        // Create the database file if it doesn't exist
        const file = await create(dbFilePath, {
          baseDir: BaseDirectory.AppConfig,
        });
        await file.close();

        // Load the SQLite database
        const db = await Database.load(`sqlite:${dir}test.db`);

        // Create the users table if it doesn't exist
        await db.execute(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER
          )
        `);

        // Insert a user if not already present
        const existingUsers = await db.select<User[]>('SELECT * FROM users WHERE name = ?1', ['Alice']);
        if (existingUsers.length === 0) {
          await db.execute('INSERT INTO users (name, age) VALUES (?1, ?2)', ['Alice', 25]);
        }

        // Retrieve all users
        const result = await db.select<User[]>('SELECT * FROM users');
        setUsers(result);
      } catch (error) {
        console.error('SQLite Error:', error);
        setSqliteError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    };

    initDb();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Users</h2>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p>Database Path: {dbPath}</p>
      <p>Error: {sqliteError}</p>
    </div>
  );
}

import { Database, RunResult } from 'sqlite3';

export class SQLite {

  private database?: Database

  public async connect(filename: string = 'db.sqlite'): Promise<void> {
    this.database = await new Promise<Database>((resolve, reject) => {
      const db = new Database(filename, (error) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve(db);
        }
      });
    });

    await this.init();
  }

  private async init() {
    await this.run(`
      CREATE TABLE IF NOT EXISTS products (
          id INT PRIMARY KEY, 
          name TEXT NOT NULL,
          price TEXT NOT NULL,
          )
      `)
  }

  public async run(sql: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.database?.run(sql, (result: RunResult, error: Error) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  public async disconnect(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.database?.close((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

}
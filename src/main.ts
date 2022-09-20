import { Store } from './application/store';
import { SQLiteRepository } from './interface/repository/sqlite.repository';
import { Controller } from './interface/controllers/store.controller';
import express from 'express';
import { SQLite } from './infrastructure/datastore/sqlite';
import { getRouter } from "./infrastructure/router/router";

async function main() {
  try {
    const app = express();
    const sqlite = new SQLite();
    await sqlite.connect();

    const repository = new SQLiteRepository(sqlite);
    const store = new Store(repository);
    const controller = new Controller(store);

    const router = getRouter(controller);
    app.use('/', router);
    app.listen(3000, () => {
      console.log('app listen on 3000');
    });

  } catch (e) {
    console.error(e);
  }
}

main();
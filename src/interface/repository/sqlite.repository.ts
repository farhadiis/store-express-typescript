import { IRepository } from '../../application/repository.interface';
import { IProduct } from '../../domain/interfaces/product.inerface';
import { SQLite } from '../../infrastructure/datastore/sqlite';

export class SQLiteRepository implements IRepository {

  constructor(private readonly sqlite: SQLite) {
  }

  async insertProduct(product: IProduct): Promise<number> {
    await this.sqlite.run('INSERT INTO products VALUES (?)')
    return 0;
  }

  async getAllProduct(): Promise<IProduct[]> {
    return []; // from sqlite
  }

  async deleteProduct(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async updateProduct(id: number, updates: IProduct): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
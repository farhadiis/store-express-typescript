import { IRepository } from '../../application/repository.interface';
import { SQLite } from '../../infrastructure/datastore/sqlite';
import { Product } from "../../domain/models/product";

export class SQLiteRepository implements IRepository {

  constructor(private readonly sqlite: SQLite) {
  }

  async insertProduct(product: Product): Promise<number> {
    await this.sqlite.run('INSERT INTO products VALUES (?)')
    return 0;
  }

  async getAllProduct(): Promise<Product[]> {
    return []; // from sqlite
  }

  async deleteProduct(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async updateProduct(id: number, updates: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
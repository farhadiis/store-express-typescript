import { IRepository } from '../../application/repository.interface';
import { Product } from "../../domain/models/product";

export class MongoRepository implements IRepository {
  insertProduct(product: Product): Promise<number> {
    throw new Error('Method not implemented.');
  }

  getAllProduct(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  updateProduct(id: number, updates: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

}
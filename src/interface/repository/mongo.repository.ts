import { IRepository } from '../../application/repository.interface';
import { IProduct } from '../../domain/interfaces/product.inerface';

export class MongoRepository implements IRepository {
  insertProduct(product: IProduct): Promise<number> {
    throw new Error('Method not implemented.');
  }

  getAllProduct(): Promise<IProduct[]> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  updateProduct(id: number, updates: IProduct): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

}
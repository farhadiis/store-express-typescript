import { Product } from '../domain/models/product';

export interface IRepository {
    insertProduct(product: Product): Promise<number>;
    getAllProduct(): Promise<Product[]>;
    deleteProduct(id: number): Promise<boolean>;
    updateProduct(id: number, updates: any): Promise<boolean>;
}
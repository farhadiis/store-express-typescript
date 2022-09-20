import { IProduct } from '../domain/interfaces/product.inerface';

export interface IRepository {
    insertProduct(product: IProduct): Promise<number>;
    getAllProduct(): Promise<IProduct[]>;
    deleteProduct(id: number): Promise<boolean>;
    updateProduct(id: number, updates: IProduct): Promise<boolean>;
}
import { Product } from './product';
import { IProduct } from './product.inerface';

export interface IStore {
    addProduct(product: Product): Promise<number>
    removeProduct(id: number): Promise<boolean>
    updateProduct(id: number, updates: IProduct): Promise<void>
    find(query: string): Promise<Product[]>
}
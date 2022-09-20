import { Product } from '../models/product';

export interface IStore {
    addProduct(product: Product): Promise<number>
    removeProduct(id: number): Promise<boolean>
    updateProduct(id: number, updates: any): Promise<void>
    find(query: string): Promise<Product[]>
}
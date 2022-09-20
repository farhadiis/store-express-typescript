import { Product } from '../domain/product';
import { IProduct } from '../domain/product.inerface';
import { IStore } from '../domain/store.interface';
import { IRepository } from './repository.interface';

export class Store implements IStore {

    constructor(private readonly repository: IRepository) {
    }

    async addProduct(product: Product): Promise<number> {
        return this.repository.insertProduct(product);
    }

    async removeProduct(id: number): Promise<boolean> {
        return this.repository.deleteProduct(id);
    }

    async updateProduct(id: number, updates: IProduct): Promise<void> {
        await this.repository.updateProduct(id, updates);
    }

    async find(query: string): Promise<Product[]> {
        return this.repository.getAllProduct();
    }

}
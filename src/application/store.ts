import { Product } from '../domain/models/product';
import { IStore } from '../domain/interfaces/store.interface';
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

    async updateProduct(id: number, updates: any): Promise<void> {
        await this.repository.updateProduct(id, updates);
    }

    async find(query: string): Promise<Product[]> {
        return this.repository.getAllProduct();
    }

}
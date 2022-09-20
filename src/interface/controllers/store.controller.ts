import { Request, Response } from 'express';
import { Product } from '../../domain/models/product';
import { IStore } from '../../domain/interfaces/store.interface';

export class Controller {
    
    constructor(private readonly store: IStore) {
    }

    async addNewProduct(request: Request, response: Response) {
        const p = new Product();
        p.name = request.body.name;
        p.price = request.body.price;
        await this.store.addProduct(p);
        response.json({
            success: true
        });
    }

    async getAllProduct(request: Request, response: Response) {
        const result = await this.store.find("");
        response.json(result);
    }

}
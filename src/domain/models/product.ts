import { IProduct } from '../interfaces/product.inerface';

export class Product implements IProduct {
    id!: number;
    name!: string;
    price!: number;
}
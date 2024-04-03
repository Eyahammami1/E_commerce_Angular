export class Product {
    id!: string;
    sku!: string;
    name!: string;
    description!: string;
    unitPrice!: number;
    imageUrl!: string;
    active!: boolean;
    unitsInStock!: number;
    dateCreated!: Date;
    lastUpdate!: Date;
    constructor(
    id: number,
    sku: string,
    name: string,
    description: string,
    unitPrice: number,
    imageUrl: string,
    active: boolean,
    unitsInStock: number,
    dateCreated: Date,
    lastUpdate: Date,){}
}

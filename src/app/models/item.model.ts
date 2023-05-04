import { ProductModel } from "./product.model";

export interface ItemModel {
    id?: number;
    product: ProductModel;
    quantity: number;
};
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [{
    id: 1,
    code: "00001",
    productName: "Entrada BsAs - General",
    description: "Entrada Conf. BsAs - General",
    price: 1000
  },
  {
    id: 2,
    code: "00002",
    productName: "Entrada BsAs - Platea alta",
    description: "Entrada Conf. BsAs - Platea alta",
    price: 1250
  },
  {
    id: 3,
    code: "00003",
    productName: "Entrada BsAs - VIP",
    description: "Entrada Conferencia BsAs - VIP",
    price: 2000
  }]

  constructor() { }

  getAll(): ProductModel[] {
    return this.products
  };

  getById(id: number): ProductModel {
    return this.products.filter(product => product.id === id)[0];
  }
}

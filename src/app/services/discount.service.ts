import { Injectable } from '@angular/core';
import { DiscountModel } from '../models/discount.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private discounts: DiscountModel[] = [{
    id: 1,
    discountName: "Particular",
    value: 0
  },
  {
    id: 2,
    discountName: "Estudiante",
    value: 0.2
  },
  {
    id: 3,
    discountName: "Orador",
    value: 0.5
  }];;

  constructor() { }

  getAll(): DiscountModel[] {
    return this.discounts
  };

  getById(id: number): DiscountModel {
    return this.discounts.filter(discount => discount.id === id)[0];
  }

  getPercentageById(id: number): number {
    let { value } = this.getById(id);
    return value;
  }
}

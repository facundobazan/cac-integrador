import { Component } from '@angular/core';
import { ClientModel } from 'src/app/models/client.model';
import { DiscountModel } from 'src/app/models/discount.model';
import { ProductModel } from 'src/app/models/product.model';
import { DiscountService } from 'src/app/services/discount.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
})
export class BuyTicketComponent {
  products: ProductModel[];
  discounts: DiscountModel[];
  client: ClientModel = { lastName: '', firstName: '', email: '', phone: '' };
  productSelected: ProductModel;
  discountSelected: DiscountModel;
  quantity: number = 1;

  constructor(
    private readonly productService: ProductService,
    private readonly discountService: DiscountService
  ) {
    this.products = productService.getAll();
    this.productSelected = this.products[0];
    
    this.discounts = discountService.getAll();
    this.discountSelected = this.discounts[0];
  }

  /*getDiscount(event: Event) {
    //let result = event.target as HTMLInputElement;
    //this.discount = this.discountService.getPercentageById(parseInt(result.value));
  }*/

  subtotal(): number {
    return this.productSelected.price * this.quantity;
  }

  total() {
    let subtotal: number = this.subtotal();
    return subtotal - subtotal * this.discountSelected.value;
  }

  buy() {
    console.log('buy');
  }
}

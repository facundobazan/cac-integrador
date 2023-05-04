import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/models/client.model';
import { DiscountModel } from 'src/app/models/discount.model';
import { ItemModel } from 'src/app/models/item.model';
import { ProductModel } from 'src/app/models/product.model';
import { TicketModel } from 'src/app/models/ticket.model';
import { DiscountService } from 'src/app/services/discount.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  readonly products: ProductModel[];
  readonly discounts: DiscountModel[];
  client: ClientModel = { lastName: "", firstName: "", email: "", phone: "" };
  quantity: number = 1;
  price: number = 0;
  discount: number = 0;
  subtotal = (): number => {
    return this.price * this.quantity;
  }
  total = (): number => {
    return this.subtotal() - (this.subtotal() * this.discount);
  };
  // todo: consultar forma de establecer un select por default

  constructor(private readonly productService: ProductService, private readonly discountService: DiscountService) {
    this.products = productService.getAll();
    this.discounts = discountService.getAll();
  }

  ngOnInit(): void {
  }

  getDiscount(event: Event) {
    let result = event.target as HTMLInputElement;
    this.discount = this.discountService.getPercentageById(parseInt(result.value));
  }
}

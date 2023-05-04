import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private tickets?: TicketModel[] = [];
  private currentId: number = 0;

  constructor() {}

  purchase(ticket: TicketModel) {
    ticket.id = ++this.currentId;

    this.tickets!.push(ticket);
    console.info(this.tickets);
  }

  getAll(): TicketModel[] {
    console.log(this.tickets);
    return this.tickets!;
  }
}

import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private tickets?: TicketModel[] = [];
  private currentId: number = 0;

  constructor() {}

  purchase(ticket: TicketModel):number {
    ticket.id = ++this.currentId;

    this.tickets!.push(ticket);
    
    return ticket.id;
  }

  getAll(): TicketModel[] {
    //console.log(this.tickets);
    return this.tickets!;
  }

  getById(id: number): TicketModel{
    return this.tickets!.filter(ticket => ticket.id === id)[0];
  }
}

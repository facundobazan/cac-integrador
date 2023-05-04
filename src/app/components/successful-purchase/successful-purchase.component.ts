import { Component, Input } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-successful-purchase',
  templateUrl: './successful-purchase.component.html',
  styleUrls: ['./successful-purchase.component.css'],
})
export class SuccessfulPurchaseComponent {
  @Input() id: number = 1;

  readonly ticket: TicketModel | undefined;

  constructor(private readonly ticketService: TicketService) {
    this.ticket = ticketService.getById(this.id);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketModel } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-successful-purchase',
  templateUrl: './successful-purchase.component.html',
  styleUrls: ['./successful-purchase.component.css'],
})
export class SuccessfulPurchaseComponent {
  private readonly id: number;
  ticket: TicketModel | undefined;

  constructor(private readonly ticketService: TicketService, private readonly activateRoute: ActivatedRoute) {
    this.id = parseInt(activateRoute.snapshot.queryParams['id']);
    this.ticket = ticketService.getById(this.id);
  }
}

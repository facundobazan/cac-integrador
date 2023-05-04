import { ClientModel } from "./client.model";
import { DiscountModel } from "./discount.model";
import { ItemModel } from "./item.model";

export interface TicketModel {
    id?: number;
    client: ClientModel;
    items: ItemModel[];
    discount: DiscountModel;
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { ContentBottomComponent } from './components/content-bottom/content-bottom.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { DiscountService } from './services/discount.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ContentBottomComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, DiscountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

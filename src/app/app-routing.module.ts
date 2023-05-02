import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/carousel/carousel.module').then(m => m.CarouselModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/carousel/carousel.module').then(m => m.CarouselModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'content-bottom',
    loadChildren: () => import('./modules/content-bottom/content-bottom.module').then(m => m.ContentBottomModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./modules/buy-ticket/buy-ticket.module').then(m => m.BuyTicketModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

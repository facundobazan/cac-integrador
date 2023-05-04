import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from './carousel.module';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

const routes: Routes = [{
  path: '',
  title: 'Conferencia Buenos Aires',
  component: CarouselComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }

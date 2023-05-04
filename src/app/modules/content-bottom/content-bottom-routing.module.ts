import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentBottomComponent } from 'src/app/components/content-bottom/content-bottom.component';

const routes: Routes = [{
  path: '',
  title: 'Datos del evento',
  component: ContentBottomComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentBottomRoutingModule { }

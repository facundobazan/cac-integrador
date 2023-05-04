import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessfulPurchaseComponent } from 'src/app/components/successful-purchase/successful-purchase.component';

const routes: Routes = [{
  path: '',
  component: SuccessfulPurchaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessfulPurchaseRoutingModule { }

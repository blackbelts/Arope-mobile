import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelQuotationPage } from './travel-quotation.page';

const routes: Routes = [
  {
    path: '',
    component: TravelQuotationPage
  },
  {
    path: 'insurance-info',
    loadChildren: () => import('./insurance-info/insurance-info.module').then( m => m.InsuranceInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelQuotationPageRoutingModule {}

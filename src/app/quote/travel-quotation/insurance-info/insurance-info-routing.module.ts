import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceInfoPage } from './insurance-info.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceInfoPageRoutingModule {}

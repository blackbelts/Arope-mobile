import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPartnerPage } from './show-partner.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPartnerPageRoutingModule {}

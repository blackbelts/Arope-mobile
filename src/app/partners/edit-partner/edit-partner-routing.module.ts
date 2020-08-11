import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPartnerPage } from './edit-partner.page';

const routes: Routes = [
  {
    path: '',
    component: EditPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPartnerPageRoutingModule {}

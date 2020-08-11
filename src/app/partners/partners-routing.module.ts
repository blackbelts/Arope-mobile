import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnersPage } from './partners.page';

const routes: Routes = [
  {
    path: '',
    component: PartnersPage
  },
  {
    path: 'edit-partner/:partnerId',
    loadChildren: () => import('./edit-partner/edit-partner.module').then( m => m.EditPartnerPageModule)
  },
  {
    path: 'create-partner',
    loadChildren: () => import('./create-partner/create-partner.module').then( m => m.CreatePartnerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnersPageRoutingModule {}

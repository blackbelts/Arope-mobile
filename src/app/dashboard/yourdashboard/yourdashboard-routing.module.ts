import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourdashboardPage } from './yourdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: YourdashboardPage
  },
  {
    path: 'production',
    loadChildren: () => import('./production/production.module').then( m => m.ProductionPageModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then( m => m.CollectionsPageModule)
  },
  {
    path: 'renewals',
    loadChildren: () => import('./renewals/renewals.module').then( m => m.RenewalsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourdashboardPageRoutingModule {}

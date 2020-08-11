import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionsPageRoutingModule } from './collections-routing.module';

import { CollectionsPage } from './collections.page';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentModule } from 'src/app/shared/component.module';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionsPageRoutingModule,
    TranslateModule,
    // NgxDatatableModule,
    ComponentModule
  ],
  declarations: [CollectionsPage]
})
export class CollectionsPageModule {}

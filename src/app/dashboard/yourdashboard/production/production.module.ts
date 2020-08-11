import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionPageRoutingModule } from './production-routing.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ProductionPage } from './production.page';
import { CustomersPageModule } from './customers/customers.module';
import { ComponentModule } from 'src/app/shared/component.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionPageRoutingModule,
    SuperTabsModule,
    CustomersPageModule,
    ComponentModule,
    TranslateModule.forChild()
  ],
  declarations: [ProductionPage],
  
})
export class ProductionPageModule {}

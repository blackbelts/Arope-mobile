import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenewalsPageRoutingModule } from './renewals-routing.module';

import { RenewalsPage } from './renewals.page';
import { ComponentModule } from 'src/app/shared/component.module';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenewalsPageRoutingModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [RenewalsPage]
})
export class RenewalsPageModule {}

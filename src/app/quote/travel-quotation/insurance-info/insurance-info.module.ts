import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceInfoPageRoutingModule } from './insurance-info-routing.module';

import { InsuranceInfoPage } from './insurance-info.page';
import { ComponentModule } from 'src/app/shared/component.module';
import { TravelComponentsModule } from './components/travel-components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsuranceInfoPageRoutingModule,
    ComponentModule,
    TravelComponentsModule,
    TranslateModule.forChild(),
    ReactiveFormsModule
  ],
  declarations: [InsuranceInfoPage]
})
export class InsuranceInfoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelQuotationPageRoutingModule } from './travel-quotation-routing.module';

import { TravelQuotationPage } from './travel-quotation.page';
import { ComponentModule } from 'src/app/shared/component.module';
import {TravelComponentsModule} from './travel-components.module';
import { AdditionalTravelersComponent } from './components/additional-travelers/additional-travelers.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelQuotationPageRoutingModule,
    ComponentModule,
    TravelComponentsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [TravelQuotationPage, AdditionalTravelersComponent],
  entryComponents: [AdditionalTravelersComponent]
})
export class TravelQuotationPageModule {}

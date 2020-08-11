import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPartnerPageRoutingModule } from './show-partner-routing.module';

import { ShowPartnerPage } from './show-partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPartnerPageRoutingModule
  ],
  declarations: [ShowPartnerPage]
})
export class ShowPartnerPageModule {}

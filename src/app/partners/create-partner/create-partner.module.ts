import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePartnerPageRoutingModule } from './create-partner-routing.module';

import { CreatePartnerPage } from './create-partner.page';
import { ComponentModule } from 'src/app/shared/component.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePartnerPageRoutingModule,
    ComponentModule,
    TranslateModule.forChild()
  ],
  declarations: [CreatePartnerPage]
})
export class CreatePartnerPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPartnerPageRoutingModule } from './edit-partner-routing.module';

import { EditPartnerPage } from './edit-partner.page';
import { ComponentModule } from 'src/app/shared/component.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EditPartnerPageRoutingModule,
    FormsModule,
    ComponentModule,
    TranslateModule.forChild()
  ],
  declarations: [EditPartnerPage]
})
export class EditPartnerPageModule {}

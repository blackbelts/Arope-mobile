import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourdashboardPageRoutingModule } from './yourdashboard-routing.module';

import { YourdashboardPage } from './yourdashboard.page';
import { ComponentModule } from 'src/app/shared/component.module';
import { TranslateModule } from '@ngx-translate/core';
import { GaugeChartModule } from 'angular-gauge-chart';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourdashboardPageRoutingModule,
    ComponentModule,
    TranslateModule.forChild(),
    GaugeChartModule
  ],
  declarations: [YourdashboardPage],
 
})
export class YourdashboardPageModule {}

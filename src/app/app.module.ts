import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//new modules
import { SuperTabsModule } from '@ionic-super-tabs/angular';

//components
import { PopoverProfileComponent } from './shared/components/popover-profile/popover-profile.component';
import { PopoverNotificationComponent } from './shared/components/popover-notification/popover-notification.component';

//languages
import { TranslateConfigService } from './shared/translate-config.service';
import { TranslateConfigModule } from './translate-config.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonicStorageModule } from '@ionic/storage';

import { GaugeChartModule } from 'angular-gauge-chart';

@NgModule({
  declarations: [AppComponent, PopoverProfileComponent, PopoverNotificationComponent],
 
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    SuperTabsModule.forRoot(), 
    TranslateConfigModule, 
    TranslateModule,
    IonicStorageModule.forRoot(),
    GaugeChartModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TranslateConfigService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopoverProfileComponent, PopoverNotificationComponent]
})
export class AppModule {}

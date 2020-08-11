import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { TranslateConfigService } from './shared/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  open: boolean = false;
  openQuote: boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private navCtrl: NavController,
    private translate: TranslateConfigService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    let lang = 'ar';
    this.translate.setDefault(lang);
    this.translate.setLanguage(lang);

    if(lang == 'en') {
      this.translate.setDir('ltr');
    } else {
      this.translate.setDir('rtl');
    }
  }

  onChange(e) {
    const selectValue = e.target.value;
    if(selectValue === 'individual')
      this.navCtrl.navigateForward('/travel-individual');
    else if(selectValue === 'family')
      this.navCtrl.navigateForward('/travel-family');
    else if(selectValue === 'group')
      this.navCtrl.navigateForward('/travel-group');
  }

  onLogout() {
    this.auth.logout();
  }
}

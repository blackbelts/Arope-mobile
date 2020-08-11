import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-renewals',
  templateUrl: './renewals.page.html',
  styleUrls: ['./renewals.page.scss'],
})
export class RenewalsPage implements OnInit {
  loadingCollections: any[];
  tableStyle: string = "material";
  title: string;
  constructor(
    private dashboardService: DashboardService,
    private translateService: TranslateService,
    private loadCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.translateService.get("collections").subscribe((text) => {
      this.title = text.renwals;
    });

    this.loadCtrl.create({
      message: 'تحميل التجديدات ...'
    }).then(loadingEl => {
      loadingEl.present();

      this.dashboardService._renwalsLoading.subscribe((res) => {
        this.loadingCollections = res;
        console.log(res, 'renwals');
        loadingEl.dismiss();
      });
    });


    this.dashboardService.fetchSurvey();
  }

}

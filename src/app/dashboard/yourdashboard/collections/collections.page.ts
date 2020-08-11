import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-collections",
  templateUrl: "./collections.page.html",
  styleUrls: ["./collections.page.scss"],
})
export class CollectionsPage implements OnInit {
  loadingCollections: any[];
  tableStyle: string = "material";
  title: string;

  constructor(
    private dashboardService: DashboardService,
    private translateService: TranslateService,
    private loadCtrl: LoadingController
  ) {}

  ngOnInit() {
   
    this.translateService.get("collections").subscribe((text) => {
      this.title = text.title;
    });

    this.loadCtrl.create({
      message: 'تحميل التحصلات ...'
    }).then(loadingEl => {
      loadingEl.present();

      this.dashboardService.plicies.subscribe((res) => {
        this.loadingCollections = res;

        loadingEl.dismiss();
      });
    });

  }
}

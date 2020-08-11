import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverProfileComponent } from '../components/popover-profile/popover-profile.component';
import { PopoverNotificationComponent } from '../components/popover-notification/popover-notification.component';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {
  @Input('title') title: string;
  @Input('mode') mode: boolean;
  @Input('hrefBack') hrefBack: string;
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  async showPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverProfileComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });

    return await popover.present();
  }

  async popoverNotifi(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverNotificationComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });

    return await popover.present();
  }

}

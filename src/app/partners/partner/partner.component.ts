import { Component, OnInit } from '@angular/core';
import { ModalController, IonItemSliding, NavController } from '@ionic/angular';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  alertNotFound: string ;
  items;
  constructor(private modalCtrl: ModalController, private partnerService: PartnerService,private navCtrl: NavController) { }

  ngOnInit() {}
  onSearch(val) {
    this.partnerService.searchCustomer(val).subscribe(res => {
       if(res.length > 0) {
         console.log(res);
         this.items = res;
         this.alertNotFound = "";
       } else {
         this.alertNotFound = "not found data";
       }
    });
  }

  edit(partnerId, sliding: IonItemSliding) {
    sliding.close();
    this.navCtrl.navigateForward('/partners/edit-partner/'+partnerId);
    this.modalCtrl.dismiss();
   }
  closeModal() {
    this.modalCtrl.dismiss(null, "cancel");
  }
}

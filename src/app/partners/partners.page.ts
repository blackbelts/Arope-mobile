import { Component, OnInit ,OnDestroy } from '@angular/core';
import {PartnerService} from './partner.service';
import {Subscription} from 'rxjs';
import {NavController, IonItemSliding, LoadingController, ModalController} from '@ionic/angular';
import { UIService } from '../shared/ui.service';
import { PartnerComponent } from './partner/partner.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage implements OnInit, OnDestroy {
  title: string;
  items: any[];
  loadItemsSub: Subscription;
  loadSub: Subscription;
  isLoading: boolean = false;
  constructor(
    private partnerService: PartnerService, 
    private navCtrl: NavController,
    private loadingCtrl: LoadingController, 
    private uiService: UIService,
    private modalCtrl: ModalController,
    private translate: TranslateService
    ) { }

  ngOnInit() {

    this.translate.get('partner').subscribe(async (text) => {
      this.title = await text.title;
    });
  }

  ionViewWillEnter() {
    this.loadingCtrl
    .create({ keyboardClose: true, message: "Loading..." })
    .then(loadingEl => {
      loadingEl.present();

      
      
      this.loadItemsSub = this.partnerService.loadItems.subscribe(items=> {
        this.items = items;
      });

      this.loadSub = this.uiService.loadingChangedStatus.subscribe(res=> {
        this.isLoading = res;

        if(!res) {
          loadingEl.dismiss();
        }
      });

      this.partnerService.getAllCustomers();
 
    });
  }

  edit(partnerId, sliding: IonItemSliding) {
   sliding.close();
    this.navCtrl.navigateForward('/partners/edit-partner/'+partnerId);
  }

  show(partnerId, sliding: IonItemSliding) {
    this.navCtrl.navigateForward('/partners/show-partner/'+partnerId);
  }

  onOpenSearchModal() {
    
    this.modalCtrl
      .create({
        component: PartnerComponent,
        componentProps: {}
      })
      .then(modalCreate => {
        modalCreate.present();
        return modalCreate.onDidDismiss();
      })
      .then(modalDismiss => {
        console.log(modalDismiss.data, modalDismiss.role);
        if (modalDismiss.role === "confirm") {
          console.log("end search");
        }
      });
    }
  

  ngOnDestroy() {
    if(this.loadItemsSub) this.loadItemsSub.unsubscribe();
  }

}

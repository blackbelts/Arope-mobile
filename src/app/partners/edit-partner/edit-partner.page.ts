import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { PartnerService } from '../partner.service';
import {Partner} from '../partner.model';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.page.html',
  styleUrls: ['./edit-partner.page.scss'],
})
export class EditPartnerPage implements OnInit {
  title: string;
  partnerId: number;
  partner = {
    display_name: "",
    email: ""
  };
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private partnerService: PartnerService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
     this.route.paramMap.subscribe(paramMap => {
       if (!paramMap.has("partnerId")) {
         this.navCtrl.navigateBack("");
       }
       this.partnerId = Number(paramMap.get('partnerId'));
         this.partnerService.getCustomer(this.partnerId).subscribe(partner=> {
           this.partner = partner[0];
           console.log('come here', this.partner);

         });


     });


     this.translate.get('partner').subscribe(async (text) => {
      this.title = await text.edit_title;
    });
  }

  submit(form: NgForm) {
    console.log(form.value);
    this.partnerService.updateCustomer(this.partnerId, form.value).subscribe(res=> {
 
      if(res) {
        this.navCtrl.navigateForward('/partners');
      }
    });
  }



}

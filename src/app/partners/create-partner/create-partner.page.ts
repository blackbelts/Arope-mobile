import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PartnerService } from '../partner.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.page.html',
  styleUrls: ['./create-partner.page.scss'],
})
export class CreatePartnerPage implements OnInit {
  title: string;
  constructor(
    private partnerService: PartnerService, 
    private router: Router, 
    private navCtrl: NavController,
    private translate: TranslateService
    ) { }

  ngOnInit() {
    this.translate.get('partner').subscribe(async (text) => {
      this.title = await text.create_title;
    });
  }

  addPartner(form: NgForm) {
    this.partnerService.createCustomer(form.value).subscribe(res=> {
      if(res) {
        this.navCtrl.navigateForward('/partners');
      }
    })
  }

}
